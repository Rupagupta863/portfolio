"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Employee Task Management Application",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    description:
      "Built a full-stack-ready platform with JWT authentication and role-based UI access for real-time task tracking across employee workflows. Developed a responsive UI using Tailwind CSS with reusable TypeScript components. Integrated REST APIs for CRUD operations with filtering and search by status, priority, and assignee. Implemented Local Storage persistence to maintain session state.",
    liveUrl: null,
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    tech: ["React.js", "Node.js", "MongoDB", "Mongoose", "Express.js"],
    description:
      "Built a full-stack e-commerce platform implementing reusable component architecture and client-side routing. Designed a responsive UI with strong Core Web Vitals performance. Backend powered by Node.js, Express, and MongoDB for product and order management.",
    liveUrl: null,
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Personal Portfolio Website",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    description:
      "Designed and deployed a fully responsive portfolio using Next.js and Tailwind CSS showcasing projects and skills. Focused on performance and clean component-driven architecture.",
    liveUrl: "https://portfolio-f2uk.vercel.app/",
    category: "frontend",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  },
];

const filters = ["all", "frontend", "fullstack"];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
                Selected Works
              </span>
              <h2 className="section-heading mb-0">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </div>

            <div className="flex p-1 bg-[var(--secondary)]/50 rounded-xl border border-[var(--border)]/30">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-300 ${
                    filter === f
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--secondary)] border border-[var(--border)]/30 transition-all duration-500 group-hover:border-[var(--primary)]/30 group-hover:shadow-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] hover:scale-105 transition-transform shadow-lg"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        <a
                          href="https://github.com/Rupagupta863"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-[var(--background)]/80 backdrop-blur-md text-[var(--foreground)] border border-[var(--border)]/50 hover:scale-105 transition-transform shadow-lg"
                          aria-label="Source Code"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 px-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-[var(--font-display)] font-bold group-hover:text-[var(--primary)] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-[var(--muted-foreground)] group-hover:text-[var(--primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </div>

                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[var(--secondary)]/60 text-[var(--muted-foreground)] font-semibold border border-[var(--border)]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
