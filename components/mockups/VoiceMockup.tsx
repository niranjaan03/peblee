"use client";
import { useEffect, useState } from "react";

export default function VoiceMockup() {
  const [bars, setBars] = useState(Array(24).fill(0.3));

  useEffect(() => {
    const id = setInterval(() => {
      setBars(prev => prev.map(() => 0.2 + Math.random() * 0.8));
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden rounded-[inherit]"
      style={{ background: "#0f0f0f" }}>

      {/* Ambient glow */}
      <div className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(111,151,215,0.12) 0%, transparent 70%)" }} />

      {/* Wake word badge */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-medium flex items-center gap-1.5"
        style={{ background: "rgba(111,151,215,0.15)", color: "#6F97D7", border: "1px solid rgba(111,151,215,0.3)" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Hey Peblee detected
      </div>

      {/* Ring */}
      <div className="relative w-36 h-36 flex items-center justify-center mb-6">
        {[0,1,2].map(i => (
          <div key={i} className="absolute inset-0 rounded-full border animate-ping"
            style={{
              borderColor: `rgba(111,151,215,${0.3 - i * 0.08})`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: "2s",
            }} />
        ))}
        <div className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #6F97D7, #5B84C9)", boxShadow: "0 0 40px rgba(111,151,215,0.4)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
          </svg>
        </div>
      </div>

      {/* Waveform bars */}
      <div className="flex items-end gap-0.5 h-10 mb-5">
        {bars.map((h, i) => (
          <div key={i} className="w-1 rounded-full transition-all duration-100"
            style={{
              height: `${h * 100}%`,
              background: i < 10 || i > 18 ? "rgba(111,151,215,0.25)" : "#6F97D7",
            }} />
        ))}
      </div>

      {/* Transcript */}
      <div className="text-center px-8">
        <div className="text-[13px] font-medium text-white/80 mb-1">
          &ldquo;What&apos;s on my schedule today?&rdquo;
        </div>
        <div className="text-[11px] text-white/30">Transcribing in real time…</div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-5 flex items-center gap-3">
        <button className="px-4 py-1.5 rounded-full text-[11px] border border-white/10 text-white/40">
          Cancel
        </button>
        <button className="px-4 py-1.5 rounded-full text-[11px] text-white"
          style={{ background: "#6F97D7" }}>
          Done
        </button>
      </div>
    </div>
  );
}
