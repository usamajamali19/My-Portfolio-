import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      } 
    },
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0F172A]">
      {/* Visual Ambient Spot */}
      <div className="absolute top-[30%] right-[-15%] w-[40rem] h-[40rem] bg-cyan-950/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-4 inline-block tracking-tight"
          >
            Education History
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Academic qualifications underpinning my technological and problem-solving capacities.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical stem line */}
          <div className="absolute left-1 sm:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-slate-800" />

          {/* Education list */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12 text-left"
          >
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector Node Button */}
                <div className="absolute -left-[31px] sm:-left-[43px] top-1.5 flex items-center justify-center z-10">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-md shadow-blue-900/35 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                  </div>
                </div>

                {/* Info Card Panel */}
                <div className="bg-slate-900 border border-slate-800 hover:border-cyan-500/30 rounded-3xl p-6 transition-all duration-300 relative group shadow-2xl">
                  {/* Glowing background on hover */}
                  <div className="absolute inset-px bg-gradient-to-r from-blue-600/0 via-cyan-500/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    {/* Header info */}
                    {edu.period ? (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800">
                          <Calendar size={12} />
                          {edu.period}
                        </span>
                      </div>
                    ) : (
                      <div className="mb-2" />
                    )}

                    <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-200 mb-2 flex items-center gap-1">
                      <BookOpen size={14} className="text-slate-400" />
                      <span>{edu.institution}</span>
                    </h4>

                    {edu.description && (
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 font-medium">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
