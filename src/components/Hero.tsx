import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, FileText, ChevronRight, Globe, Code, Laptop, ShoppingCart, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';
import ResumeModal from './ResumeModal';

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { name, title, shortDescription, email, linkedin, github, avatar } = PORTFOLIO_DATA.personal;
  const words = PORTFOLIO_DATA.typingWords;

  // Custom native Typing Animation implementation
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause at peak
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

  // Floating particles generator for interactive premium design
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:py-0 overflow-hidden bg-[#0F172A] px-6">
      {/* Background grain texture */}
      <div className="bg-grain" />

      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-cyan-500/20 rounded-full blur-[1px]"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Massive ambient lighting blur spots */}
      <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[160px] animate-pulse-glow" />
      <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl relative z-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="md:col-span-7 flex flex-col items-start text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-[0.25em] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Available for Freelance & Full-time Jobs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tight"
          >
            Hi, I am <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold text-slate-300 mb-6 flex items-center flex-wrap gap-2 min-h-[40px]"
          >
            <span>A passionate</span>
            <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1.5 py-0.5 animate-[pulse_1s_infinite]">
              {currentText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-xl"
          >
            {shortDescription}
          </motion.p>

          {/* Interactive Button Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="px-8 py-4 w-full sm:w-auto text-center rounded-xl font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-cyan-500/30 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-8 py-4 w-full sm:w-auto text-center rounded-xl font-bold text-sm tracking-wider uppercase text-slate-300 bg-slate-900/50 border border-slate-800 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              View Projects <ChevronRight size={16} />
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-8 py-4 w-full sm:w-auto text-center rounded-xl font-bold text-sm tracking-wider uppercase text-slate-400 hover:text-white border border-dashed border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText size={16} /> My Resume
            </button>
          </motion.div>

          {/* Social Icons Float Panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-5 mt-12"
          >
            <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mr-2">
              Follow Me
            </span>
            <div className="h-px w-10 bg-slate-800" />
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 flex items-center justify-center text-slate-400 transition-all hover:-translate-y-1"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 flex items-center justify-center text-slate-400 transition-all hover:-translate-y-1"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${email}`}
              className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 flex items-center justify-center text-slate-400 transition-all hover:-translate-y-1"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Handcrafted macOS Browser Mockup showcasing custom WordPress child themes */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-full max-w-[420px]"
          >
            {/* Outer Accent Shadow border */}
            <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 blur-sm pointer-events-none" />

            {/* macOS Browser Mockup window */}
            <div className="relative w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-left font-sans text-slate-200 z-10 flex flex-col h-[380px]">
              {/* Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800/80 select-none shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block" />
                </div>
                {/* Simulated URL bar */}
                <div className="bg-slate-900 border border-slate-800 text-[10px] text-slate-400 px-3 py-1 rounded-md w-48 text-center truncate font-mono tracking-tight flex items-center justify-center gap-1.5">
                  <Globe size={10} className="text-cyan-400" />
                  <span>usamajamali.com/theme-demo</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Window Body - WooCommerce child theme live simulator */}
              <div className="p-4 flex-1 overflow-hidden flex flex-col justify-between bg-slate-950/40 relative">
                {/* Simulated Mini E-Commerce Header */}
                <div className="flex items-center justify-between border-b border-slate-800/60 pb-2.5 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                      <ShoppingCart size={10} className="text-white" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-white">UJ Commerce</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold uppercase tracking-widest">
                    <span>Products</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-cyan-400">Shop [2]</span>
                  </div>
                </div>

                {/* Simulated Beautiful Active WooCommerce Card */}
                <div className="my-auto bg-slate-900 border border-slate-800/80 rounded-xl p-3.5 shadow-md flex items-center gap-4">
                  {/* Mock Product Image Area */}
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Laptop size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[8px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20">Active Customizer</span>
                    </div>
                    <h4 className="text-[13px] font-bold text-white truncate leading-tight">WordPress Premium Theme</h4>
                    <div className="flex items-center gap-1 text-[11px] text-yellow-400 mt-1">
                      <Star size={11} fill="currentColor" />
                      <Star size={11} fill="currentColor" />
                      <Star size={11} fill="currentColor" />
                      <Star size={11} fill="currentColor" />
                      <Star size={11} fill="currentColor" />
                      <span className="text-slate-400 text-[10px] font-semibold ml-1">(4.9 rating)</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Custom Metrics Overlay Panel */}
                <div className="grid grid-cols-2 gap-2.5 shrink-0">
                  {/* Metric 1 */}
                  <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-2.5 text-left flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <span className="text-[10px] font-extrabold font-mono">99%</span>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-0.5">Lighthouse</p>
                      <p className="text-[10px] font-bold text-slate-200">Speed Score</p>
                    </div>
                  </div>
                  {/* Metric 2 */}
                  <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-2.5 text-left flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Code size={12} />
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-0.5">WordPress</p>
                      <p className="text-[10px] font-bold text-slate-200">Responsive UI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge with Solid High Contrast styling */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-2 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-black">
                1+
              </div>
              <div className="text-left">
                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-0.5">Experience</p>
                <p className="text-[11px] font-black text-white">Year of Development</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200 z-20">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
