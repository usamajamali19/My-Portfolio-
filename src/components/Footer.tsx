import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export default function Footer() {
  const { name, linkedin, github, email } = PORTFOLIO_DATA.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B1120] border-t border-slate-900/80 py-12 px-6 overflow-hidden">
      {/* Background grain texture */}
      <div className="bg-grain opacity-20" />

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-[10px] font-black text-white shadow-md shadow-blue-500/10">
            UJ
          </span>
          <p className="text-sm font-semibold text-slate-400">
            &copy; {new Date().getFullYear()} <span className="text-white font-extrabold">{name}</span>. All rights reserved.
          </p>
        </div>

        {/* Middle quick navigation */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Right Social Links & Back to Top button */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="h-4 w-px bg-slate-900" />

          {/* Quick back to top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
