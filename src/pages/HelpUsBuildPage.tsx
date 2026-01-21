import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Compass, Mic, ArrowRight, Brain, Zap } from 'lucide-react';
import { SubPageNavigation } from '../components/SubPageNavigation';
import { SubPageFooter } from '../components/SubPageFooter';

export function HelpUsBuildPage() {
  const products = [
    {
      icon: Lightbulb,
      name: 'Taste+Talent',
      description: 'Pair your hard-won perspective with elite AI-native builders.',
      href: '/taste-talent',
    },
    {
      icon: Compass,
      name: 'Blueprint',
      description: 'A 6-session workshop to design your next 20 years.',
      href: '/blueprint',
    },
    {
      icon: Users,
      name: 'Group',
      description: 'Curated pods of 8-10 peers for deep support.',
      href: '/group',
    },
    {
      icon: Mic,
      name: 'Lectures',
      description: 'Intimate salons built around provocative ideas.',
      href: '/lectures',
    },
  ];

  return (
    <div className="min-h-screen bg-sa-beige text-sa-brown font-sans selection:bg-sa-terracotta/30">
      <SubPageNavigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={`${import.meta.env.BASE_URL}Second_Act_Hero_Image.jpg`}
              alt="Group of friends dining and laughing at sunset by the beach"
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
                Join Us
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-4 leading-tight font-bold">
                Help Us Build Second Act
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-base md:text-lg text-black leading-relaxed"
              >
                We're building four interconnected products to serve leaders 50+ navigating their next chapter. Whether you bring the taste or the talent, there's a place for you.
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

        {/* The Products Section */}
        <section className="py-24 md:py-32 bg-sa-beige px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sa-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
                What We're Building
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6 leading-tight">
                Four Products. One Mission.
              </h2>
              <p className="text-lg text-sa-brown/80 max-w-2xl mx-auto">
                We would like to build all four of these products and are looking for people who want to help shape what comes next.
              </p>
            </motion.div>

            <div className="space-y-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={product.href}
                    className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-sm border border-sa-brown/5 hover:shadow-md hover:border-sa-sage/30 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sa-terracotta/10 flex items-center justify-center text-sa-terracotta">
                      <product.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-sa-brown font-medium">
                        SA {product.name}
                      </h3>
                      <p className="text-sa-brown/70">{product.description}</p>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-sa-brown/40 group-hover:text-sa-terracotta group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Taste vs Talent Section */}
        <section className="py-24 bg-sa-brown text-sa-beige">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Are You Taste or Talent?</h2>
              <div className="w-20 h-1 bg-sa-terracotta mx-auto mb-6" />
              <p className="text-lg text-sa-beige/80 max-w-2xl mx-auto">
                We need both. The magic happens when they come together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Taste */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-sa-brown/50 border border-sa-beige/10 p-8 rounded-2xl"
              >
                <div className="w-14 h-14 rounded-full bg-sa-terracotta/20 flex items-center justify-center text-sa-terracotta mb-6">
                  <Brain size={28} />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">You Have Taste</h3>
                <p className="text-sa-beige/80 mb-6 leading-relaxed">
                  You've spent decades solving problems, building companies, and understanding what makes products work. You have an opinionated perspective that only comes from experience.
                </p>
                <ul className="space-y-3 text-sa-beige/70">
                  <li className="flex items-start gap-2">
                    <span className="text-sa-terracotta mt-1">•</span>
                    <span>You know what's worth building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sa-terracotta mt-1">•</span>
                    <span>You understand user pain points deeply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sa-terracotta mt-1">•</span>
                    <span>You can spot the right solution when you see it</span>
                  </li>
                </ul>
              </motion.div>

              {/* Talent */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-sa-brown/50 border border-sa-beige/10 p-8 rounded-2xl"
              >
                <div className="w-14 h-14 rounded-full bg-sa-sage/20 flex items-center justify-center text-sa-sage mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">You Have Talent</h3>
                <p className="text-sa-beige/80 mb-6 leading-relaxed">
                  You're an AI-native builder who can turn ideas into working software in days. You think in prompts and ship in sprints.
                </p>
                <ul className="space-y-3 text-sa-beige/70">
                  <li className="flex items-start gap-2">
                    <span className="text-sa-sage mt-1">•</span>
                    <span>You know how to build fast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sa-sage mt-1">•</span>
                    <span>You're fluent in modern AI tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sa-sage mt-1">•</span>
                    <span>You want to work on something meaningful</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-sa-cream">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6">
                Let's Build Together
              </h2>
              <p className="text-lg text-sa-brown/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you're a Taste person with decades of pattern recognition, or a Talent person who can ship in a weekend—we want to hear from you. The best products emerge when both come together.
              </p>
              <a
                href="mailto:peter@theknetwork.org"
                className="inline-block bg-sa-terracotta text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-sa-terracotta/90 transition-all hover:scale-105"
              >
                Get in Touch
              </a>
              <p className="mt-4 text-sm text-sa-brown/50">
                peter@theknetwork.org
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <SubPageFooter />
    </div>
  );
}
