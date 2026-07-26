export default function SettingsPhoneMockup() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-[inherit]" style={{ background: "#0f0f0f" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-white/5" style={{ background: "#141414" }}>
        <div className="text-[14px] font-semibold text-white">Settings</div>
      </div>

      {/* Settings rows */}
      <div className="flex-1 overflow-hidden">
        {/* Section: Preferences */}
        <div className="px-4 pt-4 pb-1">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/25 mb-2">Preferences</div>
        </div>
        <div className="px-3 flex flex-col gap-0.5">
          {[
            { label: "General", icon: "⚙" },
            { label: "AI Providers", icon: "✦", accent: true },
            { label: "Voice & Wake", icon: "◎" },
            { label: "Notifications", icon: "◻" },
            { label: "Privacy", icon: "◈" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 px-3 py-3 rounded-xl"
              style={{ background: s.accent ? "rgba(111,151,215,0.1)" : "#141414" }}
            >
              <span className="text-[14px]" style={{ color: s.accent ? "#6F97D7" : "rgba(255,255,255,0.4)" }}>{s.icon}</span>
              <span className="flex-1 text-[12px]" style={{ color: s.accent ? "#6F97D7" : "rgba(255,255,255,0.7)", fontWeight: s.accent ? 600 : 400 }}>
                {s.label}
              </span>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path d="M1 1l4 4-4 4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          ))}
        </div>

        {/* Section: Appearance (expanded) */}
        <div className="px-4 pt-4 pb-1">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/25 mb-2">Appearance</div>
        </div>
        <div className="px-3 flex flex-col gap-1.5">
          {/* Theme toggle */}
          <div className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-white/6" style={{ background: "#141414" }}>
            <span className="text-[12px] text-white/65">Theme</span>
            <div className="flex gap-1.5">
              {["Dark", "System"].map((t, i) => (
                <div
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-[10px]"
                  style={{
                    background: i === 0 ? "rgba(111,151,215,0.2)" : "transparent",
                    color: i === 0 ? "#6F97D7" : "rgba(255,255,255,0.35)",
                    border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
          {/* Token count toggle */}
          <div className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-white/6" style={{ background: "#141414" }}>
            <span className="text-[12px] text-white/65">Show token count</span>
            <div className="w-9 h-5 rounded-full relative" style={{ background: "#6F97D7" }}>
              <div className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow" style={{ left: 18 }} />
            </div>
          </div>
          {/* Reduce motion toggle */}
          <div className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-white/6" style={{ background: "#141414" }}>
            <span className="text-[12px] text-white/65">Reduce motion</span>
            <div className="w-9 h-5 rounded-full relative" style={{ background: "rgba(255,255,255,0.1)" }}>
              <div className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow" style={{ left: 2 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
