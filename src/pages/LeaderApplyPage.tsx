import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { LeaderApplicationForm } from '../components/forms/LeaderApplicationForm';

export function LeaderApplyPage() {

  return (
    <div className="min-h-screen bg-helix-beige text-helix-brown font-sans selection:bg-helix-terracotta/30">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-helix-brown/60 hover:text-helix-brown transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block bg-helix-terracotta/10 text-helix-terracotta font-medium tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
              For Leaders
            </span>

            <h1 className="font-serif text-4xl md:text-5xl text-helix-brown mb-6 leading-tight">
              Apply to Helix Hackathons
            </h1>

            <p className="text-lg text-helix-brown/70 leading-relaxed">
              We're looking for leaders with taste—people who know what good looks like
              and have a vision worth building.
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-helix-brown/10 rounded-2xl p-6 md:p-10"
          >
            <h3 className="font-serif text-2xl text-helix-brown mb-6">
              Your Application
            </h3>
            <LeaderApplicationForm />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
