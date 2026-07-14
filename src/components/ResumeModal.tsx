import React, { useRef } from 'react';
import { X, Phone, Mail, MapPin, Linkedin, Github, Printer } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printContent = resumeRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;
    
    if (printContent) {
      // Simple and robust printing approach for local element
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Usama Jamali - Resume</title>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
              <style>
                @media print {
                  body {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                    background-color: white !important;
                    color: black !important;
                  }
                  .no-print {
                    display: none !important;
                  }
                }
                body {
                  font-family: 'Inter', sans-serif;
                  background-color: white;
                  color: #1e293b;
                }
              </style>
            </head>
            <body class="p-8">
              ${printContent}
              <script>
                window.onload = function() {
                  window.print();
                  setTimeout(function() { window.close(); }, 500);
                };
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  };

  const { name, title, email, phone, location, linkedin, github, longDescription } = PORTFOLIO_DATA.personal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white text-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 border border-white/10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Control Bar (Non-Printable) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase font-mono text-cyan-400">Interactive CV Viewer</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-xl transition-all cursor-pointer"
              title="Print / Save as PDF"
            >
              <Printer size={14} /> Print CV
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="max-h-[80vh] overflow-y-auto bg-white">
          <div ref={resumeRef} className="bg-white min-h-[1050px] text-slate-800 flex flex-col">
            
            {/* Header Section (Dark Theme like screenshot) */}
            <div className="bg-[#2e354f] text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-cyan-500">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">{name}</h1>
                <p className="text-cyan-400 font-bold text-sm md:text-base uppercase tracking-widest mt-2">{title}</p>
              </div>
              
              {/* Profile Image Representation */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white/20 bg-slate-800 flex items-center justify-center shrink-0 shadow-lg">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>

            {/* Layout Columns */}
            <div className="flex flex-col md:flex-row flex-1">
              
              {/* Left Column (Grey Background / Contact & Metadata) */}
              <div className="w-full md:w-1/3 bg-slate-100 p-8 border-r border-slate-200 text-left flex flex-col gap-8">
                
                {/* Contact Section */}
                <div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-4 pb-1.5 border-b border-slate-200">
                    Contact Info
                  </h3>
                  <div className="flex flex-col gap-3.5 text-xs text-slate-600 font-medium leading-relaxed">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded bg-slate-200 text-slate-500">
                        <Phone size={14} />
                      </div>
                      <span>{phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded bg-slate-200 text-slate-500">
                        <Mail size={14} />
                      </div>
                      <span className="break-all">{email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded bg-slate-200 text-slate-500">
                        <MapPin size={14} />
                      </div>
                      <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded bg-slate-200 text-slate-500">
                        <Linkedin size={14} />
                      </div>
                      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline break-all">
                        linkedin.com/in/usama-jamali-2681b5347
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded bg-slate-200 text-slate-500">
                        <Github size={14} />
                      </div>
                      <a href={github} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline break-all">
                        github.com/usamajamali19
                      </a>
                    </div>
                  </div>
                </div>

                {/* Additional Info / Philosophy */}
                <div className="mt-2">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-4 pb-1.5 border-b border-slate-200">
                    Philosophy
                  </h3>
                  <p className="text-xs text-slate-500 italic leading-relaxed">
                    "Build pixel-perfect, clean, fast webs that convert visitors into active customers."
                  </p>
                </div>
              </div>

              {/* Right Column (Main content: Profile, Education, Skills) */}
              <div className="w-full md:w-2/3 p-8 md:p-10 text-left flex flex-col gap-8 bg-white">
                
                {/* Profile Section */}
                <div>
                  <h2 className="text-base font-black text-slate-800 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-cyan-500 rounded-sm" /> Profile
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {longDescription}
                  </p>
                </div>

                {/* Education Section */}
                <div>
                  <h2 className="text-base font-black text-slate-800 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm" /> Education
                  </h2>
                  <div className="flex flex-col gap-4">
                    {PORTFOLIO_DATA.education.map((edu, idx) => (
                      <div key={idx} className="relative pl-4 border-l-2 border-slate-100 hover:border-cyan-500/50 transition-colors">
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-800">
                          {edu.degree}
                        </h4>
                        <p className="text-xs font-bold text-slate-500 mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <h2 className="text-base font-black text-slate-800 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-sm" /> Professional Skills
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                    {PORTFOLIO_DATA.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg">
                        <span className="text-cyan-500 font-extrabold">✓</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
