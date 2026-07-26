export default function SettingsMockup() {
  return (
    <div className="w-full h-full flex overflow-hidden rounded-[inherit]">
      {/* Sidebar */}
      <div className="w-[160px] shrink-0 flex flex-col border-r border-white/5 pt-5 px-3" style={{ background: "#141414" }}>
        <div className="text-[10px] font-semibold text-white/25 uppercase tracking-widest mb-3 px-2">Preferences</div>
        {[
          { label: "General", active: false },
          { label: "AI Providers", active: false },
          { label: "Voice & Wake", active: false },
          { label: "Appearance", active: true },
          { label: "Notifications", active: false },
          { label: "Privacy", active: false },
          { label: "About", active: false },
        ].map((s) => (
          <div key={s.label} className="px-2 py-2 rounded-lg mb-0.5 text-[11px] cursor-pointer"
            style={{
              background: s.active ? "rgba(111,151,215,0.15)" : "transparent",
              color: s.active ? "#6F97D7" : "rgba(255,255,255,0.4)",
              fontWeight: s.active ? 600 : 400,
            }}>
            {s.label}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden" style={{ background: "#0f0f0f" }}>
        <div className="text-[14px] font-semibold text-white">Appearance</div>

        {/* Theme */}
        <div>
          <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Theme</div>
          <div className="flex gap-2">
            {["Dark", "System"].map((t, i) => (
              <div key={t} className="flex-1 py-2.5 rounded-lg border text-center text-[11px] cursor-pointer"
                style={{
                  background: i === 0 ? "rgba(111,151,215,0.12)" : "#171717",
                  borderColor: i === 0 ? "rgba(111,151,215,0.4)" : "rgba(255,255,255,0.08)",
                  color: i === 0 ? "#6F97D7" : "rgba(255,255,255,0.4)",
                }}>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Accent */}
        <div>
          <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Accent Color</div>
          <div className="flex gap-2">
            {["#6F97D7", "#10a37f", "#d97706", "#8b5cf6", "#ef4444"].map((c, i) => (
              <div key={c} className="w-7 h-7 rounded-full cursor-pointer flex items-center justify-center"
                style={{ background: c }}>
                {i === 0 && <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none"/></svg>}
              </div>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="flex flex-col gap-2">
          {[
            { label: "Compact mode", on: false },
            { label: "Reduce motion", on: false },
            { label: "Show token count", on: true },
          ].map((t) => (
            <div key={t.label} className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/6"
              style={{ background: "#141414" }}>
              <span className="text-[11px] text-white/65">{t.label}</span>
              <div className="w-9 h-5 rounded-full relative cursor-pointer"
                style={{ background: t.on ? "#6F97D7" : "rgba(255,255,255,0.1)" }}>
                <div className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all"
                  style={{ left: t.on ? "18px" : "2px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
