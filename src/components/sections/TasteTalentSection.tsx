import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Lightbulb, Zap, Award, Rocket } from 'lucide-react';

const whatYouBring = [
  {
    icon: Brain,
    title: 'Pattern Recognition',
    desc: 'Years of seeing what works and what fails across industries and contexts.',
  },
  {
    icon: Target,
    title: 'Customer Insight',
    desc: 'Deep understanding of user pain points from thousands of conversations.',
  },
  {
    icon: Lightbulb,
    title: 'Opinionated Perspective',
    desc: 'The conviction to say "this is the right way" and mean it.',
  },
];

const whatTheyBring = [
  {
    icon: Zap,
    title: 'AI-Native Speed',
    desc: 'Working software in days, not months. These builders think in prompts.',
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    desc: 'Near-4.0 GPAs from U of T, Waterloo. Hackathon winners. Scholarship recipients.',
  },
  {
    icon: Rocket,
    title: 'Shipping Mindset',
    desc: 'They know how to get code out the door. Fast iteration is their native language.',
  },
];

export function TasteTalentSection() {
  return (
    <section className="py-24 bg-helix-brown text-helix-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Taste Meets Talent</h2>
          <div className="w-20 h-1 bg-helix-terracotta mx-auto mb-6" />
          <p className="text-lg text-helix-beige/80 max-w-2xl mx-auto">
            Helix pairs your hard-won perspective with elite AI-native builders (ages 18-24).
            You bring the vision. They bring the velocity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* What You Bring */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-helix-terracotta/20 flex items-center justify-center text-helix-terracotta text-lg">
                T
              </span>
              What You Bring (Taste)
            </h3>
            <div className="space-y-6">
              {whatYouBring.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-helix-terracotta/20 flex items-center justify-center text-helix-terracotta">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-helix-beige/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What They Bring */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-helix-sage/20 flex items-center justify-center text-helix-sage text-lg">
                T
              </span>
              What They Bring (Talent)
            </h3>
            <div className="space-y-6">
              {whatTheyBring.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-helix-sage/20 flex items-center justify-center text-helix-sage">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-helix-beige/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
