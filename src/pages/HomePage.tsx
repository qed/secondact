import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Users, Compass, Mic } from 'lucide-react';
import { HomeNavigation } from '../components/HomeNavigation';
import { HomeFooter } from '../components/HomeFooter';

export function HomePage() {
  const products = [
    {
      icon: Lightbulb,
      name: 'Taste+Talent',
      tagline: 'Your perspective. Their velocity.',
      description:
        'The last moat standing isn\'t code—it\'s taste. Pair your hard-won judgment with elite AI-native builders (ages 18-24). You know what\'s worth shipping. They know how to ship.',
      href: '/taste-talent',
      iconBg: 'bg-sa-terracotta/10',
      iconColor: 'text-sa-terracotta',
    },
    {
      icon: Compass,
      name: 'Blueprint',
      tagline: 'Strategy for your next 20 years.',
      description:
        'A 6-session workshop helping you figure out who you are now—beyond parenting, beyond your primary career. Think "Designing Your Life" for the 50-70 chapter.',
      href: '/blueprint',
      iconBg: 'bg-sa-sage/10',
      iconColor: 'text-sa-sage',
    },
    {
      icon: Users,
      name: 'Group',
      tagline: 'Your personal board of directors.',
      description:
        'Curated pods of 8-10 peers for deep support and rigorous life auditing. Not networking. Psychological safety. The #1 antidote to Second Act isolation.',
      href: '/group',
      iconBg: 'bg-sa-terracotta/10',
      iconColor: 'text-sa-terracotta',
    },
    {
      icon: Mic,
      name: 'Lectures',
      tagline: 'Intimate salons for provocative ideas.',
      description:
        '30-40 person gatherings built around ideas that matter. Live demos. Fireside chats. Conversations that connect enterprise AI to individual empowerment.',
      href: '/lectures',
      iconBg: 'bg-sa-sage/10',
      iconColor: 'text-sa-sage',
    },
  ];

  return (
    <div className="min-h-screen bg-sa-beige text-sa-brown font-sans selection:bg-sa-terracotta/30">
      <HomeNavigation />

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
              className="max-w-xl"
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-4 leading-tight font-bold">
                Four Paths to Purpose <br />After 50
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-base md:text-lg text-black leading-relaxed"
              >
                Second Act serves leaders 50+ who know they want something meaningful next—but aren't sure what. We've evolved into four interconnected offerings to help you build, connect, and thrive.
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

        {/* Products Overview Section */}
        <section className="py-24 md:py-32 bg-sa-beige px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sa-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
                Our Offerings
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6 leading-tight">
                Choose Your Path
              </h2>
              <p className="text-lg text-sa-brown/80 max-w-2xl mx-auto">
                Each offering addresses a different dimension of the Second Act journey. Some members engage with one. Others weave through all four.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
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
                    className="block bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-sa-brown/5 hover:shadow-lg hover:border-sa-sage/30 transition-all group"
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-full ${product.iconBg} flex items-center justify-center ${product.iconColor}`}
                      >
                        <product.icon size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-serif text-2xl text-sa-brown font-medium">
                            SA {product.name}
                          </h3>
                          <ArrowRight
                            size={20}
                            className="text-sa-brown/40 group-hover:text-sa-terracotta group-hover:translate-x-1 transition-all"
                          />
                        </div>
                        <p className="text-sa-terracotta font-medium text-sm mb-3">
                          {product.tagline}
                        </p>
                        <p className="text-sa-brown/70 leading-relaxed">{product.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Why Section */}
        <section className="py-24 bg-sa-brown text-sa-beige">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl mb-8">
                Why Second Act?
              </h2>
              <div className="w-20 h-1 bg-sa-terracotta mx-auto mb-8" />
              <p className="text-xl text-sa-beige/80 leading-relaxed mb-8 font-light">
                The transition into your 50s and 60s is one of life's biggest inflection points. Kids leave. Careers peak or shift. The identity you've carried for decades suddenly feels incomplete.
              </p>
              <p className="text-xl text-sa-beige/80 leading-relaxed font-light">
                Second Act exists to help you navigate this chapter with intention—whether you want to build something new, find your tribe, or simply figure out who you are now.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-sa-cream">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6">
                Not sure where to start?
              </h2>
              <p className="text-lg text-sa-brown/80 mb-10 max-w-2xl mx-auto">
                We're looking for conversations to determine which product to launch first. If you know people who'd want to shape—or join—the inaugural cohort, let's talk.
              </p>
              <a
                href="mailto:peter@theknetwork.org"
                className="inline-block bg-sa-terracotta text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-sa-terracotta/90 transition-all hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
