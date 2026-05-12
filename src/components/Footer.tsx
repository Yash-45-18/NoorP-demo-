import React from 'react';
import { Camera, Mail, Phone, MapPin, Send, ArrowUp, Calendar } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-stone-950 border-t border-stone-900 pt-20 pb-10 overflow-hidden">
      {/* Decorative Golden Ambient Light */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-10 left-10 w-80 h-80 bg-stone-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-stone-900">
          
          {/* Brand Presentation */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500/10 to-yellow-600/30 border border-yellow-500/30 flex items-center justify-center">
                <Camera className="w-4 h-4 text-yellow-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-lux text-base font-bold tracking-[0.18em] text-stone-100 uppercase">
                  Noor Studio
                </span>
                <span className="text-[8px] tracking-[0.3em] text-stone-400 uppercase font-medium">
                  Fine Art Shaadi Photography
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed font-light">
              Capturing India's most spectacular weddings, luxury editorials, and breathtaking cinematic visuals from Mumbai to the palaces of Rajasthan and beyond.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-stone-800 hover:border-yellow-500/50 hover:bg-yellow-500/10 flex items-center justify-center text-stone-400 hover:text-yellow-500 transition-all duration-300"
              >
                {/* Custom Instagram SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-stone-800 hover:border-yellow-500/50 hover:bg-yellow-500/10 flex items-center justify-center text-stone-400 hover:text-yellow-500 transition-all duration-300"
              >
                {/* Custom Youtube SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-1.016-1.071-1.815-2.087-2.087-1.837-.495-9.21-.495-9.21-.495s-7.374 0-9.21.495c-1.017.272-1.815 1.071-2.087 2.087-.496 1.838-.496 5.672-.496 5.672s0 3.834.496 5.672c.272 1.016 1.07 1.815 2.087 2.087 1.836.495 9.21.495 9.21.495s7.373 0 9.21-.495c1.016-.272 1.815-1.016 2.087-2.087.496-1.838.496-5.672.496-5.672s0-3.834-.496-5.672zm-14.248 9.492v-7.308l6.377 3.654-6.377 3.654z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-stone-800 hover:border-yellow-500/50 hover:bg-yellow-500/10 flex items-center justify-center text-stone-400 hover:text-yellow-500 transition-all duration-300"
              >
                {/* Custom Facebook SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-stone-200">
              The Studio
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Our Portfolio', id: 'portfolio' },
                { name: 'About Noor Studio', id: 'about' },
                { name: 'Services & Pricing', id: 'services' },
                { name: 'Contact Us', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-stone-400 hover:text-yellow-500 text-xs tracking-wider transition-colors duration-300 text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-stone-200">
              Atelier Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-stone-400 text-xs leading-relaxed font-light">
                  42 Carter Road, Bandra West, Mumbai 400050, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-500 shrink-0" />
                <span className="text-stone-400 text-xs font-light">
                  +91 98200 43210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-500 shrink-0" />
                <span className="text-stone-400 text-xs font-light">
                  hello@noorstudio.in
                </span>
              </li>
            </ul>
          </div>

          {/* Luxury Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-stone-200">
              Privé Updates
            </h4>
            <p className="text-stone-400 text-xs font-light leading-relaxed">
              Subscribe for wedding season updates, bridal photography tips, behind-the-scenes reels, and exclusive portfolio drops.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-stone-900 border border-stone-800 text-stone-200 text-xs px-4 py-2.5 rounded-l-md focus:outline-none focus:border-yellow-500/50 w-full"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-stone-950 px-3.5 py-2.5 rounded-r-md transition-colors flex items-center justify-center cursor-pointer"
                title="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-stone-500 text-[11px] font-light">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Noor Studio India. All rights reserved. Crafted with ❤️ for Indian love stories.</p>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => handleLinkClick('admin')} className="hover:text-yellow-500 transition-colors cursor-pointer">
              Admin Gateway
            </button>
            <button onClick={() => handleLinkClick('booking')} className="hover:text-yellow-500 transition-colors flex items-center space-x-1 cursor-pointer">
              <Calendar className="w-3 h-3 text-yellow-500" />
              <span>Book Calendar</span>
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer"
              title="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
