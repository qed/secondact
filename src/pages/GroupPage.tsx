import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Calendar, MessageCircle, Shield, Target, Anchor, Smile, Quote } from 'lucide-react';
import { SubPageNavigation } from '../components/SubPageNavigation';
import { SubPageFooter } from '../components/SubPageFooter';

export function GroupPage() {
  const fTopics = [
    { title: 'Family', desc: 'Partners, aging parents, adult children' },
    { title: 'Finances', desc: 'Security, legacy, estate' },
    { title: 'Fitness', desc: 'Health challenges, bio-hacking, energy' },
    { title: 'Faith', desc: 'Purpose, philosophy, spirituality' },
    { title: 'Future', desc: "What's next? What is the legacy?" },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Total Confidentiality',
      desc: '"What is said in the room, stays in the room." This is the foundational rule. It creates a psychological safety net that allows you to explore issues you can\'t discuss with your spouse or friends.',
    },
    {
      icon: Target,
      title: 'Curated Curation',
      desc: "We don't just put you in a room with strangers. We interview every applicant to ensure they are high-integrity, high-empathy, and ready to contribute.",
    },
    {
      icon: Anchor,
      title: 'The "Anti-Drift" Mechanism',
      desc: 'Retirement often leads to "drifting"—losing days to aimless routines. Your Core Group is your anchor. It provides the structure to ensure you are designing your life, not just enduring it.',
    },
    {
      icon: Smile,
      title: 'Laughter as Medicine',
      desc: "While we tackle serious topics, we don't take ourselves too seriously. We believe that joy, humor, and lightness are essential nutrients for the brain.",
    },
  ];

  const profiles = [
    { type: 'The Pivoters', desc: 'Former executives launching consultancies or non-profits.' },
    { type: 'The Creatives', desc: 'People finally writing that book or starting that studio.' },
    { type: 'The Explorers', desc: 'Travelers and lifelong learners seeking companions for the journey.' },
    { type: 'The Empty Nesters', desc: 'Parents redefining their identity beyond "Mom" or "Dad."' },
  ];

  return (
    <div className="min-h-screen bg-sa-beige text-sa-brown font-sans selection:bg-sa-terracotta/30">
      <SubPageNavigation currentPage="Group" />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={`${import.meta.env.BASE_URL}group-hero.jpg`}
              alt="SA Group hero image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 flex-1 flex items-start pt-32 md:pt-36 lg:pt-40 px-6 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-xl"
            >
              <span className="text-sa-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
                SA Group
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-4 leading-tight font-bold">
                Your Personal Board of Directors <span className="italic text-sa-sage">(For Life)</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-base md:text-lg text-black leading-relaxed"
              >
                The #1 enemy of the Second Act is isolation. When work ends or kids leave, social infrastructure collapses. SA Groups are curated pods of 8-10 peers—a personal board of directors for deep support and rigorous life auditing. Not networking. Psychological safety.
              </motion.p>
            </motion.div>
          </div>

          <div className="relative z-10 pb-16 md:pb-20 lg:pb-24 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <a
                href="mailto:peter@theknetwork.org"
                className="inline-block bg-[#F5E6D3] text-black px-10 py-4 md:px-12 md:py-4.5 rounded-md text-base md:text-lg font-medium hover:bg-[#E8D5BD] transition-all hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>

        {/* The Why Section */}
        <section className="py-24 md:py-32 bg-sa-beige px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sa-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
                The Why
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6 leading-tight">
                Loneliness is the new smoking. <br />
                <span className="italic text-sa-terracotta">Community is the cure.</span>
              </h2>
            </motion.div>

            <div className="space-y-8 text-lg md:text-xl text-sa-brown/80 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                As we move into our "Second Act," our social circles naturally shrink. Children move out. Co-workers retire. The casual interactions that fueled us for 30 years begin to fade.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-medium text-sa-brown border-l-4 border-sa-sage pl-6 italic"
              >
                Research shows that social connection is the single strongest predictor of a long, healthy life—more than diet, exercise, or genetics.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                But finding deep connection at this stage is hard. The country club is too superficial. The alumni network is too focused on business. You need a space where you can drop the "everything is fine" mask and talk about what really matters.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="py-24 bg-sa-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sa-sage font-bold tracking-widest uppercase text-sm mb-4 block">
                  The Second Act Group
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-8">
                  The Commitment
                </h2>
                <p className="text-lg text-sa-brown/80 mb-8 leading-relaxed">
                  SA is not a social club. It is a structured, intentional commitment to your own growth. When you join, you are hand-matched into a Core Group: 8 peers who live locally, share your values, and match your drive, but bring different perspectives to the table.
                </p>

                <div className="bg-sa-beige p-8 rounded-2xl border border-sa-brown/5">
                  <h3 className="font-serif text-2xl text-sa-brown mb-6">The Format</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-sa-brown/90">
                      <Users className="text-sa-terracotta w-5 h-5" />
                      <span><strong>Format:</strong> In-person, YPO-style Forums</span>
                    </li>
                    <li className="flex items-center gap-4 text-sa-brown/90">
                      <Calendar className="text-sa-terracotta w-5 h-5" />
                      <span><strong>Frequency:</strong> Once a month</span>
                    </li>
                    <li className="flex items-center gap-4 text-sa-brown/90">
                      <Clock className="text-sa-terracotta w-5 h-5" />
                      <span><strong>Duration:</strong> 2.5 to 3 hours</span>
                    </li>
                    <li className="flex items-center gap-4 text-sa-brown/90">
                      <MessageCircle className="text-sa-terracotta w-5 h-5" />
                      <span><strong>Facilitation:</strong> Professional moderation protocols</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-sa-sage/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="font-serif text-3xl text-sa-brown mb-8">The Experience</h3>
                  <p className="text-sa-brown/80 mb-8">
                    No small talk. No weather reports. We use a proven "Gestalt" protocol—we share experiences, not advice. We dig deep into the "5 Fs":
                  </p>

                  <div className="space-y-4">
                    {fTopics.map((topic, index) => (
                      <motion.div
                        key={topic.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="group bg-white p-6 rounded-xl shadow-sm border border-sa-brown/5 hover:border-sa-sage/30 transition-all hover:shadow-md"
                      >
                        <div className="flex items-baseline gap-3">
                          <h4 className="font-serif text-xl text-sa-terracotta font-medium">
                            {topic.title}
                          </h4>
                          <span className="text-sm text-sa-brown/60">{topic.desc}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-sa-brown text-sa-beige">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Why SA Group?</h2>
              <div className="w-20 h-1 bg-sa-terracotta mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-sa-terracotta/20 flex items-center justify-center text-sa-terracotta">
                      <benefit.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-3 text-white">{benefit.title}</h3>
                    <p className="text-sa-beige/80 leading-relaxed font-light">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Profile Section */}
        <section className="py-24 bg-sa-beige overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-8">
                  Who belongs at SA?
                </h2>
                <p className="text-lg text-sa-brown/80 mb-10">
                  Our members come from all walks of life, but they share a common thread:{' '}
                  <span className="font-medium text-sa-terracotta">They aren't done yet.</span>
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {profiles.map((profile) => (
                    <div
                      key={profile.type}
                      className="bg-white p-6 rounded-lg border border-sa-brown/5"
                    >
                      <h4 className="font-serif text-lg text-sa-brown font-bold mb-2">
                        {profile.type}
                      </h4>
                      <p className="text-sm text-sa-brown/70">{profile.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-sa-sage/10 p-10 md:p-14 rounded-2xl relative">
                  <Quote className="absolute top-8 left-8 text-sa-sage/30 w-16 h-16 -z-10" />
                  <blockquote className="relative z-10">
                    <p className="font-serif text-2xl md:text-3xl text-sa-brown italic leading-relaxed mb-8">
                      "I spent 40 years being 'The Boss.' I didn't realize how lonely it was until I stopped. My SA group gave me a place where I didn't have to be in charge—I just had to be me. It's the highlight of my month."
                    </p>
                    <footer className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-sa-terracotta rounded-full flex items-center justify-center text-white font-serif text-xl">
                        S
                      </div>
                      <div>
                        <cite className="not-italic font-bold text-sa-brown block">Sarah J.</cite>
                        <span className="text-sm text-sa-brown/60">Former V.P. & SA Member</span>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <SubPageFooter />
    </div>
  );
}
