"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const [copied, setCopied] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 1500)); // Simulating network request
    console.log(data);
    setIsSuccess(true);
    toast.success("Message sent successfully! 🚀");
    reset();
    setTimeout(() => setIsSuccess(false), 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rupagupta0863@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--background)] border-t border-[var(--border)]/30">
      <Toaster position="top-right" richColors theme="system" />
      
      {/* High-end subtle background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--primary)]/5 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[var(--accent)]/5 blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Personal Connection & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center lg:pr-4"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-6 shadow-sm shadow-[var(--primary)]/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">
                  Available for work
                </span>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-[var(--font-display)] font-extrabold leading-tight tracking-tight mb-4">
                Let&apos;s build something <br />
                amazing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-fuchsia-400 to-[var(--accent)] animate-[pulse-glow_4s_ease-in-out_infinite]">
                  together
                </span>
              </h2>

              <p className="text-[var(--muted-foreground)] text-base md:text-md leading-relaxed max-w-lg font-medium mt-4 md:mt-6">
                Available for frontend roles, freelance work, and collaborations.
              </p>
            </div>

            <div className="space-y-4 mb-10 w-full max-w-full">
              {/* Email Card (Interactive) */}
              <button 
                onClick={handleCopyEmail}
                className="group w-full flex items-center justify-between p-4 rounded-2xl bg-[var(--secondary)]/40 border border-[var(--border)]/50 hover:bg-[var(--card)] hover:border-[var(--primary)]/40 hover:shadow-lg hover:shadow-[var(--primary)]/10 hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-transparent flex items-center justify-center text-[var(--primary)] group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300 shadow-sm shadow-[var(--primary)]/10">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--muted-foreground)]">Email Me</p>
                    <p className="text-sm font-semibold text-[var(--foreground)] mt-0.5 group-hover:text-[var(--primary)] transition-colors">rupagupta0863@gmail.com</p>
                  </div>
                </div>
                <div className="relative z-10 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors">
                   {copied ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Copy size={18} />}
                </div>
              </button>

              {/* Phone Card */}
              <a 
                href="tel:+918084544496"
                className="group w-full flex items-center p-4 rounded-2xl bg-[var(--secondary)]/40 border border-[var(--border)]/50 hover:bg-[var(--card)] hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-transparent flex items-center justify-center text-[var(--accent)] group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300 shadow-sm shadow-[var(--accent)]/10">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--muted-foreground)]">Call Me</p>
                    <p className="text-sm font-semibold text-[var(--foreground)] mt-0.5 group-hover:text-[var(--accent)] transition-colors">+91-8084544496</p>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="group w-full flex items-center p-4 rounded-2xl bg-[var(--secondary)]/40 border border-[var(--border)]/50 hover:bg-[var(--card)] hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm shadow-emerald-500/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--muted-foreground)]">Location</p>
                    <p className="text-sm font-semibold text-[var(--foreground)] mt-0.5 group-hover:text-emerald-500 transition-colors">Remote / India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Socials</span>
              <div className="h-px w-8 bg-[var(--border)]" />
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/Rupagupta863", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rupakumari863", label: "LinkedIn" },
                ].map((s, i) => (
                  <div key={i} className="relative group">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[var(--card)] border border-[var(--border)]/50 flex items-center justify-center text-[var(--muted-foreground)] group-hover:text-white group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:shadow-[0_0_20px_var(--primary)] group-hover:scale-110 transition-all duration-300 z-10 relative"
                    >
                      <s.icon size={20} />
                    </a>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[var(--foreground)] text-[var(--background)] text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                      {s.label}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--foreground)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form (SaaS UX) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative w-full lg:pl-4"
          >
            {/* Soft glowing background behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 blur-3xl -z-10 rounded-[3rem]" />

            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-[var(--card)]/60 backdrop-blur-xl border border-[var(--border)]/50 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent" />
              
              <h3 className="text-2xl font-[var(--font-display)] font-extrabold text-[var(--foreground)] mb-8">Send a Message</h3>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 relative">
                      <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" style={{ animationDuration: '3s' }} />
                      <CheckCircle2 size={40} className="animate-[scale-in_0.5s_ease-out]" />
                    </div>
                    <h4 className="text-2xl font-bold text-[var(--foreground)] mb-2">Message Sent!</h4>
                    <p className="text-[var(--muted-foreground)] max-w-xs mx-auto">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div className="relative group">
                        <input
                          {...register("name", { required: true })}
                          id="name"
                          type="text"
                          onFocus={() => setFocusedInput('name')}
                          onBlur={() => setFocusedInput(null)}
                          className="peer w-full h-14 px-5 pt-4 rounded-2xl bg-[var(--background)]/50 border border-[var(--border)] text-[var(--foreground)] text-sm outline-none transition-all hover:border-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10"
                          placeholder=" "
                        />
                        <label 
                          htmlFor="name" 
                          className="absolute left-5 top-4 text-sm text-[var(--muted-foreground)] font-medium transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[var(--primary)] peer-focus:bg-[var(--card)] peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-[var(--card)] peer-[:not(:placeholder-shown)]:px-1 pointer-events-none rounded uppercase tracking-wider"
                        >
                          Name
                        </label>
                        {errors.name && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-red-500 font-bold">*</span>}
                      </div>

                      {/* Email Input */}
                      <div className="relative group">
                        <input
                          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                          id="email"
                          type="email"
                          onFocus={() => setFocusedInput('email')}
                          onBlur={() => setFocusedInput(null)}
                          className="peer w-full h-14 px-5 pt-4 rounded-2xl bg-[var(--background)]/50 border border-[var(--border)] text-[var(--foreground)] text-sm outline-none transition-all hover:border-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10"
                          placeholder=" "
                        />
                        <label 
                          htmlFor="email" 
                          className="absolute left-5 top-4 text-sm text-[var(--muted-foreground)] font-medium transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[var(--primary)] peer-focus:bg-[var(--card)] peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-[var(--card)] peer-[:not(:placeholder-shown)]:px-1 pointer-events-none rounded uppercase tracking-wider"
                        >
                          Email Address
                        </label>
                        {errors.email && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-red-500 font-bold">*</span>}
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="relative group">
                      <textarea
                        {...register("message", { required: true })}
                        id="message"
                        rows={5}
                        onFocus={() => setFocusedInput('message')}
                        onBlur={() => setFocusedInput(null)}
                        className="peer w-full px-5 py-5 rounded-2xl bg-[var(--background)]/50 border border-[var(--border)] text-[var(--foreground)] text-sm outline-none transition-all hover:border-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 resize-none"
                        placeholder=" "
                      />
                      <label 
                        htmlFor="message" 
                        className="absolute left-5 top-5 text-sm text-[var(--muted-foreground)] font-medium transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[var(--primary)] peer-focus:bg-[var(--card)] peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-[var(--card)] peer-[:not(:placeholder-shown)]:px-1 pointer-events-none rounded uppercase tracking-wider"
                      >
                        Project Details / Message
                      </label>
                      {errors.message && <span className="absolute right-4 top-5 text-xs text-red-500 font-bold">*</span>}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      {/* Trust Element */}
                      <p className="text-xs font-medium text-[var(--muted-foreground)] flex items-center gap-1.5 self-start sm:self-center">
                        <CheckCircle2 size={14} className="text-[var(--primary)]" />
                        I typically respond within 24 hours.
                      </p>

                      {/* Submit Button */}
                      <button
                        disabled={isSubmitting}
                        className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-2xl bg-[var(--foreground)] text-[var(--background)] font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[var(--background)]/20 to-transparent pointer-events-none" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
          
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-8 pb-8 border-t border-[var(--border)]/20 relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="group relative flex items-center gap-2 font-[var(--font-display)] overflow-hidden hover:opacity-100">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-lg border border-[var(--primary)]/20 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:shadow-[0_0_15px_var(--primary)] transition-all duration-300">
              R
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-sm tracking-widest text-[var(--foreground)]">RUPA</span>
              <span className="font-medium text-[10px] tracking-[0.2em] text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-colors duration-300 uppercase">Gupta</span>
            </div>
          </a>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
            {["About", "Skills", "Performance", "Projects", "Experience", "Contact"].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="hover:text-[var(--primary)] transition-colors">
                {label}
              </a>
            ))}
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)] flex items-center gap-1.5">
            © {new Date().getFullYear()} Rupa Gupta <span className="hidden sm:inline">|</span> <span className="text-[var(--primary)] hidden sm:inline">Frontend Developer</span>
          </p>
        </div>
      </footer>
    </section>
  );
}
