import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Clock } from 'lucide-react';

// Helix Talent Wait List Capture form
const WAITLIST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScAvlOl1OAhLrcQ83TDl3Q7PnQYOssjPm11WvVhnXHXBy-8yg/formResponse';
const EMAIL_ENTRY_ID = 'entry.1720846429';

export function HackerWaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const formBody = new URLSearchParams();
    formBody.append(EMAIL_ENTRY_ID, email);

    try {
      await fetch(WAITLIST_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      // With no-cors mode, we can't actually read the response
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-helix-sage/10 p-8 md:p-10 rounded-2xl border border-helix-sage/20">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-helix-sage" />
        <span className="text-helix-sage font-medium text-sm tracking-wider uppercase">
          Round 1 is Full
        </span>
      </div>

      <h3 className="font-serif text-2xl text-helix-brown mb-3">
        Join the Hacker Waitlist
      </h3>
      <p className="text-helix-brown/70 mb-6">
        Summer 2026 spots are filling fast. Drop your email and we'll reach out when new spots open.
      </p>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-helix-sage/20 rounded-lg p-4 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-helix-sage flex-shrink-0" />
          <p className="text-helix-brown text-sm">
            You're on the list! We'll be in touch when spots open.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 text-red-500" />
              <p className="text-red-700 text-sm">Something went wrong. Please try again.</p>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-helix-brown/20 bg-white focus:border-helix-sage focus:ring-1 focus:ring-helix-sage outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-helix-sage text-white px-6 py-3 rounded-lg font-medium hover:bg-helix-sage/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Joining...
                </>
              ) : (
                'Join Waitlist'
              )}
            </button>
          </div>

          <p className="text-helix-brown/50 text-xs">
            No spam, ever. We'll only email you about Helix Hackathons.
          </p>
        </form>
      )}
    </div>
  );
}
