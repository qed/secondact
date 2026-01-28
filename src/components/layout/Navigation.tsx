import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { HelixLogo } from '../branding/HelixLogo';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-helix-beige/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className={`${
            !isScrolled ? 'bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl' : ''
          }`}
        >
          <HelixLogo size={32} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => scrollToSection('for-leaders')}
            className={`text-sm font-medium text-helix-brown/80 hover:text-helix-terracotta transition-colors cursor-pointer ${
              !isScrolled ? 'bg-white/80 backdrop-blur-sm px-5 py-2 rounded-xl' : ''
            }`}
          >
            The Leaders
          </button>
          <button
            onClick={() => scrollToSection('for-hackers')}
            className={`text-sm font-medium text-helix-brown/80 hover:text-helix-terracotta transition-colors cursor-pointer ${
              !isScrolled ? 'bg-white/80 backdrop-blur-sm px-5 py-2 rounded-xl' : ''
            }`}
          >
            The Hackers
          </button>
          <Link
            to="/apply"
            className="bg-helix-terracotta text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-helix-terracotta/90 transition-colors duration-300"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-helix-brown"
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
            className="md:hidden bg-helix-beige border-t border-helix-brown/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              <button
                onClick={() => scrollToSection('for-leaders')}
                className="text-lg font-serif text-helix-brown text-left"
              >
                The Leaders
              </button>
              <button
                onClick={() => scrollToSection('for-hackers')}
                className="text-lg font-serif text-helix-brown text-left"
              >
                The Hackers
              </button>
              <Link
                to="/apply"
                className="bg-helix-terracotta text-white text-center py-3 rounded-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
