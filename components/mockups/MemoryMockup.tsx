const memories = [
  { type: "Fact", content: "Prefers concise, direct answers without preamble", tags: ["preference", "style"], confidence: 0.97 },
  { type: "Person", content: "Sister's name is Priya, lives in Bangalore", tags: ["family"], confidence: 0.99 },
  { type: "Preference", content: "Drinks black coffee every morning before 9am", tags: ["routine", "food"], confidence: 0.94 },
  { type: "Goal", content: "Wants to finish the product launch by end of July", tags: ["work", "deadline"], confidence: 0.91 },
];

const typeColors: Record<string, string> = {
  Fact: "#6F97D7",
  Person: "#10a37f",
  Preference: "#d97706",
  Goal: "#8b5cf6",
};

export default function MemoryMockup() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-[inherit]" style={{ background: "#0f0f0f" }}>
      {/* Header */}
      <div className="px-5 pt-5 pb-3 border-b border-white/5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[14px] font-semibold text-white">Memory</div>
          <div className="text-[10px] px-2 py-1 rounded-full text-white/40 border border-white/10">24 memories</div>
        </div>
        {/* Search bar */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/8" style={{ background: "#171717" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="text-[11px] text-white/20">Semantic search…</span>
        </div>
      </div>

      {/* Memory cards */}
      <div className="flex-1 px-4 py-3 flex flex-col gap-2.5 overflow-hidden">
        {memories.map((m, i) => (
          <div key={i} className="flex flex-col gap-1.5 px-4 py-3 rounded-xl border border-white/6"
            style={{ background: "#141414" }}>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
                style={{ background: typeColors[m.type] + "22", color: typeColors[m.type] }}>
                {m.type}
              </span>
              <div className="flex items-center gap-1">
                <div className="h-1 w-12 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div className="h-full rounded-full" style={{ width: `${m.confidence * 100}%`, background: typeColors[m.type] }} />
                </div>
                <span className="text-[9px] text-white/25">{Math.round(m.confidence * 100)}%</span>
              </div>
            </div>
            <p className="text-[11px] text-white/75 leading-snug">{m.content}</p>
            <div className="flex gap-1">
              {m.tags.map(t => (
                <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full text-white/30 border border-white/8">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
