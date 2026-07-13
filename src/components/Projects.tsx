import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, Code, Briefcase, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'WordPress' | 'Frontend'>('All');

  // Filter projects by category selection
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0B1120]">
      {/* Light Blur Background blobs */}
      <div className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-4 inline-block tracking-tight"
          >
            My Recent Projects
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A handpicked selection of commercial websites, feature-rich shops, and custom portfolio pieces engineered for success.
          </p>
        </div>

        {/* Categories Tab Select Panel */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {(['All', 'WordPress', 'Frontend'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:text-slate-100 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Layout with Grid layout animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCardKey key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// 3D Tilt Animated Project Card Component
function ProjectCardKey({ project }: { project: Project; key?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation coefficients
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const limitRotate = 8; // Max degrees of tilt rotation
    
    const rY = ((x - centerX) / centerX) * limitRotate;
    const rX = -((y - centerY) / centerY) * limitRotate;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      style={{ perspective: 1000 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="group bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 rounded-[32px] overflow-hidden transition-all duration-300 shadow-2xl flex flex-col justify-between h-full"
      >
        <div>
          {/* Card Image Banner Area */}
          <div className="h-52 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Visual ambient gradient grids */}
            <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-cyan-500/0 transition-colors duration-500" />
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            
            {/* Category visual badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800/80 text-cyan-400 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {project.category}
              </span>
            </div>

            {/* Simulated illustrative vector screen */}
            <div className="relative z-10 w-full max-w-[200px] flex flex-col items-center gap-2 group-hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-cyan-500/20 border border-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                {project.category === 'WordPress' ? <Layers size={28} /> : <Code size={28} />}
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">Usama's Work</p>
            </div>

            {/* Full background hover glass mask reveal */}
            <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm z-15">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg transition-all hover:scale-110"
              >
                <Eye size={18} />
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 flex items-center justify-center shadow-lg transition-all hover:scale-110"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Card Description Details */}
          <div className="p-6 md:p-8 flex flex-col text-left">
            <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/5 border border-white/5 text-cyan-300 rounded-md hover:border-cyan-500/20 transition-all"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action items */}
        <div className="p-6 md:px-8 md:pb-8 pt-0 border-t border-slate-800/40 flex items-center justify-between">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-cyan-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 uppercase tracking-wider"
          >
            Live Demo <ExternalLink size={14} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 uppercase tracking-wider"
          >
            GitHub <Github size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
