import React from 'react';
import { motion, useInView } from 'motion/react';
import { Phone, Mail, MapPin, Copy, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/agencyData';

interface ContactProps {
  onCopyPhone: () => void;
  onCopyEmail: () => void;
  onShowToast: (text: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyPhone, onCopyEmail, onShowToast }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden bg-[#08080a] border-t border-zinc-900">
      {/* Background Radial Lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-950/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 space-y-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-red-500 uppercase tracking-widest bg-red-950/40 border border-red-500/20 px-3 py-1 rounded-md"
          >
            <span>[ 02 // CONTACT KHAN DIGITAL ]</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight"
          >
            Let's build something <br />
            <span className="text-red-500">exceptional together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed"
          >
            Ready to give your brand the web presence it deserves? Call or email us directly. We respond promptly to all New Jersey and national inquiries.
          </motion.p>
        </div>

        {/* Expanded Contact Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Phone Line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/80 border border-zinc-800 hover:border-red-500/50 p-8 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-red-600/10 border border-red-500/30 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-8 h-8" />
                </div>

                <button
                  onClick={onCopyPhone}
                  title="Copy Phone Number"
                  className="p-3 bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-mono"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Direct Phone Line</div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-red-400 transition-colors block"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Call our New Jersey office directly for immediate project consultations or technical inquiries.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Mobile tap-to-call ready</span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-red-400 hover:text-red-300 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
              >
                <span>Call Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Email Inbox */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-zinc-900/80 border border-zinc-800 hover:border-red-500/50 p-8 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-red-600/10 border border-red-500/30 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-8 h-8" />
                </div>

                <button
                  onClick={onCopyEmail}
                  title="Copy Email Address"
                  className="p-3 bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-mono"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Official Email Address</div>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-red-400 transition-colors block break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Send us project briefs, design requirements, or RFP requests directly to our team inbox.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Direct inbox monitoring</span>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-red-400 hover:text-red-300 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Agency HQ & Response Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-zinc-900/80 border border-zinc-800 hover:border-red-500/50 p-8 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col justify-between md:col-span-2 lg:col-span-1 group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-red-600/10 border border-red-500/30 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-8 h-8" />
                </div>

                <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1 rounded-full text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Active Office</span>
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Agency Headquarters</div>
                <div className="text-2xl font-display font-bold text-white">
                  New Jersey, USA
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <Clock className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Rapid Response (Within 1 Business Hour)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Direct Partner-Level Communication</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Location: New Jersey, US</span>
              <span className="text-zinc-300 font-semibold">EST Timezone</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

