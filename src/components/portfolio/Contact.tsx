"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "rupagupta0863@gmail.com", href: "mailto:rupagupta0863@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91-8084544496", href: "tel:+918084544496" },
  { icon: MapPin, label: "Location", value: "India", href: "#" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log(data);
    toast.success("Message sent! I'll get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <Toaster position="top-right" richColors />
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
              Contact
            </span>
            <h2 className="section-heading">
              Let&apos;s work <span className="gradient-text">together.</span>
            </h2>
            <p className="text-[var(--muted-foreground)] text-sm mb-10 max-w-md leading-relaxed">
              Have a project in mind or just want to connect? I&apos;m always open to new
              opportunities and interesting conversations.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-[var(--secondary)]/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-[var(--muted-foreground)]">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {[
                { icon: Github, href: "https://github.com/Rupagupta863" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rupa-kumari-96162b27b/" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--secondary)]/50 border border-[var(--border)]/30 flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:scale-105 transition-all"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                      Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--secondary)]/50 border border-[var(--border)]/30 focus:border-[var(--primary)]/50 focus:ring-2 focus:ring-[var(--primary)]/10 transition-all outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--secondary)]/50 border border-[var(--border)]/30 focus:border-[var(--primary)]/50 focus:ring-2 focus:ring-[var(--primary)]/10 transition-all outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--secondary)]/50 border border-[var(--border)]/30 focus:border-[var(--primary)]/50 focus:ring-2 focus:ring-[var(--primary)]/10 transition-all outline-none resize-none text-sm"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-[var(--border)]/20 pt-8 pb-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="font-[var(--font-display)] font-bold text-lg tracking-tight">
            <span className="gradient-text">Rupa</span>.
          </a>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[var(--muted-foreground)]">
            <a href="#about" className="hover:text-[var(--primary)] transition-colors">About</a>
            <a href="#projects" className="hover:text-[var(--primary)] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[var(--primary)] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[var(--primary)] transition-colors">Contact</a>
          </div>
          <p className="text-xs text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Rupa Kumari
          </p>
        </div>
      </footer>
    </section>
  );
}
