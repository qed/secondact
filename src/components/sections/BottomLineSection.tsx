import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function BottomLineSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-helix-brown text-helix-beige">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-6">The Bottom Line</h2>
          <p className="text-xl text-helix-beige/80 max-w-2xl mx-auto leading-relaxed">
            In a world where your competition isn't only other startups—it's also your user
            deciding they could probably just do this themselves on a Saturday—only one thing matters:
          </p>
          <p className="font-serif text-2xl md:text-3xl text-helix-terracotta italic mt-8">
            Having a perspective worth paying for.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Leaders CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-helix-terracotta/10 border border-helix-terracotta/30 rounded-2xl p-8 h-full">
              <span className="text-helix-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
                For Leaders
              </span>
              <h3 className="font-serif text-2xl text-white mb-4">
                You've got the taste.
              </h3>
              <p className="text-helix-beige/70 mb-6">
                Apply to be matched with elite builders who can bring your vision to life
                at the speed of AI.
              </p>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-helix-terracotta text-white px-6 py-3 rounded-full font-medium hover:bg-helix-terracotta/90 transition-all group"
              >
                Apply Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Hackers CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-helix-sage/10 border border-helix-sage/30 rounded-2xl p-8 h-full">
              <span className="text-helix-sage font-medium tracking-widest uppercase text-sm mb-4 block">
                For Builders
              </span>
              <h3 className="font-serif text-2xl text-white mb-4">
                You've got the talent.
              </h3>
              <p className="text-helix-beige/70 mb-6">
                Join the waitlist to be matched with leaders who have real problems
                worth solving.
              </p>
              <button
                onClick={() => scrollToSection('for-hackers')}
                className="inline-flex items-center gap-2 bg-helix-sage text-white px-6 py-3 rounded-full font-medium hover:bg-helix-sage/90 transition-all group"
              >
                Join Waitlist
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
