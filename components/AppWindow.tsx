"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AppWindowProps {
  children: ReactNode;
  flip?: boolean;
  height?: number;
}

export default function AppWindow({ children, flip = false, height = 380 }: AppWindowProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: flip ? 1.5 : -1.5 }}
      animate={inView ? { opacity: 1, y: 0, rotate: flip ? 0.5 : -0.5 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotate: 0, transition: { duration: 0.4 } }}
      className="relative w-full"
      style={{ height }}
    >
      {/* Glow behind window */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(111,151,215,0.1) 0%, transparent 70%)",
          filter: "blur(24px)",
          transform: "scale(1.1)",
        }} />

      {/* Window chrome */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden"
        style={{
          boxShadow: "0 40px 80px rgba(0,0,0,0.35), 0 8px 16px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.06)",
        }}>
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-4 h-9 shrink-0" style={{ background: "#1a1a1a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-[10px] text-white/20 font-medium">Peblee</div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full" style={{ height: height - 36 }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
