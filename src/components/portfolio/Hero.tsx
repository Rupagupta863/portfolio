"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Rupagupta863", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rupakumari863", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rupagupta0863@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[var(--primary)]/15 rounded-full blur-[100px] animate-[pulse-glow_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-[var(--accent)]/15 rounded-full blur-[100px] animate-[pulse-glow_8s_ease-in-out_infinite_1.5s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-px w-6 bg-[var(--primary)]/40" />
          <span className="text-xs font-semibold tracking-[0.25em] text-[var(--primary)] uppercase">
            Available for work
          </span>
          <span className="h-px w-6 bg-[var(--primary)]/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-display)] font-bold tracking-tight leading-[1.1] mb-6"
        >
          Hi, I&apos;m <span className="gradient-text">Rupa Gupta</span>
          <br />
          <span className="text-[var(--muted-foreground)] font-semibold text-3xl md:text-4xl lg:text-[2.75rem]">
            Frontend Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-[var(--muted-foreground)] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build modern, performant web applications with clean code and
          thoughtful design. Specializing in{" "}
          <span className="text-[var(--foreground)] font-medium">React</span> &{" "}
          <span className="text-[var(--foreground)] font-medium">Next.js</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-[var(--primary)]/20 active:scale-[0.97]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full border border-[var(--border)] text-[var(--foreground)] font-semibold text-sm hover:bg-[var(--secondary)]/60 transition-all active:scale-[0.97]"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-[var(--secondary)]/50 border border-[var(--border)]/30 text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)]/30 transition-all duration-300"
              aria-label={s.label}
            >
              <s.icon size={18} className="group-hover:scale-110 transition-transform duration-200" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[var(--foreground)] text-[var(--background)] text-[10px] font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {s.label}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[var(--muted-foreground)]">
            Scroll
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={16} className="text-[var(--muted-foreground)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
