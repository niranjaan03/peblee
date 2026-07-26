"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FeatureSectionProps {
  category: string;
  title: string;
  description: string;
  example: string;
  flip: boolean;
  mockup: ReactNode;
  index?: number;
}

export default function FeatureSection({ category, title, description, example, flip, mockup, index }: FeatureSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const text = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: flip ? 32 : -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="flex flex-col justify-center"
    >
      {/* Index + category */}
      <div className="mb-5 flex items-center gap-3">
        {typeof index === "number" && (
          <span
            className="font-black tabular-nums"
            style={{
              fontSize: 15,
              color: "rgba(111,151,215,0.55)",
              letterSpacing: "-0.02em",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif",
            }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
          style={{ color: "#4a6da8", background: "rgba(111,151,215,0.1)", border: "1px solid rgba(111,151,215,0.18)" }}>
          {category}
        </span>
      </div>

      <h2 className="font-black text-[#111111] mb-5"
        style={{
          fontSize: "clamp(36px, 3.8vw, 58px)",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif",
          whiteSpace: "pre-line",
        }}>
        {title}
      </h2>

      <p className="text-[#555] leading-relaxed mb-7"
        style={{
          fontSize: "clamp(15px, 1.3vw, 19px)",
          maxWidth: 480,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif",
        }}>
        {description}
      </p>

      {/* Example scenario card */}
      <div
        className="relative rounded-2xl p-5"
        style={{
          maxWidth: 460,
          background: "linear-gradient(180deg, #fafbfd 0%, #f4f7fc 100%)",
          border: "1px solid rgba(111,151,215,0.18)",
        }}>
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full"
            style={{ background: "rgba(111,151,215,0.15)" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6F97D7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" />
            </svg>
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#6F97D7" }}>
            In practice
          </span>
        </div>
        <p className="text-[#555]"
          style={{
            fontSize: "clamp(13px, 1.1vw, 15.5px)",
            lineHeight: 1.55,
            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif",
          }}>
          {example}
        </p>
      </div>
    </motion.div>
  );

  const image = (
    <motion.div
      initial={{ opacity: 0, x: flip ? -32 : 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {mockup}
    </motion.div>
  );

  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        {flip ? <>{text}{image}</> : <>{image}{text}</>}
      </div>
    </section>
  );
}
