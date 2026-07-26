"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface PhoneWindowProps {
  children: ReactNode;
  flip?: boolean;
}

export default function PhoneWindow({ children, flip = false }: PhoneWindowProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: flip ? 1.5 : -1.5 }}
      animate={inView ? { opacity: 1, y: 0, rotate: flip ? 0.5 : -0.5 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotate: 0, transition: { duration: 0.4 } }}
      className="relative flex justify-center items-center"
    >
      {/* Glow */}
      <div className="absolute pointer-events-none"
        style={{
          inset: "-20%",
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(111,151,215,0.13) 0%, transparent 70%)",
          filter: "blur(28px)",
        }} />

      {/* Phone body */}
      <div
        className="relative flex flex-col shrink-0"
        style={{
          width: 248,
          height: 528,
          borderRadius: 46,
          background: "linear-gradient(160deg, #242424 0%, #1a1a1a 100%)",
          boxShadow:
            "0 48px 96px rgba(0,0,0,0.55), 0 12px 24px rgba(0,0,0,0.3), 0 0 0 1.5px rgba(255,255,255,0.09), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Volume buttons */}
        <div className="absolute flex flex-col gap-2.5" style={{ left: -3, top: 88 }}>
          <div className="w-[3px] h-6 rounded-l-sm" style={{ background: "#333" }} />
          <div className="w-[3px] h-9 rounded-l-sm" style={{ background: "#333" }} />
          <div className="w-[3px] h-9 rounded-l-sm" style={{ background: "#333" }} />
        </div>
        {/* Power button */}
        <div className="absolute w-[3px] h-14 rounded-r-sm" style={{ right: -3, top: 108, background: "#333" }} />

        {/* Screen */}
        <div
          className="flex-1 flex flex-col overflow-hidden"
          style={{
            margin: "8px",
            borderRadius: 38,
            background: "#0f0f0f",
          }}
        >
          {/* Status bar */}
          <div className="relative flex items-center justify-between shrink-0" style={{ padding: "10px 16px 4px" }}>
            <span className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.82)", letterSpacing: "-0.02em" }}>
              9:41
            </span>
            {/* Dynamic Island */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-2"
              style={{
                width: 90,
                height: 24,
                borderRadius: 16,
                background: "#000",
              }}
            />
            {/* Icons */}
            <div className="flex items-center gap-1.5">
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                {[0, 1, 2, 3].map((i) => (
                  <rect
                    key={i}
                    x={i * 3.8}
                    y={10 - (i + 1) * 2.4}
                    width="2.5"
                    height={(i + 1) * 2.4}
                    rx="0.6"
                    fill={`rgba(255,255,255,${0.28 + i * 0.18})`}
                  />
                ))}
              </svg>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                <rect x="0.5" y="0.5" width="13" height="10" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
                <rect x="2" y="2" width="8" height="7" rx="1" fill="#22c55e" />
                <path d="M14.5 3.5v4a1.5 1.5 0 0 0 0-4Z" fill="rgba(255,255,255,0.4)" />
              </svg>
            </div>
          </div>

          {/* Mockup content */}
          <div className="flex-1 overflow-hidden">
            {children}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center shrink-0" style={{ paddingBottom: 6, paddingTop: 4 }}>
            <div className="w-24 h-[4px] rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
