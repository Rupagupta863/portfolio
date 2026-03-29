"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Activity, Cpu, Gauge } from "lucide-react";

const performanceMetrics = [
  {
    icon: Gauge,
    title: "Core Web Vitals Focus",
    description: "Optimized LCP via strategic preloading, stable CLS with reserved skeleton spacing, and reduced TBT using edge caching.",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    icon: Zap,
    title: "Lazy Loading & Code Splitting",
    description: "Dynamic imports and route-based code splitting reduce initial JS payload by >40% for lightning-fast interactivity (TTI).",
    color: "from-blue-400 to-indigo-600"
  },
  {
    icon: Cpu,
    title: "Memoization & State Optimization",
    description: "Minimizing wasteful re-renders using React.memo, useMemo, and fine-grained state management (Context API/Zustand).",
    color: "from-purple-400 to-fuchsia-600"
  },
  {
    icon: Activity,
    title: "Optimistic UI & Edge compute",
    description: "Instantaneous user feedback by mutating local cache instantly prior to REST API server responses, combined with edge handling.",
    color: "from-orange-400 to-rose-600"
  }
];

export default function Performance() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="performance" className="relative overflow-hidden bg-[var(--card)]/10 border-y border-[var(--border)]/30 backdrop-blur-md">
      <div className="absolute inset-0 z-0 bg-gradient-radial from-[var(--primary)]/5 to-[var(--background)] pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Text */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-xs uppercase tracking-widest shadow-sm shadow-[var(--primary)]/10 mb-6">
              <Zap size={14} className="animate-pulse" /> Engineering Focus
            </span>
            <h2 className="section-heading text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              How I build <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-fuchsia-400 to-[var(--accent)]">
                fast & scalable UIs
              </span>
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8">
              A premium user experience starts underneath the UI—with architecture that prioritizes zero-layout shifts, instantaneous interactions, 
              and memory efficiency. I treat performance metrics as a core feature.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">
               <div className="flex flex-col border-l-2 border-[var(--primary)] pl-6">
                 <span className="text-4xl font-[var(--font-display)] font-extrabold text-[var(--foreground)] mb-1.5 flex items-baseline gap-1">90<span className="text-xl text-[var(--muted-foreground)]">+</span></span>
                 <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Lighthouse Score</span>
               </div>
               <div className="flex flex-col border-l-2 border-[var(--accent)] pl-6">
                 <span className="text-4xl font-[var(--font-display)] font-extrabold text-[var(--foreground)] mb-1.5 flex items-baseline gap-1">&lt;1<span className="text-xl text-[var(--muted-foreground)]">s</span></span>
                 <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">First Contentful Paint</span>
               </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {performanceMetrics.map((metric, i) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="group relative p-6 rounded-3xl bg-[var(--secondary)]/40 border border-[var(--border)]/40 hover:bg-[var(--card)] hover:border-[var(--primary)]/20 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-[var(--primary)]/5"
              >
                <div className={`w-10 h-10 rounded-[12px] bg-gradient-to-br ${metric.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-sm font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {metric.title}
                </h3>
                <p className="text-[12px] font-medium leading-relaxed text-[var(--muted-foreground)]">
                  {metric.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
