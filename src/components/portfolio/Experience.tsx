"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const items = [
  {
    title: "Software Engineer",
    org: "GemsNY IT Solution",
    period: "Jan 2025 – Present",
    desc: "Building scalable web solutions using React and Next.js. Focused on performance optimization and intuitive UI/UX.",
    icon: Briefcase,
    type: "work",
  },
  {
    title: "Master of Computer Applications",
    org: "Manipal University Jaipur",
    period: "2023 – 2025",
    desc: "Specialized in software engineering and web technologies. CGPA: 9.12.",
    icon: GraduationCap,
    type: "edu",
  },
  {
    title: "BSc Hons Mathematics",
    org: "Lalit Narayan Mithila University",
    period: "2019 – 2023",
    desc: "Developed strong analytical and problem-solving skills through rigorous study.",
    icon: GraduationCap,
    type: "edu",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
              Journey
            </span>
            <h2 className="section-heading">
              Experience & <span className="gradient-text">Education</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)]/40 via-[var(--border)]/30 to-transparent" />

            <div className="space-y-10">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full border-2 border-[var(--background)] bg-[var(--primary)] z-10 shadow-sm" />

                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] ml-14 md:ml-0">
                    <div className="group p-6 rounded-2xl bg-[var(--secondary)]/30 border border-[var(--border)]/30 hover:border-[var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] shrink-0 group-hover:scale-105 transition-transform">
                          <item.icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base font-[var(--font-display)] font-bold text-[var(--foreground)] leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-sm font-medium text-[var(--primary)] mt-0.5">
                            {item.org}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--muted-foreground)] mb-3">
                        <Calendar size={12} />
                        {item.period}
                      </div>

                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
