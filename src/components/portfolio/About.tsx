"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Zap, MousePointer2 } from "lucide-react";

const features = [
  { icon: Code2, title: "Clean Architecture", desc: "Modular, scalable, and maintainable codebases." },
  { icon: Sparkles, title: "Pixel Perfection", desc: "Design visions turned into flawless realities." },
  { icon: Zap, title: "Performance First", desc: "Fast load times and smooth interactions." },
  { icon: MousePointer2, title: "User-Centric", desc: "Intuitive experiences built with empathy." },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "Technologies" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
              About Me
            </span>
            <h2 className="section-heading">
              Transforming <span className="gradient-text">Ideas</span> into
              Meaningful Experiences.
            </h2>

            <div className="space-y-4 text-[var(--muted-foreground)] text-base leading-relaxed max-w-2xl mt-6">
              <p>
                I&apos;m a frontend developer passionate about building interfaces
                that are not only functional but{" "}
                <span className="text-[var(--foreground)] font-medium">thoughtfully crafted</span>.
                My work sits at the intersection of clean engineering and visual design.
              </p>
              <p>
                Specializing in{" "}
                <span className="text-[var(--foreground)] font-medium">React</span> and{" "}
                <span className="text-[var(--foreground)] font-medium">Next.js</span>, I
                focus on creating performant, accessible applications that users genuinely
                enjoy interacting with.
              </p>
            </div>

            <div className="flex gap-8 md:gap-12 mt-10 py-6 border-y border-[var(--border)]/30">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h4 className="text-3xl font-[var(--font-display)] font-bold text-[var(--foreground)] mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-[var(--muted-foreground)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                className="group p-5 rounded-2xl bg-[var(--secondary)]/30 border border-[var(--border)]/30 hover:border-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-3 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-400">
                  <f.icon size={20} />
                </div>
                <h3 className="font-[var(--font-display)] font-semibold text-sm text-[var(--foreground)] mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
