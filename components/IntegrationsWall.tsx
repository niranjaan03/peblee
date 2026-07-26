"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ROW_A = [
  { name: "Slack", color: "#611f69" },
  { name: "Gmail", color: "#ea4335" },
  { name: "Google Calendar", color: "#4285f4" },
  { name: "GitHub", color: "#24292f" },
  { name: "Discord", color: "#5865f2" },
  { name: "Telegram", color: "#29a9eb" },
  { name: "Twitter / X", color: "#111111" },
  { name: "WhatsApp", color: "#25d366" },
];

const ROW_B = [
  { name: "Signal", color: "#3a76f0" },
  { name: "iMessage", color: "#34c759" },
  { name: "Spotify", color: "#1db954" },
  { name: "Philips Hue", color: "#00a2e1" },
  { name: "Obsidian", color: "#7c3aed" },
  { name: "Browser", color: "#6F97D7" },
  { name: "Reminders", color: "#f59e0b" },
];

function Chip({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="flex shrink-0 items-center gap-2.5 rounded-full bg-white px-5 py-3"
      style={{ border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
      <span className="whitespace-nowrap text-[14px] font-medium text-[#333]">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: typeof ROW_A; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden">
      <div
        className="flex gap-3 pr-3"
        style={{
          width: "max-content",
          animation: `peblee-marquee ${items.length * 5}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}>
        {doubled.map((it, i) => (
          <Chip key={`${it.name}-${i}`} name={it.name} color={it.color} />
        ))}
      </div>
    </div>
  );
}

export default function IntegrationsWall() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full overflow-hidden py-24 md:py-28" ref={ref}
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f7f9fc 55%, #ffffff 100%)" }}>
      <style>{`
        @keyframes peblee-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto mb-14 max-w-[1400px] px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[680px]">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-widest" style={{ color: "#6F97D7" }}>
            Integrations
          </div>
          <h2 className="font-black text-[#111]"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.04em" }}>
            Connected to the apps you already live in.
          </h2>
          <p className="mt-5 text-[#666]" style={{ fontSize: "clamp(15px, 1.3vw, 19px)", lineHeight: 1.55, maxWidth: 560 }}>
            Every integration becomes a tool your companion can call — send a Slack
            message, check your calendar, queue a song, dim the lights.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows, full-bleed with edge fade */}
      <div className="relative flex flex-col gap-4">
        <MarqueeRow items={ROW_A} />
        <MarqueeRow items={ROW_B} reverse />
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40"
          style={{ background: "linear-gradient(to right, #fbfcfe 0%, transparent 100%)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40"
          style={{ background: "linear-gradient(to left, #fbfcfe 0%, transparent 100%)" }} />
      </div>
    </section>
  );
}
