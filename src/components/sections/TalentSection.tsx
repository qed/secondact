import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock } from 'lucide-react';
import { HackerWaitlistForm } from '../forms/HackerWaitlistForm';

export function TalentSection() {
  return (
    <section id="for-hackers" className="py-24 bg-helix-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-helix-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
              The Talent
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-helix-brown mb-8">
              Elite AI-Native Builders
            </h2>
            <p className="text-lg text-helix-brown/80 mb-8 leading-relaxed">
              Builders are best-of-the-best hackers who have won at least $5,000 in other hackathons,
              e.g. at MIT, Waterloo or Stanford. Only 8 teams per round. They know how to ship.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-helix-brown/90">
                <Users className="text-helix-terracotta w-5 h-5" />
                <span><strong>Age:</strong> 18-24 years old</span>
              </div>
              <div className="flex items-center gap-4 text-helix-brown/90">
                <Award className="text-helix-terracotta w-5 h-5" />
                <span><strong>Qualifications:</strong> Have won $5K+ in other hackathons or similar</span>
              </div>
              <div className="flex items-center gap-4 text-helix-brown/90">
                <Clock className="text-helix-terracotta w-5 h-5" />
                <span><strong>Speed:</strong> Working software in a weekend</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HackerWaitlistForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
