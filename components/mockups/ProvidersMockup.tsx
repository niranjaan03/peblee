const providers = [
  { name: "OpenAI", model: "gpt-4o", color: "#10a37f", active: false, tokens: "2.4k" },
  { name: "Claude", model: "claude-sonnet-4-6", color: "#d97706", active: true, tokens: "1.8k" },
  { name: "Gemini", model: "gemini-2.0-flash", color: "#4285f4", active: false, tokens: "3.1k" },
  { name: "Groq", model: "llama-3.3-70b", color: "#f55036", active: false, tokens: "5.2k" },
  { name: "DeepSeek", model: "deepseek-chat", color: "#6366f1", active: false, tokens: "1.1k" },
];

export default function ProvidersMockup() {
  return (
    <div className="w-full h-full flex overflow-hidden rounded-[inherit]">
      {/* Sidebar */}
      <div className="w-[180px] shrink-0 flex flex-col border-r border-white/5 pt-4" style={{ background: "#141414" }}>
        <div className="px-4 mb-3">
          <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest">Settings</div>
        </div>
        {["General", "AI Providers", "Voice & Wake", "Appearance", "Privacy"].map((s, i) => (
          <div key={i} className="mx-2 mb-0.5 px-3 py-2 rounded-lg text-[11px] cursor-pointer"
            style={{
              background: i === 1 ? "rgba(111,151,215,0.15)" : "transparent",
              color: i === 1 ? "#6F97D7" : "rgba(255,255,255,0.45)",
              fontWeight: i === 1 ? 600 : 400,
            }}>
            {s}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5 overflow-hidden" style={{ background: "#0f0f0f" }}>
        <div className="text-[14px] font-semibold text-white mb-1">AI Providers</div>
        <div className="text-[11px] text-white/30 mb-4">Select and configure your language model provider.</div>

        <div className="flex flex-col gap-2">
          {providers.map((p) => (
            <div key={p.name}
              className="flex items-center justify-between px-4 py-3 rounded-xl border transition-all"
              style={{
                background: p.active ? "rgba(111,151,215,0.08)" : "#171717",
                borderColor: p.active ? "rgba(111,151,215,0.35)" : "rgba(255,255,255,0.06)",
              }}>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ background: p.color + "22", border: `1px solid ${p.color}44` }}>
                  <span style={{ color: p.color }}>{p.name[0]}</span>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-white/85">{p.name}</div>
                  <div className="text-[10px] text-white/30">{p.model}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[10px] text-white/25">{p.tokens} tokens</div>
                {p.active && (
                  <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "#6F97D7" }}>
                    <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4L3.2 5.7L6.5 2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
