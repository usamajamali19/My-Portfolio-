import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

// Helper component to resolve dynamic Lucide Icons
const DynamicLucideIcon = ({ name, className }: { name: string; className?: string }) => {
  // Map our data icons to specific Lucide icons safely
  const iconMap: Record<string, keyof typeof LucideIcons> = {
    FileCode: 'FileCode',
    Palette: 'Palette',
    Grid: 'Grid',
    Cpu: 'Cpu',
    Layout: 'Layout',
    Layers: 'Layers',
    ShoppingBag: 'ShoppingBag',
    Smartphone: 'Smartphone',
    Search: 'Search',
    Sparkles: 'Sparkles',
    Github: 'Github',
  };

  const ResolvedIconName = iconMap[name] || 'Code';
  const IconComponent = LucideIcons[ResolvedIconName] as React.ComponentType<{ className?: string }>;

  if (!IconComponent) return <LucideIcons.Code className={className} />;
  return <IconComponent className={className} />;
};

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  // Split skills into columns or display as a unified beautiful grid
  // Stagger wrapper settings for Framer Motion scroll entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut' 
      } 
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0B1120]">
      {/* Visual Ambient Spot */}
      <div className="absolute top-[30%] right-[-10%] w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse-glow" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-4 inline-block tracking-tight"
          >
            Skills & Abilities
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            My technology suite for programming client-oriented solutions, from optimized browser structures to fully-featured digital shops.
          </p>
        </div>

        {/* Unified Responsive Grid of Glowing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                borderColor: 'rgba(6, 182, 212, 0.4)',
                boxShadow: '0 12px 30px rgba(6, 182, 212, 0.15)'
              }}
              className="group bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 rounded-3xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Dynamic Inner Hover Gradient Highlight */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:via-cyan-500/10 group-hover:to-indigo-600/5 transition-all duration-500 rounded-2xl" />

              <div>
                {/* Header Row: Icon + Name */}
                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300 shadow-md">
                    <DynamicLucideIcon name={skill.icon} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Level Percentage Indicator */}
                <div className="relative z-10 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                  <span>Proficiency</span>
                  <span className="text-cyan-400 group-hover:text-white transition-colors">{skill.level}%</span>
                </div>
              </div>

              {/* Progress Line Bar */}
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden relative z-10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full group-hover:from-cyan-400 group-hover:to-indigo-400 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
