import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertTriangle, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export default function Contact() {
  const { phone, email, location, linkedin, github } = PORTFOLIO_DATA.personal;

  // Form Fields State
  const [name, setName] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [message, setMessage] = useState('');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Simple copy to clipboard micro-interaction
  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Form Validations
  const validateForm = () => {
    const tempErrors: { name?: string; email?: string; message?: string } = {};
    let isValid = true;

    if (!name.trim()) {
      tempErrors.name = 'Please enter your name.';
      isValid = false;
    } else if (name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal.trim()) {
      tempErrors.email = 'Please enter your email.';
      isValid = false;
    } else if (!emailRegex.test(emailVal.trim())) {
      tempErrors.email = 'Please provide a valid email format.';
      isValid = false;
    }

    if (!message.trim()) {
      tempErrors.message = 'Please enter your message.';
      isValid = false;
    } else if (message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database/API request with smooth delays
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset fields
      setName('');
      setEmailVal('');
      setMessage('');
    }, 1500);
  };

  const contactTiles = [
    {
      icon: <Phone className="w-5 h-5 text-cyan-400" />,
      label: "Phone Support",
      value: phone,
      actionLabel: "Copy Phone",
      action: () => handleCopy(phone, 'phone'),
      isCopy: true,
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      label: "Official Email",
      value: email,
      actionLabel: "Email Usama",
      action: () => window.open(`mailto:${email}`),
      isCopy: false,
    },
    {
      icon: <MapPin className="w-5 h-5 text-indigo-400" />,
      label: "Developer Location",
      value: location,
      actionLabel: "View Map",
      action: () => window.open(`https://www.google.com/maps/place/Karachi,+Pakistan`),
      isCopy: false,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B1120] px-6">
      {/* Background radial halo */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-4 inline-block tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Let's discuss how we can engineer an exceptional web experience for your company or enterprise.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Quick Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Contact Information</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Have a question or looking to build a new customized solution? Reach out directly, copy my contact number, or schedule a conversation via mail.
              </p>

              {contactTiles.map((tile) => (
                <div
                  key={tile.label}
                  className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 flex items-center justify-between transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-center shrink-0">
                      {tile.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">{tile.label}</p>
                      <p className="text-sm sm:text-base font-bold text-slate-200">{tile.value}</p>
                    </div>
                  </div>

                  {/* Copy or Action button */}
                  <button
                    onClick={tile.action}
                    className="p-2 rounded-lg bg-slate-950 border border-slate-850 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors text-slate-500"
                    title={tile.actionLabel}
                  >
                    {tile.isCopy ? (
                      copiedField === 'phone' ? <Check size={16} className="text-cyan-400" /> : <Copy size={16} />
                    ) : (
                      <Send size={16} />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Links Footer Grid */}
            <div className="pt-6 border-t border-slate-900/80 flex items-center gap-4">
              <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">External Portals</span>
              <div className="h-px w-8 bg-slate-900" />
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/5 hover:border-cyan-500 hover:text-cyan-400 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/5 hover:border-cyan-500 hover:text-cyan-400 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[32px] relative overflow-hidden h-full flex flex-col justify-center shadow-2xl">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    noValidate
                  >
                    {/* Name Input Row */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-name" className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Your Full Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        className={`w-full bg-slate-950 border ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800/80 focus:border-cyan-500'
                        } rounded-xl px-5 py-4 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 font-medium flex items-center gap-1 mt-1">
                          <AlertTriangle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input Row */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-email" className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Your Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        placeholder="john@example.com"
                        value={emailVal}
                        onChange={(e) => {
                          setEmailVal(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        className={`w-full bg-slate-950 border ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800/80 focus:border-cyan-500'
                        } rounded-xl px-5 py-4 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 font-medium flex items-center gap-1 mt-1">
                          <AlertTriangle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message Box Row */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-msg" className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        How can I help you?
                      </label>
                      <textarea
                        id="form-msg"
                        rows={4}
                        placeholder="Explain your project details here..."
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                        }}
                        className={`w-full bg-slate-950 border ${
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800/80 focus:border-cyan-500'
                        } rounded-xl px-5 py-4 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 resize-none`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 font-medium flex items-center gap-1 mt-1">
                          <AlertTriangle size={12} /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 disabled:from-slate-800 disabled:to-slate-900 disabled:text-slate-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-95 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-cyan-950/40 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500 flex items-center justify-center text-cyan-400 mb-6 shadow-lg shadow-cyan-950/50 animate-bounce">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
                    <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-8">
                      Thank you for reaching out. I will review your message immediately and respond within 24 hours. Let's create something remarkable together!
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
