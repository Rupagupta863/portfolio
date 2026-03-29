"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Palette, Terminal, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Core",
    icon: Code2,
    description: "Main technologies I build with",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Web Foundations",
    icon: Layout,
    description: "Fundamentals of web development",
    skills: ["HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "UI & Styling",
    icon: Palette,
    description: "Designing clean and responsive interfaces",
    skills: ["Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Development Workflow",
    icon: Terminal,
    description: "Tools and collaboration practices",
    skills: ["Git", "GitHub", "VS Code", "Agile/Scrum"],
  },
  {
    title: "Engineering Concepts",
    icon: Lightbulb,
    description: "Performance and architecture principles",
    skills: [
      "REST APIs",
      "Core Web Vitals",
      "Component Architecture",
      "Optimistic UI",
      "Error Boundaries",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative bg-[var(--secondary)]/20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
              Expertise
            </span>
            <h2 className="section-heading">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-[var(--muted-foreground)] text-sm mt-3">
              Tools and technologies I use to build fast, scalable, and user-friendly applications.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.07, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)]/30 hover:border-[var(--primary)]/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Icon */}
                <div className="absolute top-2 right-2 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  <cat.icon size={64} />
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-4 group-hover:scale-105 transition-transform">
                  <cat.icon size={20} />
                </div>

                {/* Title */}
                <h3 className="text-sm font-[var(--font-display)] font-bold mb-1 group-hover:text-[var(--primary)] transition-colors">
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-[10px] text-[var(--muted-foreground)] mb-4">
                  {cat.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[var(--secondary)]/60 text-[var(--muted-foreground)] border border-[var(--border)]/20 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] hover:border-[var(--primary)]/20 transition-colors cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                      {skill}
                    </span>
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