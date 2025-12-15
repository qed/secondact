import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Anchor, Smile } from 'lucide-react';
export function BenefitsSection() {
  const benefits = [{
    icon: Shield,
    title: 'Total Confidentiality',
    desc: '"What is said in the room, stays in the room." This is the foundational rule. It creates a psychological safety net that allows you to explore issues you can’t discuss with your spouse or friends.'
  }, {
    icon: Target,
    title: 'Curated Curation',
    desc: "We don't just put you in a room with strangers. We interview every applicant to ensure they are high-integrity, high-empathy, and ready to contribute."
  }, {
    icon: Anchor,
    title: 'The "Anti-Drift" Mechanism',
    desc: 'Retirement often leads to "drifting"—losing days to aimless routines. Your Core Group is your anchor. It provides the structure to ensure you are designing your life, not just enduring it.'
  }, {
    icon: Smile,
    title: 'Laughter as Medicine',
    desc: "While we tackle serious topics, we don't take ourselves too seriously. We believe that joy, humor, and lightness are essential nutrients for the brain."
  }];
  return <section className="py-16 sm:py-20 md:py-24 bg-sa-brown text-sa-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">Why SA?</h2>
          <div className="w-20 h-1 bg-sa-terracotta mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sa-terracotta/20 flex items-center justify-center text-sa-terracotta">
                  <benefit.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl mb-2 sm:mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-sa-beige/80 leading-relaxed font-light">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}