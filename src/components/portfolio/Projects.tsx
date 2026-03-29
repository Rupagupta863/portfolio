"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Zap, Target, LayoutTemplate } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Employee Task Management System",
    badge: "Production-ready App",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "JWT"],
    problem: "Inefficient task allocation and tracking leading to missed sprint deadlines across decentralized teams.",
    solution: "Developed a role-based, real-time platform with JWT auth, optimistic updates, and advanced filtering for immediate status visibility.",
    impact: "Boosted team productivity by reducing task handover delays and enabled seamless tracking of cross-departmental workflows.",
    features: ["Role-based UI", "Real-time task tracking", "API integration"],
    liveUrl: null,
    githubUrl: "https://github.com/Rupagupta863",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    main: true
  },
  {
    title: "E-Commerce Platform",
    badge: "Full-Stack App",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    problem: "Slow load times and clunky cart management hindering the user shopping experience.",
    solution: "Built a scalable component architecture and implemented responsive design with secure client-side routing.",
    impact: "Delivered strong Core Web Vitals performance resulting in a fluid shopping workflow.",
    features: ["Component architecture", "Responsive design", "Core Web Vitals performance"],
    liveUrl: null,
    githubUrl: "https://github.com/Rupagupta863",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    main: false
  },
  {
    title: "Vercel-Inspired Portfolio",
    badge: "Frontend UI",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    problem: "Standard portfolios lack the premium, interactive feel of modern SaaS products.",
    solution: "Engineered a high-end showcase utilizing Framer Motion, micro-interactions, and a bespoke glassmorphism design system.",
    impact: "Demonstrates production-level UI engineering and deep understanding of modern React patterns.",
    features: ["Interactive UI", "Dark Mode", "Micro-animations", "Performant"],
    liveUrl: "https://portfolio-f2uk.vercel.app/",
    githubUrl: "https://github.com/Rupagupta863",
    category: "frontend",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    main: false
  },
];

const filters = ["all", "frontend", "fullstack"];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative overflow-hidden bg-[var(--background)]">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
                Case Studies
              </span>
              <h2 className="section-heading text-4xl md:text-5xl font-extrabold mb-4">
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Works</span>
              </h2>
              <p className="text-[var(--muted-foreground)] text-sm md:text-base leading-relaxed">
                A selection of high-impact production applications focusing on performant architectures and sleek UX.
              </p>
            </div>

            <div className="flex p-1.5 bg-[var(--secondary)]/50 rounded-xl border border-[var(--border)]/50 backdrop-blur-md">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all duration-300 ${
                    filter === f
                      ? "bg-[var(--foreground)] text-[var(--background)] shadow-lg scale-100"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] scale-95"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group grid ${project.main ? "md:grid-cols-12 gap-8 items-center" : "md:grid-cols-2 gap-8 items-start"} p-6 md:p-8 rounded-[2rem] bg-[var(--card)]/40 border border-[var(--border)]/40 hover:border-[var(--primary)]/40 hover:shadow-2xl hover:shadow-[var(--primary)]/10 transition-all duration-500`}
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden rounded-[1.5rem] bg-[var(--secondary)]/50 aspect-[16/10] ${project.main ? "md:col-span-7" : "w-full"}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-[var(--background)]/80 backdrop-blur-md border border-[var(--white)]/10 text-xs font-bold text-[var(--foreground)] shadow-sm flex items-center gap-1.5">
                        <Zap size={14} className="text-[var(--primary)]" />
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] hover:scale-110 active:scale-95 transition-all shadow-xl">
                            <ExternalLink size={20} />
                          </a>
                        )}
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[var(--foreground)] text-[var(--background)] hover:scale-110 active:scale-95 transition-all shadow-xl">
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`space-y-6 ${project.main ? "md:col-span-5" : "w-full"}`}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-[var(--font-display)] font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((t) => (
                          <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--secondary)]/80 text-[var(--foreground)] border border-[var(--border)]/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[var(--background)]/50 p-4 rounded-xl border border-[var(--border)]/30">
                        <div className="flex items-center gap-2 mb-1.5 text-[var(--destructive)]">
                          <Target size={16} /> 
                          <span className="text-xs font-bold uppercase tracking-wider">Problem</span>
                        </div>
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{project.problem}</p>
                      </div>

                      <div className="bg-[var(--background)]/50 p-4 rounded-xl border border-[var(--border)]/30">
                         <div className="flex items-center gap-2 mb-1.5 text-[var(--primary)]">
                          <LayoutTemplate size={16} /> 
                          <span className="text-xs font-bold uppercase tracking-wider">Solution & Impact</span>
                        </div>
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-3">{project.solution}</p>
                        <p className="text-sm font-medium text-[var(--foreground)] leading-relaxed">Impact: {project.impact}</p>
                      </div>
                    </div>

                    {project.features.length > 0 && (
                      <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t border-[var(--border)]/30">
                        {project.features.map(f => (
                           <div key={f} className="flex items-center gap-1.5 text-xs font-medium text-[var(--muted-foreground)]">
                             <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                             {f}
                           </div>
                        ))}
                      </div>
                    )}

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
