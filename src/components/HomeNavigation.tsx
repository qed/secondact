import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function HomeNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Taste+Talent', href: '/taste-talent' },
    { name: 'Blueprint', href: '/blueprint' },
    { name: 'Group', href: '/group' },
    { name: 'Lectures', href: '/lectures' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-sa-beige/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className={`font-serif text-2xl font-bold tracking-tight text-sa-brown ${
            !isScrolled ? 'bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl' : ''
          }`}
        >
          SA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-sa-brown/80 hover:text-sa-terracotta transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/helpusbuild"
            className="bg-sa-terracotta text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sa-terracotta/90 transition-colors duration-300"
          >
            Help Us Build
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sa-brown"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-sa-beige border-t border-sa-brown/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-serif text-sa-brown"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/helpusbuild"
                className="bg-sa-terracotta text-white text-center py-3 rounded-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Help Us Build
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
