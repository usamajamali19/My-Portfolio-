import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Page Loading state
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Mouse coordinate state for parallax glow blobs
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Wait for fadeout
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 5);
      });
    }, 80);

    // Track mouse positions for fluid parallax blobs
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B1120] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-hidden">
      
      {/* 1. Global Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#0B1120] z-[9999] flex flex-col items-center justify-center p-6"
          >
            {/* Ambient Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="bg-grain" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Spinning Monogram Ring */}
              <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
                <motion.div 
                  className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-400"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                />
                <div className="absolute inset-3 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <span className="text-xl font-black text-white uppercase tracking-tighter">
                    UJ<span className="text-cyan-400">.</span>
                  </span>
                </div>
              </div>

              {/* Loader percentage and labels */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500 mb-2"
              >
                Initializing Premium Workspace
              </motion.p>

              <h2 className="text-3xl font-black text-white mb-6 select-none font-mono tracking-tight">
                {Math.min(loadProgress, 100)}%
              </h2>

              {/* Progress Horizontal Slider */}
              <div className="w-48 h-1 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                  style={{ width: `${Math.min(loadProgress, 100)}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Custom Cursor Follower */}
      <CustomCursor />

      {/* 3. Mouse-Follow Parallax Glow Blobs (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute w-[25rem] h-[25rem] bg-cyan-500/5 rounded-full blur-[120px]"
          animate={{
            x: mousePos.x - 200,
            y: mousePos.y - 200,
          }}
          transition={{ type: 'spring', damping: 45, stiffness: 120, mass: 1 }}
        />
        <motion.div
          className="absolute w-[20rem] h-[20rem] bg-blue-600/5 rounded-full blur-[100px]"
          animate={{
            x: mousePos.x - 160,
            y: mousePos.y - 160,
          }}
          transition={{ type: 'spring', damping: 55, stiffness: 100, mass: 1.2, delay: 0.05 }}
        />
      </div>

      {/* 4. Portfolio Main Content Sections */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Global Header / Navbar */}
          <Header />

          {/* Individual Main Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>

          {/* Global Footer */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
