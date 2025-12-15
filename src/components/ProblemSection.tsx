import React, { Children } from 'react';
import { motion } from 'framer-motion';
export function ProblemSection() {
  return <section id="philosophy" className="py-24 md:py-32 bg-sa-beige px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-sa-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">
            The Why
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-sa-brown mb-6 leading-tight">
            Loneliness is the new smoking. <br />
            <span className="italic text-sa-terracotta">
              Community is the cure.
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8 text-lg md:text-xl text-sa-brown/80 leading-relaxed font-light">
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }}>
            As we move into our "Second Act," our social circles naturally
            shrink. Children move out. Co-workers retire. The casual
            interactions that fueled us for 30 years begin to fade.
          </motion.p>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="font-medium text-sa-brown border-l-4 border-sa-sage pl-6 italic">
            Research shows that social connection is the single strongest
            predictor of a long, healthy life—more than diet, exercise, or
            genetics.
          </motion.p>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            But finding deep connection at this stage is hard. The country club
            is too superficial. The alumni network is too focused on business.
            You need a space where you can drop the "everything is fine" mask
            and talk about what really matters.
          </motion.p>
        </div>
      </div>
    </section>;
}