import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Users, Award, Rocket, Brain, Target, Clock } from 'lucide-react';
import { SubPageNavigation } from '../components/SubPageNavigation';
import { SubPageFooter } from '../components/SubPageFooter';

export function TasteTalentPage() {
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

  const moatPoints = [
    {
      title: 'Build vs. Understand',
      content: 'Being able to build and understanding the best way to solve a problem aren\'t remotely the same thing.',
    },
    {
      title: 'Accumulated Judgment',
      content: 'Great product people ship constantly. They\'re plugging holes before users report them. Every customer conversation feeds their model of how things should work.',
    },
    {
      title: 'Hooks That Build',
      content: 'Memory that doesn\'t port. Context about preferences. Integration work and muscle memory. Data that makes the product smarter for your specific use case.',
    },
    {
      title: 'Moving Target',
      content: 'Over time, they get so far ahead that copying them is like hitting a moving target while you\'re reading their old blog posts.',
    },
  ];

  return (
    <div className="min-h-screen bg-sa-beige text-sa-brown font-sans selection:bg-sa-terracotta/30">
      <SubPageNavigation currentPage="Taste+Talent" />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={`${import.meta.env.BASE_URL}taste-talent-hero.jpg`}
              alt="SA Taste+Talent hero image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 flex-1 flex items-start pt-32 md:pt-36 lg:pt-40 px-6 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-xl bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl"
            >
              <span className="text-sa-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
                SA Taste+Talent
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-4 leading-tight font-bold">
                The Last Moat Standing
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-base md:text-lg text-black leading-relaxed"
              >
                Anyone can build a product in a weekend now. What they can't build is the accumulated judgment from years of pattern recognition and knowing the right way to solve a problem.
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

        {/* The Problem Section */}
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
                The Reality
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6 leading-tight">
                If anyone can build your product in a weekend, <br />
                <span className="italic text-sa-terracotta">what's actually defensible?</span>
              </h2>
            </motion.div>

            <div className="space-y-8 text-lg md:text-xl text-sa-brown/80 leading-relaxed font-light">
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
                className="font-medium text-sa-brown border-l-4 border-sa-sage pl-6 italic"
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

        {/* The Answer Section */}
        <section className="py-24 bg-sa-cream">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sa-sage font-bold tracking-widest uppercase text-sm mb-4 block">
                The Answer
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6">
                An opinionated perspective on the solution
              </h2>
              <p className="text-lg text-sa-brown/80 max-w-2xl mx-auto">
                This is why great products feel "just better" even when you can't articulate why. The last real moat standing is taste.
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
                  className="bg-white p-6 rounded-xl shadow-sm border border-sa-brown/5"
                >
                  <h3 className="font-serif text-xl text-sa-terracotta font-medium mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sa-brown/70 text-sm leading-relaxed">{point.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Partnership Section */}
        <section className="py-24 bg-sa-brown text-sa-beige">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Taste Meets Talent</h2>
              <div className="w-20 h-1 bg-sa-terracotta mx-auto mb-6" />
              <p className="text-lg text-sa-beige/80 max-w-2xl mx-auto">
                SA Taste+Talent pairs your hard-won perspective with elite AI-native builders (ages 18-24). You bring the vision. They bring the velocity.
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
                  <span className="w-10 h-10 rounded-full bg-sa-terracotta/20 flex items-center justify-center text-sa-terracotta text-lg">
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
                        <div className="w-10 h-10 rounded-full bg-sa-terracotta/20 flex items-center justify-center text-sa-terracotta">
                          <item.icon size={20} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{item.title}</h4>
                        <p className="text-sa-beige/70 text-sm">{item.desc}</p>
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
                  <span className="w-10 h-10 rounded-full bg-sa-sage/20 flex items-center justify-center text-sa-sage text-lg">
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
                        <div className="w-10 h-10 rounded-full bg-sa-sage/20 flex items-center justify-center text-sa-sage">
                          <item.icon size={20} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{item.title}</h4>
                        <p className="text-sa-beige/70 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Builders Section */}
        <section className="py-24 bg-sa-beige">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sa-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
                  The Talent
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-8">
                  Elite AI-Native Builders
                </h2>
                <p className="text-lg text-sa-brown/80 mb-8 leading-relaxed">
                  We have teams of near-4.0 GPA students from U of T, Waterloo, and similar schools. Several are already hackathon winners ($1,000+). They know how to ship.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sa-brown/90">
                    <Users className="text-sa-terracotta w-5 h-5" />
                    <span><strong>Age:</strong> 18-24 years old</span>
                  </div>
                  <div className="flex items-center gap-4 text-sa-brown/90">
                    <Award className="text-sa-terracotta w-5 h-5" />
                    <span><strong>Schools:</strong> U of T, Waterloo, and similar</span>
                  </div>
                  <div className="flex items-center gap-4 text-sa-brown/90">
                    <Clock className="text-sa-terracotta w-5 h-5" />
                    <span><strong>Speed:</strong> Working software in a weekend</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-sa-sage/10 p-10 md:p-14 rounded-2xl">
                  <h3 className="font-serif text-2xl text-sa-brown mb-6">The Bottom Line</h3>
                  <p className="text-lg text-sa-brown/80 leading-relaxed mb-6">
                    In a world where your competition isn't only other startups—it's also your user deciding they could probably just do this themselves on a Saturday—only one thing matters:
                  </p>
                  <p className="font-serif text-2xl text-sa-terracotta italic">
                    Having a perspective worth paying for.
                  </p>
                  <p className="text-sa-brown/70 mt-6">
                    A point of view compelling enough to make people choose your solution over building it themselves. That's the bar now.
                  </p>
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
