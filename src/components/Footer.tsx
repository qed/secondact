import React from 'react';
export function Footer() {
  return <footer className="bg-sa-brown text-sa-beige py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 px-2">
          Ready to find your tribe?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-sa-beige/70 mb-8 sm:mb-10 max-w-2xl mx-auto font-light px-2">
          Don't let this chapter be defined by isolation. Design a life of
          connection, purpose, and laughter.
        </p>

        <a href="#apply" className="inline-block bg-sa-terracotta text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-sa-terracotta/90 transition-all hover:scale-105 mb-12 sm:mb-16">
          Apply Now
        </a>

        <div className="border-t border-sa-beige/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-sa-beige/40">
          <div className="font-serif text-xl sm:text-2xl text-sa-beige/60">SA</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Second Act. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
}