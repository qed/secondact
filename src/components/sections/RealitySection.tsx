import React from 'react';
import { motion } from 'framer-motion';

export function RealitySection() {
  return (
    <section className="py-24 md:py-32 bg-helix-beige px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-helix-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
            The Reality
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-helix-brown mb-6 leading-tight">
            If anyone can build your product in a weekend, <br />
            <span className="italic text-helix-terracotta">what's actually defensible?</span>
          </h2>
        </motion.div>

        <div className="space-y-8 text-lg md:text-xl text-helix-brown/80 leading-relaxed font-light">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The truth is, the kid in his dorm room now can quickly build the same product that your Series B Startup took 5 years to piece together. "We built it" is about as defensible as "we have a website."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-medium text-helix-brown border-l-4 border-helix-sage pl-6 italic"
          >
            Building is mechanical now. Decent prompting skills get functional code out the door in days or weeks, not months or years.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            But having a genuinely informed opinion about the right inputs, workflows, and outputs? That takes years of pattern recognition and listening to customers complain about the same things in twelve different ways.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
