"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need to choose one AI provider?",
    a: "No. Peblee works with both Anthropic Claude and OpenAI GPT — just add your own API keys through the app's Settings and switch at any time, without touching a config file. Without any key, Peblee falls back to fully local search heuristics.",
  },
  {
    q: "Does Peblee require the cloud?",
    a: "No. The server, database, desktop app, and device firmware all run entirely on your local network. Wake-word detection runs on the device, and speech-to-text runs fully offline with a local Whisper model. Cloud AI providers are optional.",
  },
  {
    q: "How does Peblee remember things?",
    a: "Peblee layers durable facts, temporal events, and a knowledge graph extracted from your conversations, then merges and reranks them so the right detail surfaces at the right moment using semantic search.",
  },
  {
    q: "What apps does Peblee connect to?",
    a: "15+ integrations ship today, including Slack, Gmail, Google Calendar, GitHub, Discord, Telegram, WhatsApp, Signal, iMessage, Spotify, Philips Hue, and Obsidian — each one becomes a tool your companion can call.",
  },
  {
    q: "Is my data secure?",
    a: "Everything — conversations, memories, and API keys — is stored in a local database on your own machine, never in the cloud and never in an env file. Keys are only ever sent directly to the relevant provider. Peblee is designed to run on your trusted home network.",
  },
];

function Item({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#111]" style={{ fontSize: "clamp(17px, 1.6vw, 20px)", letterSpacing: "-0.01em" }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
          style={{ border: "1px solid rgba(111,151,215,0.4)", color: "#6F97D7" }}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-[#666]" style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 760 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FeatureFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="w-full py-24 md:py-28">
      <div className="mx-auto max-w-[900px] px-8 md:px-16">
        <div className="mb-12 text-center">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-widest" style={{ color: "#6F97D7" }}>
            Questions
          </div>
          <h2
            className="font-black text-[#111]"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.04em" }}
          >
            Good to know.
          </h2>
        </div>

        <div>
          {FAQS.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
