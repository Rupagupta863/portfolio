"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Activity, CheckCircle, Code, GraduationCap, Calendar } from "lucide-react";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    if (node) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          node.textContent = value.toFixed(0) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, suffix, inView]);

  return <span ref={nodeRef} className="font-bold">{from}{suffix}</span>;
}

const gemsNyBullets = [
  {
    icon: Activity,
    text: "Improved page load performance by",
    metric: 30,
    suffix: "%",
    sub: "via lazy loading & memoization"
  },
  {
    icon: CheckCircle,
    text: "Built task management system with",
    metric: 100,
    suffix: "%",
    sub: "real-time workflow tracking"
  },
  {
    icon: Code,
    text: "Developed scalable UI components for",
    metric: 5,
    suffix: "+",
    sub: "production applications"
  }
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative overflow-hidden bg-[var(--background)]">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[var(--primary)] font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
              Professional Journey
            </span>
            <h2 className="section-heading text-4xl md:text-5xl font-extrabold mb-4">
              Real-world <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Experience & <span className="gradient-text">Education</span></span>
            </h2>
            <p className="text-[var(--muted-foreground)]">Production-ready engineering and performance optimization.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-[28px] md:left-[38px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--border)] to-transparent" />

            <div className="space-y-12">
              {/* GemsNY Experience */}
              <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={inView ? { opacity: 1, x: 0 } : {}}
                 transition={{ delay: 0.1, duration: 0.5 }}
                 className="relative pl-16 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-[22px] md:left-[32px] top-2 w-3.5 h-3.5 rounded-full border-2 border-[var(--background)] bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]" />
                
                <div className="group p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)]/50 hover:border-[var(--primary)]/30 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-[var(--font-display)] font-bold text-[var(--foreground)] leading-tight">
                          Software Engineer – Frontend
                        </h3>
                        <p className="text-base font-medium text-[var(--primary)] mt-1">
                          GemsNY IT Solutions
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--muted-foreground)] text-xs font-semibold whitespace-nowrap">
                      Jan 2025 – Present
                    </div>
                  </div>

                  <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed text-sm md:text-base">
                    Engineered high-performance React & Next.js applications, focusing on scalable component architecture, 
                    state management, and seamless API integrations within Agile workflows.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {gemsNyBullets.map((bullet, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[var(--secondary)]/40 border border-[var(--border)]/40 hover:border-[var(--primary)]/20 transition-colors">
                        <bullet.icon className="text-[var(--primary)] mb-3" size={20} />
                        <div className="text-2xl font-bold text-[var(--foreground)] mb-1">
                          <Counter from={0} to={bullet.metric} suffix={bullet.suffix} />
                        </div>
                        <p className="text-xs font-medium text-[var(--foreground)] leading-tight mb-1">{bullet.text}</p>
                        <p className="text-[10px] text-[var(--muted-foreground)]">{bullet.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Education (MCA) */}
              <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={inView ? { opacity: 1, x: 0 } : {}}
                 transition={{ delay: 0.3, duration: 0.5 }}
                 className="relative pl-16 md:pl-24"
              >
                <div className="absolute left-[22px] md:left-[32px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[var(--background)] bg-[var(--muted-foreground)]" />
                
                <div className="p-6 rounded-2xl bg-transparent border border-[var(--border)]/30 hover:border-[var(--border)] transition-colors opacity-80 hover:opacity-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--foreground)]">Master of Computer Applications (MCA)</h3>
                      <p className="text-base font-medium text-[var(--primary)] mt-1">Manipal University Jaipur</p>
                    </div>
                    <div className="text-sm text-[var(--muted-foreground)] font-medium">
                      Aug 2023 – May 2025
                    </div>
                  </div>

                   <p className="text-[var(--muted-foreground)] my-2 leading-relaxed text-sm md:text-base">
                    Specialized in software engineering and web technologies. CGPA: 9.12.
                  </p>
                  
                </div>
                
              </motion.div>

              {/* Education (BSc) */}
              <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={inView ? { opacity: 1, x: 0 } : {}}
                 transition={{ delay: 0.4, duration: 0.5 }}
                 className="relative pl-16 md:pl-24"
              >
                <div className="absolute left-[22px] md:left-[32px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[var(--background)] bg-[var(--muted-foreground)]" />
                
                <div className="p-6 rounded-2xl bg-transparent border border-[var(--border)]/30 hover:border-[var(--border)] transition-colors opacity-80 hover:opacity-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--foreground)]">BSc Hons Mathematics</h3>
                      <p className="text-base font-medium text-[var(--primary)] mt-1">Lalit Narayan Mithila University</p>
                    </div>
                    <div className="text-sm text-[var(--muted-foreground)] font-medium">
                      2019 – 2023
                    </div>
                  </div>

                   <p className="text-[var(--muted-foreground)] my-2 leading-relaxed text-sm md:text-base">
                    Developed strong analytical and problem-solving skills through rigorous study.
                  </p>
                  
                </div>
                
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
