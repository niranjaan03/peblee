const tasks = [
  { done: true, label: "Review Q3 product brief" },
  { done: true, label: "Reply to Arjun about timeline" },
  { done: false, label: "Finish the landing page copy" },
  { done: false, label: "Buy groceries" },
];

const reminders = [
  { time: "3:00 PM", label: "Dentist appointment" },
  { time: "5:30 PM", label: "Team standup call" },
];

export default function DailyMockup() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-[inherit]" style={{ background: "#0f0f0f" }}>
      {/* Header */}
      <div className="px-5 pt-5 pb-3 border-b border-white/5">
        <div className="text-[10px] text-white/30 mb-0.5 uppercase tracking-widest">Sunday</div>
        <div className="text-[22px] font-bold text-white leading-none">June 29</div>
      </div>

      <div className="flex-1 px-5 py-4 overflow-hidden flex flex-col gap-4">
        {/* Tasks */}
        <div>
          <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-2">Tasks</div>
          <div className="flex flex-col gap-1.5">
            {tasks.map((t, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full border shrink-0 flex items-center justify-center"
                  style={{
                    borderColor: t.done ? "#6F97D7" : "rgba(255,255,255,0.2)",
                    background: t.done ? "#6F97D7" : "transparent",
                  }}>
                  {t.done && <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4L3.2 5.7L6.5 2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>}
                </div>
                <span className="text-[12px]" style={{
                  color: t.done ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.75)",
                  textDecoration: t.done ? "line-through" : "none",
                }}>
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reminders */}
        <div>
          <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-2">Reminders</div>
          <div className="flex flex-col gap-1.5">
            {reminders.map((r, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg" style={{ background: "#171717" }}>
                <div className="text-[10px] font-semibold text-white/40 w-14 shrink-0">{r.time}</div>
                <div className="text-[11px] text-white/70">{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI prompt input */}
        <div className="mt-auto flex items-center gap-2 px-3 py-2 rounded-lg border border-white/8" style={{ background: "#141414" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6F97D7" strokeWidth="2">
            <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          </svg>
          <span className="text-[11px] text-white/20">Add a task or reminder by voice…</span>
        </div>
      </div>
    </div>
  );
}
