import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Map, Users, Calendar, Target, Lightbulb, Heart, Sparkles } from 'lucide-react';
import { SubPageNavigation } from '../components/SubPageNavigation';
import { SubPageFooter } from '../components/SubPageFooter';

export function BlueprintPage() {
  const sessions = [
    {
      number: '01',
      title: 'Values Excavation',
      desc: 'Uncover what truly matters to you now—not what mattered at 30.',
    },
    {
      number: '02',
      title: 'Identity Mapping',
      desc: 'Who are you beyond your career title and parenting role?',
    },
    {
      number: '03',
      title: 'Energy Audit',
      desc: 'What activities give you energy? What drains you?',
    },
    {
      number: '04',
      title: 'Possibility Design',
      desc: 'Explore multiple versions of your next chapter.',
    },
    {
      number: '05',
      title: 'Prototype Testing',
      desc: 'Small experiments to test your hypotheses about what fits.',
    },
    {
      number: '06',
      title: 'Blueprint Creation',
      desc: 'Craft your strategic plan for the next 20 years.',
    },
  ];

  const benefits = [
    {
      icon: Compass,
      title: 'Clarity',
      desc: 'Move from "I should figure this out" to a concrete direction.',
    },
    {
      icon: Map,
      title: 'Framework',
      desc: 'A proven methodology adapted from Stanford\'s "Designing Your Life."',
    },
    {
      icon: Users,
      title: 'Community',
      desc: 'Navigate alongside 6-8 peers facing similar transitions.',
    },
    {
      icon: Sparkles,
      title: 'Capstone',
      desc: 'A cohort dinner where you share what you\'ve discovered.',
    },
  ];

  return (
    <div className="min-h-screen bg-sa-beige text-sa-brown font-sans selection:bg-sa-terracotta/30">
      <SubPageNavigation currentPage="Blueprint" />

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
              <span className="text-sa-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
                SA Blueprint
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-4 leading-tight font-bold">
                Strategy for Your Next 20 Years
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-base md:text-lg text-black leading-relaxed"
              >
                A 6-session workshop helping you figure out who you are now—beyond parenting, beyond your primary career. Think "Designing Your Life" for the 50-70 chapter.
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

        {/* The Challenge Section */}
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
                The Challenge
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6 leading-tight">
                You know you want something meaningful next. <br />
                <span className="italic text-sa-terracotta">But you're not sure what.</span>
              </h2>
            </motion.div>

            <div className="space-y-8 text-lg md:text-xl text-sa-brown/80 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                For decades, your identity was clear: the executive, the entrepreneur, the parent. You knew who you were and what you were building toward.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-medium text-sa-brown border-l-4 border-sa-sage pl-6 italic"
              >
                Now the kids are gone. The career has peaked or shifted. And you're left with a question you haven't faced since your twenties: Who am I now?
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                SA Blueprint gives you a structured process to answer that question—not with platitudes, but with actionable strategy for your next two decades.
              </motion.p>
            </div>
          </div>
        </section>

        {/* The Journey Section */}
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
                The Journey
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6">
                6 Sessions to Clarity
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sessions.map((session, index) => (
                <motion.div
                  key={session.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm border border-sa-brown/5 relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-sa-terracotta rounded-full flex items-center justify-center text-white font-serif text-lg font-bold">
                    {session.number}
                  </div>
                  <h3 className="font-serif text-xl text-sa-brown font-medium mb-3 mt-4">
                    {session.title}
                  </h3>
                  <p className="text-sa-brown/70 leading-relaxed">{session.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-sa-brown text-sa-beige">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">What You Get</h2>
              <div className="w-20 h-1 bg-sa-terracotta mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-sa-terracotta/20 flex items-center justify-center text-sa-terracotta mx-auto mb-6">
                    <benefit.icon size={28} />
                  </div>
                  <h3 className="font-serif text-2xl mb-3 text-white">{benefit.title}</h3>
                  <p className="text-sa-beige/80 leading-relaxed font-light">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Capstone Section */}
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
                  The Capstone
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-8">
                  The Cohort Dinner
                </h2>
                <p className="text-lg text-sa-brown/80 mb-8 leading-relaxed">
                  The workshop culminates in an intimate dinner where 6-8 peers share what they've discovered about themselves and their path forward.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sa-brown/90">
                    <Users className="text-sa-terracotta w-5 h-5" />
                    <span><strong>Size:</strong> 6-8 participants per cohort</span>
                  </div>
                  <div className="flex items-center gap-4 text-sa-brown/90">
                    <Calendar className="text-sa-terracotta w-5 h-5" />
                    <span><strong>Duration:</strong> 6 sessions over 6-8 weeks</span>
                  </div>
                  <div className="flex items-center gap-4 text-sa-brown/90">
                    <Heart className="text-sa-terracotta w-5 h-5" />
                    <span><strong>Environment:</strong> Psychological safety first</span>
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
                  <Target className="text-sa-sage/30 w-16 h-16 mb-6" />
                  <h3 className="font-serif text-2xl text-sa-brown mb-6">The Outcome</h3>
                  <p className="text-lg text-sa-brown/80 leading-relaxed mb-6">
                    You leave with more than inspiration. You leave with a concrete blueprint—a strategic plan for your next 20 years that's grounded in who you actually are today, not who you were a decade ago.
                  </p>
                  <p className="font-serif text-xl text-sa-terracotta italic">
                    Strategy for your Second Act.
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
