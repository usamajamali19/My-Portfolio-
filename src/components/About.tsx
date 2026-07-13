import { motion } from 'motion/react';
import { Layers, Globe, Cpu, ShoppingBag, CheckCircle, Award, Target, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export default function About() {
  const { longDescription, avatar, name } = PORTFOLIO_DATA.personal;

  const coreFocusItems = [
    {
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      title: "WordPress Customization",
      description: "Tailoring complex business sites and blog systems using clean theme child customization and customized plugin hooks."
    },
    {
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      title: "Responsive Web Design",
      description: "Building flexible, fluid frontend environments that look breath-taking on any handheld device, laptop, or desktop."
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-indigo-400" />,
      title: "WooCommerce Portals",
      description: "Engineering secure, automated, and lightning-fast digital storefronts with inventory, checkout, and shipping flows."
    },
    {
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      title: "Speed Optimization",
      description: "Optimizing database, compression, lazy loading assets, and core vitals to achieve flawless load performance."
    }
  ];

  const statCards = [
    { value: "98%", label: "Lighthouse Performance" },
    { value: "120+", label: "Completed Projects" },
    { value: "100%", label: "UX Satisfaction Rate" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-4 inline-block tracking-tight"
          >
            About Me
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            The narrative of an award-winning developer combining visual design with production-grade technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Avatar side */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Outer decorative box border */}
              <div className="absolute inset-[-16px] border border-cyan-500/20 rounded-3xl -rotate-3 hover:rotate-0 transition-transform duration-500" />
              
              {/* Premium macOS Style IDE Window as Image Replacement */}
              <div className="relative w-72 h-[340px] sm:w-80 sm:h-[380px] md:w-[380px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#070b13] z-10 rotate-1 hover:rotate-0 transition-transform duration-500 font-mono text-xs text-slate-300">
                {/* Editor Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d1525] border-b border-white/5 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider">UsamaJamali.tsx</span>
                  <div className="w-12" /> {/* spacing spacer */}
                </div>

                {/* Editor Body with syntax highlighting */}
                <div className="p-4 sm:p-5 overflow-y-auto h-[calc(100%-40px)] text-[10px] sm:text-xs leading-relaxed text-left selection:bg-cyan-500/20">
                  <p className="text-slate-500">// Modern Frontend & WordPress Craftsman</p>
                  <p className="mt-1">
                    <span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-emerald-400">"Usama Jamali"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">title:</span> <span className="text-emerald-400">"Frontend & WordPress Developer"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">skills:</span> [
                  </p>
                  <p className="pl-8 text-cyan-400">
                    "WordPress", "Elementor", "WooCommerce", 
                  </p>
                  <p className="pl-8 text-cyan-400">
                    "HTML5/CSS3", "JavaScript", "Bootstrap 5",
                  </p>
                  <p className="pl-8 text-cyan-400">
                    "Responsive Design", "SEO Basics", "Git"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-400">philosophy:</span> <span className="text-purple-400">()</span> <span className="text-pink-400">=&gt;</span> &#123;
                  </p>
                  <p className="pl-8 text-yellow-400">
                    return <span className="text-emerald-400">"Build pixel-perfect, clean, fast webs!"</span>;
                  </p>
                  <p className="pl-4">&#125;,</p>
                  <p className="pl-4">
                    <span className="text-slate-400">location:</span> <span className="text-emerald-400">"Karachi, Pakistan"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">availableForHire:</span> <span className="text-orange-400">true</span>
                  </p>
                  <p className="text-white">&#125;;</p>

                  {/* Typing flashing caret simulation */}
                  <div className="mt-4 flex items-center gap-1">
                    <span className="text-slate-500">&gt;</span>
                    <span className="w-1.5 h-3.5 bg-cyan-400 animate-pulse inline-block" />
                  </div>
                </div>
              </div>

              {/* Float Experience Card */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900/40 backdrop-blur-xl border border-white/10 px-5 py-4 rounded-[20px] shadow-2xl z-20 flex flex-col gap-1 text-left">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Award size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Quality Seal</span>
                </div>
                <p className="text-sm font-extrabold text-white">Full-stack Craftsman</p>
              </div>
            </motion.div>
          </div>

          {/* Description and Focus Items side */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                Crafting interfaces that convert visitors into customers.
              </h3>
              <p className="text-base text-slate-400 leading-relaxed mb-8">
                {longDescription}
              </p>

              {/* Small Stats Dashboard */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {statCards.map((stat, idx) => (
                  <div key={idx} className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-center shadow-lg hover:border-cyan-500/30 transition-all duration-300">
                    <p className="text-xl sm:text-2xl font-extrabold text-cyan-400">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-6">
                My Primary Areas of Expertise
              </h4>

              {/* Focus List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coreFocusItems.map((focus, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="mt-0.5 p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 h-10 w-10">
                      {focus.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-200 mb-1">{focus.title}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">{focus.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
