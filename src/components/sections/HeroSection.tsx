import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Lightbulb, Wrench } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}taste-talent-hero.jpg`}
          alt="Helix Hackathons hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero content with lightbox - centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-24 md:pt-28 lg:pt-32 px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl"
        >
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-black mb-4 leading-tight font-bold">
            If you:
          </h1>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base md:text-lg text-black leading-relaxed space-y-3 mb-6 ml-2"
          >
            <li className="flex items-start gap-3">
              <Briefcase size={20} className="text-helix-terracotta mt-1 flex-shrink-0" />
              <span>want custom software for your nonprofit</span>
            </li>
            <li className="flex items-start gap-3">
              <Lightbulb size={20} className="text-helix-terracotta mt-1 flex-shrink-0" />
              <span>like to tinker and have an idea</span>
            </li>
            <li className="flex items-start gap-3">
              <Wrench size={20} className="text-helix-terracotta mt-1 flex-shrink-0" />
              <span>have a software idea for your main business</span>
            </li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="font-serif text-xl md:text-2xl lg:text-3xl text-helix-terracotta font-bold mb-4"
          >
            ...then you need a Helix Hackathon
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-base md:text-lg text-black leading-relaxed"
          >
            We pair experienced leaders who have{' '}
            <span className="text-helix-terracotta font-medium">taste</span>{' '}
            with elite best-of-the-best AI native builders who have{' '}
            <span className="text-helix-sage font-medium">talent</span>.
            Together, they build what neither could alone.
          </motion.p>
        </motion.div>
      </div>

      {/* CTA buttons at bottom */}
      <div className="relative z-10 pb-16 md:pb-20 lg:pb-24 px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-helix-terracotta text-white px-10 py-4 rounded-md text-base md:text-lg font-medium hover:bg-helix-terracotta/90 transition-all hover:scale-105 shadow-lg"
          >
            Apply as a Leader
          </Link>
          <button
            onClick={() => scrollToSection('for-hackers')}
            className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm text-black px-10 py-4 rounded-md text-base md:text-lg font-medium hover:bg-white transition-all hover:scale-105 shadow-lg"
          >
            I'm a Builder
          </button>
        </motion.div>
      </div>
    </section>
  );
}
