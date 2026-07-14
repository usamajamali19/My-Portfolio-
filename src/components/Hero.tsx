import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, FileText, ChevronRight } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:py-0 overflow-hidden bg-[#0B1120] px-6">
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

        {/* Holographic Skill Constellation Core instead of profile image */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center"
          >
            {/* Double outer glowing rotating borders */}
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-8 rounded-full border-2 border-indigo-500/20 animate-spin-reverse-slow pointer-events-none" />

            {/* Glowing radial background */}
            <div className="absolute inset-4 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 rounded-full blur-2xl scale-95" />

            {/* Central Glowing Developer Core */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center z-10 p-4 text-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-indigo-500/10 pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-2 shadow-lg shadow-blue-500/20">
                <span className="font-mono text-xl font-black">&lt;/&gt;</span>
              </div>
              <h3 className="text-white font-extrabold text-base md:text-lg tracking-tight">Usama Jamali</h3>
              <p className="text-cyan-400 font-bold text-[10px] md:text-xs uppercase tracking-wider">Web Developer</p>
            </div>

            {/* Orbiting Tech Skill Nodes */}
            {/* Node 1: WordPress (Top-Left) */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-4 sm:left-10 z-20 flex flex-col items-center gap-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-cyan-400 shadow-xl flex items-center justify-center text-cyan-400 backdrop-blur-md transition-all duration-300">
                <span className="text-base font-black font-serif">W</span>
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-950/80 px-2 py-0.5 rounded-md border border-white/5">WordPress</span>
            </motion.div>

            {/* Node 2: HTML5 & CSS3 (Top-Right) */}
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-4 right-4 sm:right-10 z-20 flex flex-col items-center gap-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-blue-400 shadow-xl flex items-center justify-center text-blue-400 backdrop-blur-md transition-all duration-300">
                <span className="text-base font-mono font-bold">&lt;/&gt;</span>
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-950/80 px-2 py-0.5 rounded-md border border-white/5">HTML/CSS</span>
            </motion.div>

            {/* Node 3: JavaScript (Bottom-Left) */}
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, 6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-6 left-0 sm:left-6 z-20 flex flex-col items-center gap-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-indigo-400 shadow-xl flex items-center justify-center text-indigo-400 backdrop-blur-md transition-all duration-300 font-mono font-bold text-xs">
                JS
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-950/80 px-2 py-0.5 rounded-md border border-white/5">JavaScript</span>
            </motion.div>

            {/* Node 4: WooCommerce & Elementor (Bottom-Right) */}
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-6 right-0 sm:right-6 z-20 flex flex-col items-center gap-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-pink-400 shadow-xl flex items-center justify-center text-pink-400 backdrop-blur-md transition-all duration-300">
                <span className="text-base font-black">🛒</span>
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-950/80 px-2 py-0.5 rounded-md border border-white/5">WooCommerce</span>
            </motion.div>

             {/* Float badge widget */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 bg-slate-950/90 border border-white/10 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md z-20"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-sm font-bold">
                1+
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 leading-none">Experience</p>
                <p className="text-xs font-black text-white">Year of Dev Work</p>
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
