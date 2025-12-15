import React from 'react';
import { motion } from 'framer-motion';
export function Hero() {
  return <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={`${import.meta.env.BASE_URL}Second_Act_Hero_Image.jpg`} alt="Group of friends dining and laughing at sunset by the beach" className="w-full h-full object-cover" />
      </div>

      {/* Text Content - Upper Left */}
      <div className="relative z-10 flex-1 flex items-start pt-12 md:pt-16 lg:pt-20 px-6 md:px-12 lg:px-16">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="max-w-xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-4 leading-tight font-bold">
            Laughter. Connection. <br />A long, happy life.
          </h1>
          <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut'
      }} className="text-base md:text-lg text-black leading-relaxed">
          The curated community for leaders, creators, and doers navigating
          their "Post-Kids" chapter.
        </motion.p>
        </motion.div>
      </div>

      {/* CTA Button - Centered Bottom */}
      <div className="relative z-10 pb-16 md:pb-20 lg:pb-24 flex justify-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut'
      }}>
          <a href="#apply" className="inline-block bg-[#F5E6D3] text-black px-10 py-4 md:px-12 md:py-4.5 rounded-md text-base md:text-lg font-medium hover:bg-[#E8D5BD] transition-all hover:scale-105 shadow-lg">
            Apply for Membership
          </a>
        </motion.div>
      </div>
    </section>;
}