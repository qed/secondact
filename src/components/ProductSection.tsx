import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Calendar, MessageCircle } from 'lucide-react';
export function ProductSection() {
  const fTopics = [{
    title: 'Family',
    desc: 'Partners, aging parents, adult children'
  }, {
    title: 'Finances',
    desc: 'Security, legacy, estate'
  }, {
    title: 'Fitness',
    desc: 'Health challenges, bio-hacking, energy'
  }, {
    title: 'Faith',
    desc: 'Purpose, philosophy, spirituality'
  }, {
    title: 'Future',
    desc: 'What’s next? What is the legacy?'
  }];
  return <section id="forum" className="py-16 sm:py-20 md:py-24 bg-sa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: Description */}
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
            <span className="text-sa-sage font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
              The Second Act Group
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sa-brown mb-6 sm:mb-8 leading-tight">
              Your Personal Board of Directors{' '}
              <span className="italic text-sa-sage">(For Life)</span>
            </h2>
            <p className="text-base sm:text-lg text-sa-brown/80 mb-6 sm:mb-8 leading-relaxed">
              SA is not a social club. It is a structured, intentional
              commitment to your own growth. When you join, you are hand-matched
              into a Core Group: 8 peers who live locally, share your values,
              and match your drive, but bring different perspectives to the
              table.
            </p>

            <div className="bg-sa-beige p-6 sm:p-8 rounded-2xl border border-sa-brown/5">
              <h3 className="font-serif text-xl sm:text-2xl text-sa-brown mb-5 sm:mb-6">
                The Commitment
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start sm:items-center gap-3 sm:gap-4 text-sm sm:text-base text-sa-brown/90">
                  <Users className="text-sa-terracotta w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    <strong>Format:</strong> In-person, YPO-style Forums
                  </span>
                </li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4 text-sm sm:text-base text-sa-brown/90">
                  <Calendar className="text-sa-terracotta w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    <strong>Frequency:</strong> Once a month
                  </span>
                </li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4 text-sm sm:text-base text-sa-brown/90">
                  <Clock className="text-sa-terracotta w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    <strong>Duration:</strong> 2.5 to 3 hours
                  </span>
                </li>
                <li className="flex items-start sm:items-center gap-3 sm:gap-4 text-sm sm:text-base text-sa-brown/90">
                  <MessageCircle className="text-sa-terracotta w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    <strong>Facilitation:</strong> Professional moderation
                    protocols
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: The 5 Fs */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            <div className="hidden md:block absolute -top-10 -right-10 w-64 h-64 bg-sa-sage/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="font-serif text-2xl sm:text-3xl text-sa-brown mb-6 sm:mb-8">
                The Experience
              </h3>
              <p className="text-base sm:text-lg text-sa-brown/80 mb-6 sm:mb-8 leading-relaxed">
                No small talk. No weather reports. We use a proven "Gestalt"
                protocol—we share experiences, not advice. We dig deep into the
                "5 Fs":
              </p>

              <div className="space-y-3 sm:space-y-4">
                {fTopics.map((topic, index) => <motion.div key={topic.title} initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: 0.1 * index
              }} className="group bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-sa-brown/5 hover:border-sa-sage/30 transition-all hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <h4 className="font-serif text-lg sm:text-xl text-sa-terracotta font-medium">
                        {topic.title}
                      </h4>
                      <span className="text-xs sm:text-sm text-sa-brown/60">
                        {topic.desc}
                      </span>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}