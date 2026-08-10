import React from 'react';
import { motion, useInView } from 'motion/react';
import { MapPin, ShieldCheck, Zap, Layers, Sparkles, CheckCircle, ArrowUpRight } from 'lucide-react';
import { AGENCY_PILLARS, BUSINESS_INFO } from '../data/agencyData';

export const About: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden bg-[#08080a] border-t border-zinc-900">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-red-500 uppercase tracking-widest bg-red-950/40 border border-red-500/20 px-3 py-1 rounded-md"
            >
              <span>[ 01 // ABOUT KHAN DIGITAL ]</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight"
            >
              High-End Web Design <br />
              <span className="text-zinc-400">Rooted in New Jersey.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 px-4 py-2.5 rounded-xl text-xs font-mono text-zinc-300 self-start md:self-auto shadow-lg"
          >
            <MapPin className="w-4 h-4 text-red-500 animate-bounce" />
            <span>HQ: New Jersey, USA</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </motion.div>
        </div>

        {/* Agency Main Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Main Story Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 hover:border-red-500/30 p-8 sm:p-10 rounded-3xl backdrop-blur-md flex flex-col justify-between relative group overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/10 transition-colors" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-wider font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Our Philosophy</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                "We believe your website should be your strongest digital asset — fast, visually unforgettable, and engineered to drive growth."
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  Khan Digital was founded in New Jersey with a clear mission: to eliminate slow, templated, cookie-cutter web design. Modern brands deserve tailored digital experiences that look sleek and operate flawlessly across every device.
                </p>
                <p>
                  Because we build our own site with the highest standard of technical and visual polish, it serves as a direct preview of what we bring to your brand. From fluid scroll physics to airtight code structure, we deliver websites that demand attention.
                </p>
              </div>
            </div>

            {/* Bottom Proof Badges */}
            <div className="pt-8 mt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>100% Custom React</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Zero Bloated Templates</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Direct NJ Founders</span>
              </div>
            </div>
          </motion.div>

          {/* Side Highlighting Card: Craft Standard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/80 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-red-400 bg-red-950/80 border border-red-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                  New Jersey Studio
                </span>
                <span className="text-xs font-mono text-zinc-500">EST. NJ</span>
              </div>

              <div className="space-y-3">
                <h4 className="font-display text-2xl font-bold text-white">
                  Why Work With Us?
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  When you partner with Khan Digital, you bypass junior project managers and slow agency layers. You get direct access to skilled engineers and designers focused on speed and aesthetic excellence.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-zinc-950/80 border border-zinc-800/80 rounded-xl flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Full Ownership & Clean Code</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Your codebase is 100% yours. No lock-in or proprietary traps.</div>
                  </div>
                </div>

                <div className="p-3.5 bg-zinc-950/80 border border-zinc-800/80 rounded-xl flex items-start gap-3">
                  <Zap className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">60fps Smooth Motion</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Fluid transitions that captivate your users without sacrificing mobile page speed.</div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 flex items-center justify-between bg-zinc-900 hover:bg-red-600/20 border border-zinc-800 hover:border-red-500/50 p-4 rounded-xl text-sm font-semibold text-white transition-all group"
            >
              <span>Connect with our New Jersey team</span>
              <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

        </div>

        {/* 3 Core Agency Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AGENCY_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800/80 hover:border-red-500/40 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/0 to-transparent group-hover:via-red-500 transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-extrabold text-red-500/80 group-hover:text-red-500 transition-colors">
                    {pillar.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-red-400 group-hover:border-red-500/30 transition-colors">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
