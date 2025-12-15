import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
export function MemberProfile() {
  const profiles = [{
    type: 'The Pivoters',
    desc: 'Former executives launching consultancies or non-profits.'
  }, {
    type: 'The Creatives',
    desc: 'People finally writing that book or starting that studio.'
  }, {
    type: 'The Explorers',
    desc: 'Travelers and lifelong learners seeking companions for the journey.'
  }, {
    type: 'The Empty Nesters',
    desc: 'Parents redefining their identity beyond "Mom" or "Dad."'
  }];
  return <section id="who" className="py-16 sm:py-20 md:py-24 bg-sa-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Who belongs */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sa-brown mb-6 sm:mb-8">
              Who belongs at SA?
            </h2>
            <p className="text-base sm:text-lg text-sa-brown/80 mb-8 sm:mb-10 leading-relaxed">
              Our members come from all walks of life, but they share a common
              thread:{' '}
              <span className="font-medium text-sa-terracotta">
                They aren't done yet.
              </span>
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {profiles.map((profile, index) => <div key={profile.type} className="bg-white p-5 sm:p-6 rounded-lg border border-sa-brown/5">
                  <h4 className="font-serif text-base sm:text-lg text-sa-brown font-bold mb-2">
                    {profile.type}
                  </h4>
                  <p className="text-xs sm:text-sm text-sa-brown/70 leading-relaxed">{profile.desc}</p>
                </div>)}
            </div>
          </motion.div>

          {/* Right: Quote */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative">
            <div className="bg-sa-sage/10 p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl relative">
              <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 text-sa-sage/30 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -z-10" />
              <blockquote className="relative z-10">
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-sa-brown italic leading-relaxed mb-6 sm:mb-8">
                  "I spent 40 years being 'The Boss.' I didn't realize how
                  lonely it was until I stopped. My SA group gave me a place
                  where I didn't have to be in charge—I just had to be me. It’s
                  the highlight of my month."
                </p>
                <footer className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sa-terracotta rounded-full flex items-center justify-center text-white font-serif text-lg sm:text-xl flex-shrink-0">
                    S
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-sm sm:text-base text-sa-brown block">
                      Sarah J.
                    </cite>
                    <span className="text-xs sm:text-sm text-sa-brown/60">
                      Former V.P. & SA Member
                    </span>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}