import React from 'react';
export function Footer() {
  return <footer className="bg-sa-brown text-sa-beige py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">
          Ready to find your tribe?
        </h2>
        <p className="text-xl text-sa-beige/70 mb-10 max-w-2xl mx-auto font-light">
          Don’t let this chapter be defined by isolation. Design a life of
          connection, purpose, and laughter.
        </p>

        <a href="#apply" className="inline-block bg-sa-terracotta text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-sa-terracotta/90 transition-all hover:scale-105 mb-16">
          Apply Now
        </a>

        <div className="border-t border-sa-beige/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sa-beige/40">
          <div className="font-serif text-2xl text-sa-beige/60">SA</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sa-beige transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sa-beige transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-sa-beige transition-colors">
              Contact
            </a>
          </div>
          <div>
            © {new Date().getFullYear()} Second Act. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
}