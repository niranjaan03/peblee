"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ConversationMockup from "./mockups/ConversationMockup";
import DevicePhoneMockup from "./mockups/phone/DevicePhoneMockup";

const PROOF_CHIPS = [
  { label: "Wake word · on-device", top: "6%", left: "-4%", delay: 0 },
  { label: "Whisper STT · offline", top: "38%", left: "-9%", delay: 1.2 },
  { label: "SQLite · on your machine", top: "12%", right: "-5%", delay: 0.6 },
] as const;

export default function FeaturesHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const enter = (delay: number) =>
    mounted
      ? {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }
      : {};

  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-20 md:pb-28">
      {/* Ambient washes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden
        style={{ background: "radial-gradient(ellipse 55% 45% at 18% 8%, rgba(111,151,215,0.09) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute inset-0" aria-hidden
        style={{ background: "radial-gradient(ellipse 45% 40% at 88% 60%, rgba(111,151,215,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-16 lg:gap-12 items-center">
        {/* ---- Left: copy ---- */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            {...enter(0)}
            className="mb-6 px-4 py-1.5 rounded-full border text-[12px] font-medium"
            style={{ borderColor: "rgba(111,151,215,0.35)", color: "#6F97D7", background: "rgba(111,151,215,0.06)" }}>
            Features
          </motion.div>

          <motion.h1
            {...enter(0.05)}
            className="font-black text-[#111]"
            style={{
              fontSize: "clamp(42px, 5vw, 76px)",
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif",
            }}>
            Everything your
            <br />
            personal assistant
            <br />
            <span style={{ color: "#6F97D7" }}>needs.</span>
          </motion.h1>

          <motion.p
            {...enter(0.15)}
            className="mt-6 text-[#666]"
            style={{
              fontSize: "clamp(16px, 1.4vw, 20px)",
              maxWidth: 480,
              lineHeight: 1.55,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif",
            }}>
            Voice, memory, knowledge, and 15+ app integrations — running on
            hardware you own, with data that never leaves your network.
          </motion.p>

          <motion.div {...enter(0.25)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="/"
              className="inline-flex items-center justify-center h-[50px] px-7 rounded-full text-white text-[15px] font-medium transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(160deg, #6F97D7 0%, #5B84C9 100%)", boxShadow: "0 8px 24px rgba(111,151,215,0.35)" }}>
              Join Waitlist
            </a>
            <a href="#deep-dives"
              className="inline-flex items-center justify-center h-[50px] px-7 rounded-full text-[#111] text-[15px] font-medium border border-gray-200 hover:border-gray-400 transition-all">
              See it in detail
            </a>
          </motion.div>

          {/* Quick capability ticker */}
          <motion.div {...enter(0.35)} className="mt-10 flex flex-wrap gap-2">
            {["Hey Peblee", "Layered memory", "Knowledge graph", "Claude & GPT", "Local-first"].map((t) => (
              <span key={t}
                className="rounded-full px-3.5 py-1.5 text-[12px] font-medium text-[#555]"
                style={{ background: "rgba(0,0,0,0.035)", border: "1px solid rgba(0,0,0,0.06)" }}>
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ---- Right: layered device cluster ---- */}
        <motion.div
          {...(mounted
            ? {
                initial: { opacity: 0, y: 40, scale: 0.97 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const },
              }
            : {})}
          className="relative hidden sm:block"
          style={{ height: 540 }}>
          {/* Desktop window */}
          <div className="absolute left-0 right-14 lg:right-20 top-4 rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 48px 96px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.06)" }}>
            <div className="flex items-center gap-1.5 px-4 h-9" style={{ background: "#1a1a1a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <div className="flex-1 flex items-center justify-center">
                <div className="text-[10px] text-white/25 font-medium">Peblee</div>
              </div>
            </div>
            <div style={{ height: 430 }}>
              <ConversationMockup />
            </div>
          </div>

          {/* Overlapping phone */}
          <motion.div
            {...(mounted
              ? {
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] as const },
                }
              : {})}
            className="absolute bottom-0 right-0"
            style={{
              width: 192,
              height: 404,
              borderRadius: 38,
              background: "linear-gradient(160deg, #242424 0%, #1a1a1a 100%)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1.5px rgba(255,255,255,0.09), inset 0 1px 0 rgba(255,255,255,0.06)",
              padding: 6,
            }}>
            <div className="w-full h-full overflow-hidden" style={{ borderRadius: 32, background: "#0f0f0f" }}>
              <DevicePhoneMockup />
            </div>
          </motion.div>

          {/* Floating proof chips */}
          {PROOF_CHIPS.map((chip) => (
            <motion.div
              key={chip.label}
              className="absolute z-10 hidden lg:flex items-center gap-2 rounded-full bg-white px-3.5 py-2"
              style={{
                top: chip.top,
                left: "left" in chip ? chip.left : undefined,
                right: "right" in chip ? chip.right : undefined,
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
              }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: chip.delay }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#6F97D7" }} />
              <span className="text-[12px] font-medium text-[#333] whitespace-nowrap">{chip.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
