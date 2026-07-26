const providers = [
  { name: "Claude", model: "claude-sonnet-4-6", color: "#d97706", active: true },
  { name: "OpenAI", model: "gpt-4o", color: "#10a37f", active: false },
  { name: "Whisper", model: "tiny-en · on-device", color: "#4285f4", active: false },
  { name: "AssemblyAI", model: "speaker diarization", color: "#6366f1", active: false },
  { name: "Local", model: "tf-idf fallback · offline", color: "#f55036", active: false },
];

export default function ProvidersPhoneMockup() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-[inherit]" style={{ background: "#0f0f0f" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-white/5" style={{ background: "#141414" }}>
        <div className="text-[14px] font-semibold text-white mb-0.5">AI Providers</div>
        <div className="text-[10px] text-white/30">Select your language model</div>
      </div>

      {/* Provider list */}
      <div className="flex-1 px-3 py-3 flex flex-col gap-2 overflow-hidden">
        {providers.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 px-3 py-3 rounded-xl border"
            style={{
              background: p.active ? "rgba(111,151,215,0.08)" : "#141414",
              borderColor: p.active ? "rgba(111,151,215,0.35)" : "rgba(255,255,255,0.06)",
            }}
          >
            {/* Icon */}
            <div
              className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-[11px] font-bold"
              style={{ background: p.color + "22", border: `1px solid ${p.color}44` }}
            >
              <span style={{ color: p.color }}>{p.name[0]}</span>
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-medium text-white/85">{p.name}</div>
              <div className="text-[10px] text-white/30 truncate">{p.model}</div>
            </div>
            {/* Active indicator */}
            {p.active ? (
              <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: "#6F97D7" }}>
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <path d="M1.5 4L3.2 5.7L6.5 2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            ) : (
              <div className="w-4 h-4 rounded-full border shrink-0" style={{ borderColor: "rgba(255,255,255,0.15)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
