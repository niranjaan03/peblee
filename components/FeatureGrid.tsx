"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Capability {
  id: string;
  title: string;
  copy: string;
  span: "wide" | "normal";
  accent: string;
  vignette: ReactNode;
}

/* Per-card accent colors */
const BLUE = "#4E80EE";
const VIOLET = "#8B5CF6";
const AMBER = "#F59E0B";
const PINK = "#EC4899";
const TEAL = "#14B8A6";
const EMERALD = "#10B981";
const ORANGE = "#F97316";
const INDIGO = "#6366F1";

/* hex + alpha (0–1) → rgba() */
function tint(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

/* ---------- Mini UI vignettes rendered inside cards ---------- */

function ChatVignette({ accent }: { accent: string }) {
  return (
    <div className="mt-auto flex flex-col gap-2 pt-6">
      <div className="self-start rounded-2xl rounded-bl-md px-3.5 py-2 text-[12px] text-[#444]"
        style={{ background: "rgba(0,0,0,0.045)" }}>
        Where did we leave off last night?
      </div>
      <div className="self-end rounded-2xl rounded-br-md px-3.5 py-2 text-[12px] text-white"
        style={{ background: `linear-gradient(160deg, ${accent} 0%, ${tint(accent, 0.8)} 100%)` }}>
        Planning your trip — flights were next.
      </div>
    </div>
  );
}

function WaveVignette({ accent }: { accent: string }) {
  const bars = [8, 14, 22, 30, 24, 34, 18, 26, 12, 20, 9];
  return (
    <div className="mt-auto flex items-end gap-1.5 pt-6" style={{ height: 62 }}>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-[5px] rounded-full"
          style={{ background: i % 3 === 0 ? accent : tint(accent, 0.35) }}
          animate={{ height: [h, h + 10, h] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.09 }}
        />
      ))}
      <span className="ml-3 self-center text-[11px] font-medium" style={{ color: accent }}>
        “Hey Peblee…”
      </span>
    </div>
  );
}

function ProvidersVignette({ accent }: { accent: string }) {
  const rows = [
    { name: "Claude", on: true },
    { name: "GPT", on: false },
    { name: "Local fallback", on: false },
  ];
  return (
    <div className="mt-auto flex flex-col gap-1.5 pt-6">
      {rows.map((r) => (
        <div key={r.name} className="flex items-center justify-between rounded-xl px-3 py-2"
          style={{
            background: r.on ? tint(accent, 0.1) : "rgba(0,0,0,0.03)",
            border: `1px solid ${r.on ? tint(accent, 0.35) : "rgba(0,0,0,0.05)"}`,
          }}>
          <span className="text-[12px] font-medium text-[#333]">{r.name}</span>
          <span className="h-2 w-2 rounded-full" style={{ background: r.on ? accent : "rgba(0,0,0,0.12)" }} />
        </div>
      ))}
    </div>
  );
}

function MemoryVignette({ accent }: { accent: string }) {
  return (
    <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
      {["Sister: Anna", "Prefers oat milk", "Dentist · Tue 3pm", "Works on Peblee"].map((f, i) => (
        <span key={f} className="rounded-full px-3 py-1.5 text-[11px] font-medium"
          style={{
            color: i === 0 ? "#fff" : accent,
            background: i === 0 ? `linear-gradient(160deg, ${accent} 0%, ${tint(accent, 0.8)} 100%)` : tint(accent, 0.1),
            border: i === 0 ? "none" : `1px solid ${tint(accent, 0.25)}`,
          }}>
          {f}
        </span>
      ))}
    </div>
  );
}

function IntegrationsVignette({ accent }: { accent: string }) {
  const apps = [
    { name: "Slack", color: "#611F69" },
    { name: "Gmail", color: "#EA4335" },
    { name: "Calendar", color: "#4285F4" },
    { name: "GitHub", color: "#24292F" },
    { name: "Spotify", color: "#1DB954" },
    { name: "Hue", color: "#F59E0B" },
    { name: "Obsidian", color: "#7C3AED" },
    { name: "+8", color: accent },
  ];
  return (
    <div className="mt-auto grid grid-cols-4 gap-1.5 pt-6 sm:grid-cols-8">
      {apps.map((a) => (
        <div key={a.name}
          className="flex h-12 items-center justify-center rounded-xl text-[10px] font-semibold"
          style={{
            background: tint(a.color, 0.09),
            border: `1px solid ${tint(a.color, 0.2)}`,
            color: a.color,
          }}>
          {a.name}
        </div>
      ))}
    </div>
  );
}

function DevicesVignette({ accent }: { accent: string }) {
  return (
    <div className="mt-auto flex flex-col gap-1.5 pt-6">
      {[
        { name: "Desk Peblee", status: "Online" },
        { name: "Kitchen Peblee", status: "Online" },
      ].map((d) => (
        <div key={d.name} className="flex items-center gap-2.5 rounded-xl px-3 py-2"
          style={{ background: tint(accent, 0.07), border: `1px solid ${tint(accent, 0.2)}` }}>
          <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
          <span className="flex-1 text-[12px] font-medium text-[#333]">{d.name}</span>
          <span className="text-[11px] font-medium" style={{ color: accent }}>{d.status}</span>
        </div>
      ))}
    </div>
  );
}

function AutomationVignette({ accent }: { accent: string }) {
  return (
    <div className="mt-auto flex flex-col gap-1.5 pt-6">
      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2"
        style={{ background: tint(accent, 0.08), border: `1px solid ${tint(accent, 0.25)}` }}>
        <motion.span
          className="h-2 w-2 rounded-full"
          style={{ background: accent }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="flex-1 text-[12px] font-medium text-[#333]">Heartbeat check</span>
        <span className="text-[11px] text-[#888]">every 30 min</span>
      </div>
      <div className="flex items-center gap-2.5 rounded-xl px-3 py-2"
        style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.05)" }}>
        <span className="h-2 w-2 rounded-full" style={{ background: "rgba(0,0,0,0.15)" }} />
        <span className="flex-1 text-[12px] font-medium text-[#333]">Morning briefing</span>
        <span className="text-[11px] text-[#888]">0 8 * * *</span>
      </div>
    </div>
  );
}

function LocalVignette({ accent }: { accent: string }) {
  return (
    <div className="mt-auto flex items-center gap-2 pt-6">
      {["Device", "Server", "You"].map((n, i) => (
        <div key={n} className="flex items-center gap-2">
          <span className="rounded-lg px-2.5 py-1.5 text-[11px] font-semibold"
            style={{
              background: n === "Server" ? tint(accent, 0.14) : "rgba(0,0,0,0.03)",
              border: `1px solid ${n === "Server" ? tint(accent, 0.35) : "rgba(0,0,0,0.06)"}`,
              color: n === "Server" ? accent : "#555",
            }}>
            {n}
          </span>
          {i < 2 && <span className="text-[11px]" style={{ color: tint(accent, 0.4) }}>⇄</span>}
        </div>
      ))}
      <span className="ml-1 text-[11px] text-[#999]">· never the cloud</span>
    </div>
  );
}

/* ---------- Card data ---------- */

const CAPABILITIES: Capability[] = [
  {
    id: "conversations",
    title: "Context-aware conversations",
    copy: "Every thread is saved, searchable, and remembered. Pick up exactly where you left off.",
    span: "wide",
    accent: BLUE,
    vignette: <ChatVignette accent={BLUE} />,
  },
  {
    id: "voice",
    title: "“Hey Peblee” wake word",
    copy: "On-device wake word, fully offline Whisper transcription, speaker diarization.",
    span: "normal",
    accent: VIOLET,
    vignette: <WaveVignette accent={VIOLET} />,
  },
  {
    id: "providers",
    title: "Claude & GPT built in",
    copy: "Bring your own key — set at runtime, with a local fallback when you don't.",
    span: "normal",
    accent: AMBER,
    vignette: <ProvidersVignette accent={AMBER} />,
  },
  {
    id: "memory",
    title: "Layered memory",
    copy: "Durable facts, temporal events, and a knowledge graph — surfaced at the right moment.",
    span: "wide",
    accent: PINK,
    vignette: <MemoryVignette accent={PINK} />,
  },
  {
    id: "integrations",
    title: "15+ app integrations",
    copy: "Slack, Gmail, Calendar, GitHub, Spotify, Hue, Obsidian and more — all agent-callable.",
    span: "wide",
    accent: TEAL,
    vignette: <IntegrationsVignette accent={TEAL} />,
  },
  {
    id: "devices",
    title: "Every companion, one place",
    copy: "Pair over Bluetooth, watch live status, and manage firmware from a single screen.",
    span: "normal",
    accent: EMERALD,
    vignette: <DevicesVignette accent={EMERALD} />,
  },
  {
    id: "automation",
    title: "Proactive automation",
    copy: "A cron scheduler for reminders, plus a heartbeat loop that follows up on its own.",
    span: "normal",
    accent: ORANGE,
    vignette: <AutomationVignette accent={ORANGE} />,
  },
  {
    id: "local-first",
    title: "Local-first & self-hosted",
    copy: "Conversations, memories, and keys live in a local database on hardware you control.",
    span: "wide",
    accent: INDIGO,
    vignette: <LocalVignette accent={INDIGO} />,
  },
];

function Card({ cap, index }: { cap: Capability; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.06 }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl p-7 ${cap.span === "wide" ? "md:col-span-2" : ""}`}
      style={{
        background: `linear-gradient(180deg, ${tint(cap.accent, 0.06)} 0%, #ffffff 55%)`,
        border: `1px solid ${tint(cap.accent, 0.22)}`,
        boxShadow: `0 1px 2px ${tint(cap.accent, 0.08)}`,
      }}
    >
      {/* hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(120% 100% at 50% 0%, ${tint(cap.accent, 0.12)} 0%, transparent 60%)` }}
      />
      <h3 className="relative font-bold text-[#111]" style={{ fontSize: 19, letterSpacing: "-0.02em" }}>
        {cap.title}
      </h3>
      <p className="relative mt-2 text-[#666]" style={{ fontSize: 14.5, lineHeight: 1.55, maxWidth: 440 }}>
        {cap.copy}
      </p>
      <div className="relative flex flex-1 flex-col">{cap.vignette}</div>
    </motion.div>
  );
}

export default function FeatureGrid() {
  return (
    <section className="w-full py-24 md:py-28">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16">
        <div className="mb-14 max-w-[640px]">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-widest" style={{ color: "#6F97D7" }}>
            Everything it does
          </div>
          <h2
            className="font-black text-[#111]"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.04em" }}
          >
            One companion.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #4E80EE 0%, #8B5CF6 30%, #EC4899 60%, #F97316 90%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              A dozen reasons to keep it close.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Card key={cap.id} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
