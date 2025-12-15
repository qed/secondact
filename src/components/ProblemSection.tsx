import React, { Children } from 'react';
import { motion } from 'framer-motion';
export function ProblemSection() {
  return <section id="philosophy" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-sa-beige px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-sa-terracotta font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
            The Why
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sa-brown mb-4 sm:mb-6 leading-tight px-2">
            Second Act is a place to belong.
          </h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-sa-brown/80 leading-relaxed font-light">
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            As life enters its next chapter, you have more freedom, perspective,
            and wisdom than ever before. Second Act brings people together who
            are ready to use those things intentionally—building meaningful
            friendships, sharing experiences, and growing alongside peers who
            understand this moment of life.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="font-medium text-sa-brown border-l-4 border-sa-sage pl-4 sm:pl-6 italic"
          >
            Research shows that social connection is the single strongest
            predictor of a long, healthy life—more than diet, exercise, or
            genetics.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            Inside the Second Act community, connection is real and unforced.
            Conversations go beyond small talk and status updates, creating
            space for curiosity, reflection, and purpose. Members support one
            another as they explore what fulfillment, leadership, and
            contribution look like now.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            Strong relationships don’t just enrich your days—they strengthen
            your health, resilience, and sense of meaning. Second Act is
            designed to foster those relationships through trust, continuity,
            and shared values.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            This is a community where you can be fully yourself, engage deeply,
            and invest in connections that make this chapter of life richer than
            any before.
          </motion.p>
        </div>
      </div>
    </section>;
}