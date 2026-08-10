import React, { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, Phone, Sparkles, Code, Cpu, Gauge, Zap, CheckCircle2, Copy } from 'lucide-react';
import { BUSINESS_INFO, AGENCY_STATS } from '../data/agencyData';

interface HeroProps {
  onCopyPhone: () => void;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyPhone, onCopyEmail }) => {
  const statsRef = React.useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: '-50px' });

  // Interactive craft canvas state
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [fpsCounter, setFpsCounter] = useState(60);
  const [motionIntensity, setMotionIntensity] = useState<'fluid' | 'hyper' | 'minimal'>('fluid');
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  // Smooth FPS fluctuation simulation for realistic live preview feel
  useEffect(() => {
    const interval = setInterval(() => {
      setFpsCounter(59 + Math.floor(Math.random() * 2));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x, y });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Agency Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-red-950/60 to-zinc-900 border border-red-500/30 px-3.5 py-1.5 rounded-full shadow-lg shadow-red-950/20"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-zinc-300">
                NEW JERSEY BASED DIGITAL AGENCY
              </span>
            </motion.div>

            {/* Staggered Hero Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]"
              >
                Web design <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-red-500">
                  that moves.
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-base sm:text-xl text-zinc-400 max-w-2xl font-sans font-normal leading-relaxed"
              >
                Khan Digital builds bespoke, ultra-fast websites engineered to convert.
                We merge high-end visual precision with silky 60fps motion for ambitious businesses in New Jersey and beyond.
              </motion.p>
            </div>

            {/* Animated Call-To-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-xl shadow-red-950/60 hover:shadow-red-600/30 transition-all duration-300 active:scale-95"
              >
                <span>Start A Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onCopyPhone}
                className="group inline-flex items-center gap-2.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 hover:border-red-500/40 px-5 py-3.5 rounded-xl transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-sm font-medium">{BUSINESS_INFO.phone}</span>
                <span className="text-[10px] font-mono uppercase bg-zinc-800 text-zinc-400 group-hover:text-red-400 px-1.5 py-0.5 rounded ml-1">
                  Copy
                </span>
              </button>
            </motion.div>

            {/* Direct Contact Email Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 text-xs font-mono text-zinc-400 pt-2"
            >
              <span className="text-zinc-500">Direct Contact:</span>
              <button
                onClick={onCopyEmail}
                className="text-zinc-300 hover:text-red-400 underline underline-offset-4 transition-colors flex items-center gap-1.5"
              >
                <span>{BUSINESS_INFO.email}</span>
                <Copy className="w-3 h-3 text-zinc-500" />
              </button>
            </motion.div>
          </div>

          {/* Hero Right Column: Interactive "Live Craft Showcase" Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Decorative Card Glow Frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600/30 via-red-900/20 to-zinc-800/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* Card Window Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">khan-digital-craft.tsx</span>
                </div>

                <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-2.5 py-1 text-xs font-mono rounded ${
                      activeTab === 'preview' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Interactive
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 text-xs font-mono rounded ${
                      activeTab === 'code' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Code
                  </button>
                </div>
              </div>

              {/* Tab Content 1: Interactive Preview Canvas */}
              {activeTab === 'preview' ? (
                <div
                  onMouseMove={handleCanvasMouseMove}
                  className="relative h-72 rounded-xl bg-zinc-950 border border-zinc-800/80 p-4 flex flex-col justify-between overflow-hidden cursor-crosshair group/canvas"
                >
                  {/* Dynamic Pointer Light Follower inside canvas */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(180px circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(239, 68, 68, 0.25), transparent 70%)`,
                    }}
                  />

                  {/* Top Canvas Metrics Header */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-md">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{fpsCounter} FPS NATIVE</span>
                    </div>

                    <div className="text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded-md border border-zinc-800">
                      STATE: <span className="text-red-400 uppercase font-bold">{motionIntensity}</span>
                    </div>
                  </div>

                  {/* Canvas Central Interactive Particle/Grid Showcase */}
                  <div className="relative z-10 my-auto text-center space-y-3">
                    <motion.div
                      animate={
                        motionIntensity === 'hyper'
                          ? { scale: [1, 1.08, 1], rotate: [0, 2, -2, 0] }
                          : motionIntensity === 'fluid'
                          ? { y: [0, -6, 0] }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="inline-block p-4 rounded-2xl bg-gradient-to-br from-red-600/20 to-zinc-900 border border-red-500/40 shadow-xl"
                    >
                      <Sparkles className="w-8 h-8 text-red-500 mx-auto" />
                    </motion.div>

                    <div className="font-display font-bold text-lg text-white">
                      Interactive Motion Engine
                    </div>
                    <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                      Move your cursor over this box to feel the smooth, GPU-accelerated response.
                    </p>
                  </div>

                  {/* Canvas Interactive Controls Footer */}
                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-zinc-800/60">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Motion Vibe:</span>
                    <div className="flex gap-1">
                      {(['minimal', 'fluid', 'hyper'] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setMotionIntensity(mode)}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded capitalize transition-all ${
                            motionIntensity === mode
                              ? 'bg-red-600 text-white font-bold'
                              : 'bg-zinc-900 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Tab Content 2: Clean Code Architecture Preview */
                <div className="h-72 rounded-xl bg-zinc-950 border border-zinc-800/80 p-4 font-mono text-xs text-zinc-300 overflow-y-auto space-y-1.5 leading-relaxed selection:bg-red-800">
                  <p className="text-zinc-500">// Khan Digital Architecture Standard</p>
                  <p className="text-red-400">import <span className="text-white">{'{ motion }'}</span> from <span className="text-emerald-400">'motion/react'</span>;</p>
                  <p>&nbsp;</p>
                  <p><span className="text-purple-400">export const</span> <span className="text-blue-400">DigitalAgency</span> = () =&#1102; (</p>
                  <p className="pl-4">&lt;<span className="text-red-400">motion.div</span></p>
                  <p className="pl-8 text-amber-300">initial=<span className="text-white">{'{'}</span> opacity: 0, y: 20 <span className="text-white">{'}'}</span></p>
                  <p className="pl-8 text-amber-300">animate=<span className="text-white">{'{'}</span> opacity: 1, y: 0 <span className="text-white">{'}'}</span></p>
                  <p className="pl-8 text-amber-300">fpsTarget=<span className="text-emerald-400">60</span></p>
                  <p className="pl-8 text-amber-300">location=<span className="text-emerald-400">"New Jersey, USA"</span></p>
                  <p className="pl-4">&gt;</p>
                  <p className="pl-8 text-zinc-300">&lt;<span className="text-red-400">BespokeWebsites</span> convert=<span className="text-emerald-400">{'{true}'}</span> /&gt;</p>
                  <p className="pl-4">&lt;/<span className="text-red-400">motion.div</span>&gt;</p>
                  <p>);</p>
                </div>
              )}

              {/* Bottom Quick Feature Highlights */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-zinc-800/60 text-center">
                <div className="bg-zinc-950/60 p-2 rounded-lg border border-zinc-800/50">
                  <Code className="w-3.5 h-3.5 text-red-500 mx-auto mb-1" />
                  <div className="text-[10px] font-mono text-zinc-400">100% Bespoke</div>
                </div>
                <div className="bg-zinc-950/60 p-2 rounded-lg border border-zinc-800/50">
                  <Gauge className="w-3.5 h-3.5 text-red-500 mx-auto mb-1" />
                  <div className="text-[10px] font-mono text-zinc-400">Sub-Second Load</div>
                </div>
                <div className="bg-zinc-950/60 p-2 rounded-lg border border-zinc-800/50">
                  <Cpu className="w-3.5 h-3.5 text-red-500 mx-auto mb-1" />
                  <div className="text-[10px] font-mono text-zinc-400">GPU Accelerated</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Animated Agency Stats Bar */}
        <div ref={statsRef} className="mt-20 pt-10 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {AGENCY_STATS.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                className="bg-zinc-900/40 border border-zinc-800/60 hover:border-red-500/30 p-5 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white group-hover:text-red-500 transition-colors flex items-baseline gap-1">
                  <span>{stat.value}</span>
                  <span className="text-red-500 font-sans text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-sm font-semibold text-zinc-200 mt-1">{stat.label}</div>
                <div className="text-xs text-zinc-400 mt-1 leading-normal">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
