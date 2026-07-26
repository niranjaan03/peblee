export default function ConversationPhoneMockup() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-[inherit]" style={{ background: "#0f0f0f" }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5" style={{ background: "#141414" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <div className="flex-1">
          <div className="text-[12px] font-semibold text-white/85">Morning catchup</div>
          <div className="text-[10px] text-white/30">claude-sonnet-4-6</div>
        </div>
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
          style={{ background: "linear-gradient(135deg,#6F97D7,#5B84C9)" }}>P</div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-4 flex flex-col gap-3 overflow-hidden">
        <div className="flex justify-end">
          <div className="max-w-[75%] px-3 py-2 rounded-2xl rounded-tr-sm text-[11px] text-white leading-relaxed"
            style={{ background: "#6F97D7" }}>
            What did we talk about yesterday?
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold text-white"
            style={{ background: "linear-gradient(135deg,#6F97D7,#5B84C9)" }}>P</div>
          <div className="max-w-[78%] px-3 py-2 rounded-2xl rounded-tl-sm text-[11px] leading-relaxed"
            style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.82)" }}>
            We covered your project deadline, the team dinner, and checking flight prices for Seattle.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[72%] px-3 py-2 rounded-2xl rounded-tr-sm text-[11px] text-white"
            style={{ background: "#6F97D7" }}>
            Did I decide on the flight?
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold text-white"
            style={{ background: "linear-gradient(135deg,#6F97D7,#5B84C9)" }}>P</div>
          <div className="px-3 py-2 rounded-2xl rounded-tl-sm text-[11px] leading-relaxed flex items-center gap-2"
            style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.82)" }}>
            <span>Not yet. Want me to</span>
            <span className="flex gap-0.5">
              {[0, 1, 2].map(i => (
                <span key={i} className="w-1.5 h-1.5 rounded-full animate-bounce"
                  style={{ background: "#6F97D7", animationDelay: `${i * 0.15}s` }} />
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10" style={{ background: "#1a1a1a" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6F97D7" strokeWidth="2">
            <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          </svg>
          <span className="flex-1 text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>Ask anything…</span>
          <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "#6F97D7" }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 5L2 2V4.5L6 5L2 5.5V8Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
