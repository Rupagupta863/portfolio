"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Wrench, ChevronRight } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    description: "Core logic and scalable state management.",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js (App Router)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 95 }
    ]
  },
  {
    title: "Styling & UI",
    icon: Palette,
    description: "Creating polished, responsive, and animated interfaces.",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "CSS Modules", level: 85 },
      { name: "HTML5 / CSS3", level: 95 }
    ]
  },
  {
    title: "Tools & Ecosystem",
    icon: Wrench,
    description: "Development tools, Git workflows, and APIs.",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Agile workflows", level: 85 }
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative bg-[var(--background)] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--background)] via-[var(--secondary)]/10 to-[var(--background)] opacity-50 pointer-events-none" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
                Engineering Stack
              </span>
              <h2 className="section-heading text-4xl md:text-5xl font-extrabold mb-4">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Capabilities</span>
              </h2>
              <p className="text-[var(--muted-foreground)] text-sm md:text-base leading-relaxed">
                A highly-optimized toolkit focusing on building rich, resilient, and performant web interfaces.
              </p>
            </div>
            
            <div className="hidden md:flex flex-col items-end gap-2 text-right">
              <span className="text-sm font-semibold text-[var(--foreground)]">Primary Focus</span>
              <div className="flex gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind"].map(s => (
                  <span key={s} className="px-3 py-1 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-xs border border-[var(--primary)]/20 shadow-sm shadow-[var(--primary)]/5">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.15, duration: 0.5 }}
                className="group relative p-8 rounded-[2rem] bg-[var(--card)]/40 border border-[var(--border)]/30 backdrop-blur-sm hover:border-[var(--primary)]/40 hover:bg-[var(--secondary)]/30 hover:shadow-2xl hover:shadow-[var(--primary)]/5 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none group-hover:scale-125 transform origin-center">
                  <cat.icon size={120} />
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm shadow-[var(--primary)]/10">
                    <cat.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-[var(--font-display)] font-bold mb-1 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-medium text-[var(--muted-foreground)]">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-5 relative z-10">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-semibold text-[var(--foreground)] flex items-center gap-1.5">
                          <ChevronRight size={14} className="text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity -ml-3" />
                          <span className="-ml-3 group-hover:ml-0 transition-all duration-300">{skill.name}</span>
                        </span>
                        <span className="text-[10px] font-bold text-[var(--muted-foreground)]">{skill.level}%</span>
                      </div>
                      
                      <div className="h-1.5 w-full bg-[var(--border)]/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: ci * 0.15 + si * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 w-full animate-[pulse-glow_2s_linear_infinite]" style={{ clipPath: "polygon(0 0, 20% 0, 10% 100%, -10% 100%)" }} />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}