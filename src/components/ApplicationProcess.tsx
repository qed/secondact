import React from 'react';
import { motion } from 'framer-motion';
export function ApplicationProcess() {
  const steps = [{
    number: '01',
    title: 'The Application',
    desc: 'Tell us about your journey. Not just your resume, but your story. All members must have enough First Act points to join a Second Act Core Group.'
  }, {
    number: '02',
    title: 'The Interview',
    desc: 'If you qualify, we set up a vetting call. This isn’t a sales pitch - it’s a conversation to hear how you think, what you’re building, and your Second Act energy.'
  }, {
    number: '03',
    title: 'Community Review',
    desc: 'Peter (Founder) and Asheesh (Advisor) review every application. The Community has an opportunity to veto members to keep SA as a high-trust environment.'
  }, {
    number: '04',
    title: 'The Placement',
    desc: 'If accepted, we match you with a local Second Act Group that fits your personality and schedule. Core group placement is carefully curated and can’t be rushed.'
  }];
  return <section id="apply" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sa-brown mb-4 sm:mb-6">
            How to Join
          </h2>
          <p className="text-base sm:text-lg text-sa-brown/70 max-w-2xl mx-auto px-2">
            We are intentional about growth. We are looking for diversity of
            thought and unity of values.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-sa-beige -z-10" />

          {steps.map((step, index) => <motion.div key={step.number} initial={{
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
        }} className="relative bg-white pt-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sa-beige rounded-full flex items-center justify-center text-sa-terracotta font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6 mx-auto md:mx-0 border-4 border-white">
                {step.number}
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-sa-brown font-bold mb-2 sm:mb-3 text-center md:text-left">
                {step.title}
              </h3>
              <p className="text-sa-brown/70 text-xs sm:text-sm leading-relaxed text-center md:text-left">
                {step.desc}
              </p>
            </motion.div>)}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-sa-terracotta to-sa-sage">
            <a href="#" className="block px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 bg-white rounded-full text-sa-brown font-bold text-base sm:text-lg hover:bg-transparent hover:text-white transition-all duration-300">
              Start Your Application
            </a>
          </div>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-sa-brown/50">
            50% off until Spring 2026 for founding members
          </p>
        </div>
      </div>
    </section>;
}