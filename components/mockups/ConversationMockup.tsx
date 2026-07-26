export default function ConversationMockup() {
  return (
    <div className="w-full h-full flex overflow-hidden rounded-[inherit]">
      {/* Sidebar */}
      <div className="w-[220px] shrink-0 flex flex-col border-r border-white/5" style={{ background: "#141414" }}>
        <div className="px-4 pt-4 pb-3">
          <div className="h-7 w-7 rounded-lg mb-4" style={{ background: "#6F97D7" }} />
          <div className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-2 px-1">Conversations</div>
        </div>
        {[
          { label: "Morning catchup", time: "9:41 AM", active: true },
          { label: "Project planning", time: "Yesterday" },
          { label: "Recipe ideas", time: "Mon" },
          { label: "Weekend trip", time: "Sun" },
        ].map((c, i) => (
          <div
            key={i}
            className="mx-2 mb-1 px-3 py-2.5 rounded-lg cursor-pointer"
            style={{ background: c.active ? "rgba(111,151,215,0.15)" : "transparent" }}
          >
            <div className="text-[12px] font-medium" style={{ color: c.active ? "#6F97D7" : "rgba(255,255,255,0.7)" }}>
              {c.label}
            </div>
            <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>{c.time}</div>
          </div>
        ))}
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col" style={{ background: "#0f0f0f" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
          <span className="text-[13px] font-semibold text-white/80">Morning catchup</span>
          <div className="flex items-center gap-1.5">
            <div className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(111,151,215,0.15)", color: "#6F97D7" }}>
              claude-sonnet-4-6
            </div>
            <div className="text-[10px] text-white/20">128 tokens</div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-5 py-4 flex flex-col gap-4 overflow-hidden">
          <div className="flex justify-end">
            <div className="max-w-[65%] px-4 py-2.5 rounded-2xl rounded-tr-sm text-[12px] text-white leading-relaxed"
              style={{ background: "#6F97D7" }}>
              What did we talk about yesterday?
            </div>
          </div>
          <div className="flex gap-2.5">
            <div className="w-6 h-6 shrink-0 rounded-full mt-1 flex items-center justify-center text-[10px] font-bold text-white"
              style={{ background: "linear-gradient(135deg,#6F97D7,#5B84C9)" }}>P</div>
            <div className="max-w-[70%] px-4 py-2.5 rounded-2xl rounded-tl-sm text-[12px] leading-relaxed"
              style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.85)" }}>
              We covered your project deadline on Friday, the team dinner logistics, and you wanted to check the flight prices for Seattle.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[65%] px-4 py-2.5 rounded-2xl rounded-tr-sm text-[12px] text-white"
              style={{ background: "#6F97D7" }}>
              Right — did I decide on the flight?
            </div>
          </div>
          <div className="flex gap-2.5">
            <div className="w-6 h-6 shrink-0 rounded-full mt-1 flex items-center justify-center text-[10px] font-bold text-white"
              style={{ background: "linear-gradient(135deg,#6F97D7,#5B84C9)" }}>P</div>
            <div className="px-4 py-2.5 rounded-2xl rounded-tl-sm text-[12px] leading-relaxed flex items-center gap-2"
              style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.85)" }}>
              <span>You hadn&apos;t decided yet. Want me to</span>
              <span className="flex gap-0.5">
                {[0,1,2].map(i => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "#6F97D7", animationDelay: `${i*0.15}s` }} />
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="px-5 pb-4">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10" style={{ background: "#1a1a1a" }}>
            <span className="text-[12px] flex-1" style={{ color: "rgba(255,255,255,0.2)" }}>Ask anything…</span>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "#6F97D7" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 8L8 5L2 2V4.5L6 5L2 5.5V8Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
