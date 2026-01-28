import React from 'react';
import { motion } from 'framer-motion';

const moatPoints = [
  {
    title: 'Pattern Recognition',
    content: 'Years of seeing what works and what fails across industries. You spot opportunities others miss.',
  },
  {
    title: 'Customer Insight',
    content: 'Deep understanding of user pain points from thousands of conversations and shipped products.',
  },
  {
    title: 'Opinionated Perspective',
    content: 'The conviction to say "this is the right way" and mean it. That\'s what creates differentiation.',
  },
  {
    title: 'Strategic Intuition',
    content: 'Knowing which features matter and which are distractions. What to build, and what to ignore.',
  },
];

export function AnswerSection() {
  return (
    <section id="for-leaders" className="py-24 bg-helix-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-helix-sage font-bold tracking-widest uppercase text-sm mb-4 block">
            The Answer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-helix-brown mb-6">
            The last real moat standing is <span className="text-helix-terracotta italic">taste</span>
          </h2>
          <p className="text-lg text-helix-brown/80 max-w-2xl mx-auto">
            This is why great products feel "just better" even when you can't articulate why.
            You have the accumulated judgment. We'll give you the builders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {moatPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-helix-brown/5"
            >
              <h3 className="font-serif text-xl text-helix-terracotta font-medium mb-3">
                {point.title}
              </h3>
              <p className="text-helix-brown/70 text-sm leading-relaxed">{point.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
