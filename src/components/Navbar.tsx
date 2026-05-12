import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, Calendar, Lock, Sparkles, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isAdminLoggedIn: boolean;
  onLogoutAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  isAdminLoggedIn,
  onLogoutAdmin,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About Us', id: 'about' },
    { name: 'Services & Pricing', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-stone-950/80 backdrop-blur-xl border-b border-stone-800/60 py-3 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/10 to-yellow-600/30 border border-yellow-500/30 group-hover:border-yellow-400 transition-colors">
                <Camera className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 group-hover:rotate-12 transition-all duration-300" />
                <span className="absolute inset-0 rounded-full border border-yellow-500/50 scale-75 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-lux text-lg font-bold tracking-[0.18em] text-stone-100 group-hover:text-amber-500 transition-colors uppercase">
                  Noor Studio
                </span>
                <span className="text-[9px] tracking-[0.3em] text-stone-400 group-hover:text-stone-200 transition-colors uppercase font-medium">
                  Fine Art Shaadi Photography
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="relative text-xs tracking-[0.2em] uppercase font-medium transition-colors py-1 hover:text-yellow-500 cursor-pointer"
                    style={{ color: isActive ? '#f59e0b' : '#d6d3d1' }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-amber-500 to-yellow-500"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {isAdminLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleNavClick('admin')}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-[11px] tracking-widest uppercase font-semibold transition-all cursor-pointer ${
                      currentPage === 'admin'
                        ? 'bg-amber-500/20 text-yellow-400 border-yellow-500/40'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-yellow-400 hover:border-yellow-500/30'
                    }`}
                  >
                    <Lock className="w-3 h-3 text-yellow-500 animate-pulse" />
                    <span>Admin Panel</span>
                  </button>
                  <button
                    onClick={() => {
                      onLogoutAdmin();
                      handleNavClick('home');
                    }}
                    className="px-2.5 py-1 rounded-full border border-red-500/20 bg-red-500/10 hover:bg-red-500/25 text-red-400 text-[10px] tracking-widest uppercase cursor-pointer"
                    title="Sign Out of Admin"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick('admin')}
                  className="p-1.5 rounded-full border border-stone-800 bg-stone-900/40 text-stone-400 hover:text-yellow-400 hover:border-yellow-500/30 transition-all cursor-pointer"
                  title="Admin Login"
                >
                  <Lock className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => handleNavClick('booking')}
                className={`relative overflow-hidden group flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase cursor-pointer transition-all duration-300 ${
                  currentPage === 'booking'
                    ? 'bg-yellow-500 text-stone-950 font-bold shadow-lg shadow-yellow-500/20'
                    : 'bg-gradient-to-r from-stone-900 to-stone-800 text-white border border-yellow-500/30 hover:border-yellow-500/60'
                }`}
              >
                {currentPage !== 'booking' && (
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                )}
                <Calendar className="w-3.5 h-3.5 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Book Session</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-3">
              {isAdminLoggedIn && (
                <button
                  onClick={() => handleNavClick('admin')}
                  className="p-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white cursor-pointer"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 md:hidden glassmorphism border-b border-stone-800/80 shadow-2xl py-6 px-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => {
                const isActive = currentPage === link.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="flex items-center justify-between text-left text-sm tracking-widest uppercase font-medium py-2.5 border-b border-stone-900 hover:text-yellow-400 transition-colors"
                    style={{ color: isActive ? '#f59e0b' : '#d6d3d1' }}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />}
                  </motion.button>
                );
              })}
              
              <div className="pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => handleNavClick('booking')}
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-stone-950 rounded-full font-bold text-xs tracking-widest uppercase shadow-lg shadow-yellow-500/10 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Session</span>
                </button>

                <div className="flex items-center justify-between px-2 pt-2 text-stone-500 text-xs font-mono">
                  <span>AURA LUXE STUDIO</span>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300">
                    <PhoneCall className="w-3 h-3" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
