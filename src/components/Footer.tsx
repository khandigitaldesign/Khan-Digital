import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../data/agencyData';

interface FooterProps {
  onCopyPhone: () => void;
  onCopyEmail: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCopyPhone, onCopyEmail }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-zinc-400 border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="inline-block text-2xl font-display font-extrabold text-white tracking-tight">
              KHAN <span className="text-red-500">DIGITAL</span>
            </a>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Bespoke web design & digital engineering agency based in New Jersey. Crafting high-impact, 60fps digital experiences for ambitious brands.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>New Jersey, USA</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-red-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Information */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Direct Contact</h3>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-zinc-300 hover:text-red-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2 text-zinc-300 hover:text-red-400 transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-red-500" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-red-500/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-red-500/40 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-red-500/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-red-500/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Credits & Back-To-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-medium">Khan Digital</span>. All rights reserved. New Jersey, USA.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-zinc-400">
              Built with precision & 60fps motion
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 bg-zinc-900 hover:bg-red-600 border border-zinc-800 hover:border-red-500 text-zinc-400 hover:text-white rounded-xl transition-all duration-200 group shadow-lg"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
