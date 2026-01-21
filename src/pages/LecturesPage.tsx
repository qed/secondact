import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, Lightbulb, MessageSquare, Sparkles, Monitor, Coffee, Zap } from 'lucide-react';
import { SubPageNavigation } from '../components/SubPageNavigation';
import { SubPageFooter } from '../components/SubPageFooter';

export function LecturesPage() {
  const exampleTopics = [
    {
      title: 'AI as the Great Equalizer',
      desc: 'How 50+ leaders can use AI tools to build without hiring a CTO. Live demos with audience members.',
    },
    {
      title: 'The Longevity Dividend',
      desc: 'What the science of aging means for how you plan your next 30 years.',
    },
    {
      title: 'Second Act Entrepreneurship',
      desc: 'Why starting a company at 55 might be the best decision you ever make.',
    },
    {
      title: 'Legacy Beyond Wealth',
      desc: 'Rethinking what you leave behind—and to whom.',
    },
  ];

  const format = [
    {
      icon: Users,
      title: 'Intimate Scale',
      desc: '30-40 people max. Small enough for real conversation.',
    },
    {
      icon: Mic,
      title: 'Provocative Ideas',
      desc: 'Topics designed to challenge assumptions and spark debate.',
    },
    {
      icon: Monitor,
      title: 'Live Demos',
      desc: 'See concepts in action, not just theory.',
    },
    {
      icon: Coffee,
      title: 'Fireside Chats',
      desc: 'Conversations with CTOs and founders who bridge enterprise and individual.',
    },
  ];

  return (
    <div className="min-h-screen bg-sa-beige text-sa-brown font-sans selection:bg-sa-terracotta/30">
      <SubPageNavigation currentPage="Lectures" />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/Second_Act_Hero_Image.jpg"
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
                SA Lectures
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-4 leading-tight font-bold">
                Intimate Salons for Provocative Ideas
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-base md:text-lg text-black leading-relaxed"
              >
                30-40 person gatherings built around ideas that matter. Live demos. Fireside chats. Conversations that connect enterprise AI to individual empowerment.
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

        {/* The Concept Section */}
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
                The Concept
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6 leading-tight">
                Ideas worth gathering for. <br />
                <span className="italic text-sa-terracotta">Conversations worth having.</span>
              </h2>
            </motion.div>

            <div className="space-y-8 text-lg md:text-xl text-sa-brown/80 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Most events for our demographic are either too corporate (networking happy hours) or too passive (watching a TED talk). Neither feeds the soul.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-medium text-sa-brown border-l-4 border-sa-sage pl-6 italic"
              >
                SA Lectures are different. We gather around provocative ideas with people who want to engage, not just listen.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Small enough for real conversation. Curated for quality. Designed to leave you thinking for days.
              </motion.p>
            </div>
          </div>
        </section>

        {/* The Format Section */}
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
                The Format
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6">
                How We Gather
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {format.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm border border-sa-brown/5 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-sa-terracotta/10 flex items-center justify-center text-sa-terracotta mx-auto mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-sa-brown font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sa-brown/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Topics Section */}
        <section className="py-24 bg-sa-brown text-sa-beige">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Example Topics</h2>
              <div className="w-20 h-1 bg-sa-terracotta mx-auto mb-6" />
              <p className="text-lg text-sa-beige/80 max-w-2xl mx-auto">
                Ideas that challenge, inspire, and connect to what matters in your Second Act.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {exampleTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-sa-brown/50 border border-sa-beige/10 p-8 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Lightbulb className="text-sa-terracotta w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-white mb-3">{topic.title}</h3>
                      <p className="text-sa-beige/80 leading-relaxed">{topic.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Experience Section */}
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
                  The Experience
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-8">
                  More Than a Lecture
                </h2>
                <p className="text-lg text-sa-brown/80 mb-8 leading-relaxed">
                  Each SA Lecture is designed as an experience, not just an event. We combine thought leadership with hands-on engagement.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-sa-sage/20 flex items-center justify-center text-sa-sage">
                        <Zap size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sa-brown mb-1">Live Demonstrations</h4>
                      <p className="text-sa-brown/70 text-sm">See AI tools in action with real audience members.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-sa-sage/20 flex items-center justify-center text-sa-sage">
                        <MessageSquare size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sa-brown mb-1">Fireside Chats</h4>
                      <p className="text-sa-brown/70 text-sm">CTOs and founders share how enterprise trends connect to individual empowerment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-sa-sage/20 flex items-center justify-center text-sa-sage">
                        <Sparkles size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sa-brown mb-1">Curated Connections</h4>
                      <p className="text-sa-brown/70 text-sm">Structured networking that goes beyond business cards.</p>
                    </div>
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
                  <Mic className="text-sa-sage/30 w-16 h-16 mb-6" />
                  <h3 className="font-serif text-2xl text-sa-brown mb-6">Featured Example</h3>
                  <h4 className="font-serif text-xl text-sa-terracotta mb-4">"AI as the Great Equalizer"</h4>
                  <p className="text-lg text-sa-brown/80 leading-relaxed mb-6">
                    A live demonstration showing how 50+ leaders can use AI tools to build products without hiring a CTO. Audience members volunteer to work through real problems in real time.
                  </p>
                  <p className="text-sa-brown/70">
                    Followed by a fireside chat with CTOs who bridge enterprise AI strategy and individual empowerment.
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
