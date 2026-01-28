import React from 'react';
import { Link } from 'react-router-dom';
import { HelixLogo } from '../branding/HelixLogo';

export function Footer() {
  return (
    <footer className="bg-helix-brown text-helix-beige py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">
            <HelixLogo size={32} className="[&_span]:text-helix-beige" />
          </Link>

          <div className="flex items-center gap-6 text-sm text-helix-beige/60">
            <a
              href="mailto:peter@theknetwork.org"
              className="hover:text-helix-beige transition-colors"
            >
              Contact
            </a>
            <span className="text-helix-beige/30">|</span>
            <span>Summer 2026</span>
          </div>

          <div className="text-sm text-helix-beige/40">
            &copy; {new Date().getFullYear()} Helix Hackathons
          </div>
        </div>
      </div>
    </footer>
  );
}
