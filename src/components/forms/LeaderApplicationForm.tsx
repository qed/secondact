import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Briefcase, Lightbulb, Wrench } from 'lucide-react';

// Google Form URL and entry IDs
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScq7ml5GhXFW01-TDS5oRa5dROK_ZUi8qTOsEGzgcWRo5ZtAQ/formResponse';

// Entry IDs extracted from the Google Form
const ENTRY_IDS = {
  fullName: 'entry.933473750',
  email: 'entry.870382419',
  phone: 'entry.1526016712',
  linkedin: 'entry.547779243',
  twitter: 'entry.2120989854',
  instagram: 'entry.703721602',
  careerBet: 'entry.1793350670',
  problems: 'entry.1627999505',
  achievements: 'entry.1126473349',
};

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  careerBet: string;
  problems: string;
  achievements: string;
}

export function LeaderApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    twitter: '',
    instagram: '',
    careerBet: '',
    problems: '',
    achievements: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const formBody = new URLSearchParams();
    formBody.append(ENTRY_IDS.fullName, formData.fullName);
    formBody.append(ENTRY_IDS.email, formData.email);
    formBody.append(ENTRY_IDS.phone, formData.phone);
    formBody.append(ENTRY_IDS.linkedin, formData.linkedin);
    formBody.append(ENTRY_IDS.twitter, formData.twitter);
    formBody.append(ENTRY_IDS.instagram, formData.instagram);
    formBody.append(ENTRY_IDS.careerBet, formData.careerBet);
    formBody.append(ENTRY_IDS.problems, formData.problems);
    formBody.append(ENTRY_IDS.achievements, formData.achievements);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      // With no-cors mode, we can't actually read the response
      // So we assume success if no error is thrown
      setStatus('success');
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-helix-sage/10 border border-helix-sage rounded-2xl p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-helix-sage mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-helix-brown mb-2">Application Submitted!</h3>
        <p className="text-helix-brown/70">
          Thank you for applying to Helix Hackathons. We'll be in touch soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-700 text-sm">
            There was an error submitting your application. Please try again.
          </p>
        </motion.div>
      )}

      {/* Contact Information */}
      <div className="space-y-4">
        <h4 className="font-medium text-helix-brown border-b border-helix-brown/10 pb-2">
          Contact Information
        </h4>

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-helix-brown mb-1">
            Full Name <span className="text-helix-terracotta">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-helix-brown/20 bg-white focus:border-helix-terracotta focus:ring-1 focus:ring-helix-terracotta outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-helix-brown mb-1">
              Email Address <span className="text-helix-terracotta">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-helix-brown/20 bg-white focus:border-helix-terracotta focus:ring-1 focus:ring-helix-terracotta outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-helix-brown mb-1">
              Phone Number <span className="text-helix-terracotta">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-helix-brown/20 bg-white focus:border-helix-terracotta focus:ring-1 focus:ring-helix-terracotta outline-none transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>
      </div>

      {/* Social Profiles */}
      <div className="space-y-4">
        <h4 className="font-medium text-helix-brown border-b border-helix-brown/10 pb-2">
          Social Profiles
        </h4>

        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-helix-brown mb-1">
            LinkedIn Profile URL
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-helix-brown/20 bg-white focus:border-helix-terracotta focus:ring-1 focus:ring-helix-terracotta outline-none transition-colors"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="twitter" className="block text-sm font-medium text-helix-brown mb-1">
              X/Twitter Handle
            </label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-helix-brown/20 bg-white focus:border-helix-terracotta focus:ring-1 focus:ring-helix-terracotta outline-none transition-colors"
              placeholder="@yourhandle"
            />
          </div>

          <div>
            <label htmlFor="instagram" className="block text-sm font-medium text-helix-brown mb-1">
              Instagram Handle
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-helix-brown/20 bg-white focus:border-helix-terracotta focus:ring-1 focus:ring-helix-terracotta outline-none transition-colors"
              placeholder="@yourhandle"
            />
          </div>
        </div>
      </div>

      {/* Application Questions */}
      <div className="space-y-4">
        <h4 className="font-medium text-helix-brown border-b border-helix-brown/10 pb-2">
          Application Questions
        </h4>

        <div>
          <label htmlFor="careerBet" className="block text-sm font-medium text-helix-brown mb-1">
            What are the 2-3 biggest, boldest decisions you have made in your career that you are most proud of and why are they important?{' '}
            <span className="text-helix-terracotta">*</span>
          </label>
          <textarea
            id="careerBet"
            name="careerBet"
            required
            rows={4}
            value={formData.careerBet}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-helix-brown/20 bg-white focus:border-helix-terracotta focus:ring-1 focus:ring-helix-terracotta outline-none transition-colors resize-none"
            placeholder="Tell us about the bold decisions you're most proud of..."
          />
        </div>

        {/* Idea inspiration box */}
        <div className="bg-helix-cream/50 border border-helix-brown/10 rounded-lg p-4 grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <Briefcase size={16} className="text-helix-terracotta mt-0.5 flex-shrink-0" />
            <span className="text-helix-brown/80">custom software for your nonprofit</span>
          </div>
          <div className="flex items-start gap-2">
            <Lightbulb size={16} className="text-helix-terracotta mt-0.5 flex-shrink-0" />
            <span className="text-helix-brown/80">an idea you have been tinkering with</span>
          </div>
          <div className="flex items-start gap-2">
            <Wrench size={16} className="text-helix-terracotta mt-0.5 flex-shrink-0" />
            <span className="text-helix-brown/80">a software idea for your main business</span>
          </div>
        </div>

        <div>
          <label htmlFor="problems" className="block text-sm font-medium text-helix-brown mb-1">
            Describe up to 3 problems or opportunities you've been thinking about that a small, fast team could tackle and create a win.{' '}
            <span className="text-helix-terracotta">*</span>
          </label>
          <textarea
            id="problems"
            name="problems"
            required
            rows={4}
            value={formData.problems}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-helix-brown/20 bg-white focus:border-helix-terracotta focus:ring-1 focus:ring-helix-terracotta outline-none transition-colors resize-none"
            placeholder="What problems or opportunities could a small team tackle?"
          />
        </div>

        <div>
          <label htmlFor="achievements" className="block text-sm font-medium text-helix-brown mb-1">
            What are the top 5% achievements in your life and career? Please list the achievements, how you got there, and why they are top 5% to you.{' '}
            <span className="text-helix-terracotta">*</span>
          </label>
          <textarea
            id="achievements"
            name="achievements"
            required
            rows={4}
            value={formData.achievements}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-helix-brown/20 bg-white focus:border-helix-terracotta focus:ring-1 focus:ring-helix-terracotta outline-none transition-colors resize-none"
            placeholder="List your top achievements and why they matter..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-helix-terracotta text-white py-4 rounded-full text-lg font-medium hover:bg-helix-terracotta/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </button>
    </form>
  );
}
