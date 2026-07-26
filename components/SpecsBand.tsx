"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SPECS: { value: string; label: string }[] = [
  { value: "15+", label: "App integrations built in" },
  { value: "100+", label: "Supported hardware boards" },
  { value: "100%", label: "Local-first — your data stays home" },
  { value: "24/7", label: "Proactive heartbeat, on standby" },
];

export default function SpecsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="w-full py-24 md:py-28" ref={ref}>
      <div className="mx-auto max-w-[1400px] px-8 md:px-16">
        <div
          className="grid grid-cols-2 gap-y-12 rounded-[32px] px-8 py-14 md:grid-cols-4 md:px-12"
          style={{
            background: "linear-gradient(180deg, #fafbfd 0%, #f4f7fc 100%)",
            border: "1px solid rgba(111,151,215,0.16)",
          }}
        >
          {SPECS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="font-black text-[#111]"
                style={{ fontSize: "clamp(34px, 4vw, 52px)", letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div className="mt-3 max-w-[160px] text-[14px] text-[#666]" style={{ lineHeight: 1.4 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
