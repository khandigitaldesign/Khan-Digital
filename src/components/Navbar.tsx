import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../data/agencyData';

interface NavbarProps {
  activeSection: string;
  onCopyPhone: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onCopyPhone }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/85 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl shadow-black/60'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-white font-display font-bold text-xl sm:text-2xl tracking-tight focus:outline-none"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <span className="transition-colors duration-200 group-hover:text-red-500">
              KHAN <span className="text-red-500 font-extrabold group-hover:text-white transition-colors duration-200">DIGITAL</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-zinc-400 border border-zinc-800 rounded px-1.5 py-0.5 ml-1 bg-zinc-900/50">
              NJ
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/70 border border-zinc-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg shadow-black/30">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 bg-red-600/20 border border-red-500/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onCopyPhone}
              title="Click to copy phone number"
              className="flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500/40 px-3 py-2 rounded-lg transition-all duration-200 group"
            >
              <Phone className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
              <span>{BUSINESS_INFO.phone}</span>
            </button>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-4 py-2.5 rounded-lg shadow-lg shadow-red-950/50 hover:shadow-red-600/30 transition-all duration-200 active:scale-95 group overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#08080a]/95 border-b border-zinc-800 backdrop-blur-xl md:hidden overflow-hidden shadow-2xl shadow-black"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.25 }}
                    className="flex items-center justify-between text-lg font-display font-semibold text-zinc-200 hover:text-red-500 py-2 border-b border-zinc-900"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-3.5 rounded-xl text-zinc-200 hover:border-red-500/50"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-red-500" />
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Direct Line</div>
                      <div className="text-sm font-semibold">{BUSINESS_INFO.phone}</div>
                    </div>
                  </div>
                  <span className="text-xs bg-red-600/20 text-red-400 px-2.5 py-1 rounded-md font-mono">Call Now</span>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-3.5 rounded-xl text-zinc-200 hover:border-red-500/50"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-red-500" />
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Email Us</div>
                      <div className="text-xs font-mono text-zinc-300 truncate max-w-[180px]">{BUSINESS_INFO.email}</div>
                    </div>
                  </div>
                  <span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md font-mono">Send Email</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 text-center text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 py-3 rounded-xl shadow-lg shadow-red-950/50"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
