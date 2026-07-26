const devices = [
  { name: "Peblee – Living Room", status: "online", battery: 87, signal: 3, fw: "v1.4.2", lastSeen: "Now" },
  { name: "Peblee – Studio", status: "idle", battery: 54, signal: 2, fw: "v1.4.2", lastSeen: "3m ago" },
  { name: "Peblee – Bedroom", status: "offline", battery: 12, signal: 0, fw: "v1.3.9", lastSeen: "2h ago" },
];

const statusColor: Record<string, string> = {
  online: "#22c55e",
  idle: "#f59e0b",
  offline: "#ef4444",
};

function Signal({ bars }: { bars: number }) {
  return (
    <div className="flex items-end gap-0.5 h-3">
      {[1, 2, 3].map((b) => (
        <div
          key={b}
          className="w-1 rounded-sm"
          style={{
            height: `${33 * b}%`,
            background: b <= bars ? "#6F97D7" : "rgba(255,255,255,0.12)",
          }}
        />
      ))}
    </div>
  );
}

export default function DevicePhoneMockup() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-[inherit]" style={{ background: "#0f0f0f" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-white/5" style={{ background: "#141414" }}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[14px] font-semibold text-white">Devices</div>
            <div className="text-[10px] text-white/30">3 connected</div>
          </div>
          <div className="flex gap-1.5">
            {["All", "Online"].map((f, i) => (
              <button
                key={f}
                className="text-[10px] px-2.5 py-1 rounded-full"
                style={{
                  background: i === 0 ? "rgba(111,151,215,0.2)" : "transparent",
                  color: i === 0 ? "#6F97D7" : "rgba(255,255,255,0.35)",
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Device list */}
      <div className="flex-1 px-3 py-3 flex flex-col gap-2 overflow-hidden">
        {devices.map((d) => (
          <div
            key={d.name}
            className="px-3 py-3 rounded-xl border border-white/6 flex items-center gap-3"
            style={{ background: "#141414" }}
          >
            {/* Icon */}
            <div
              className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-[13px]"
              style={{ background: "rgba(111,151,215,0.1)", border: "1px solid rgba(111,151,215,0.2)" }}
            >
              ◉
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[11px] font-medium text-white/85 truncate">{d.name}</span>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: statusColor[d.status] }} />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-14 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${d.battery}%`,
                      background: d.battery < 20 ? "#ef4444" : "#6F97D7",
                    }}
                  />
                </div>
                <span className="text-[9px] text-white/30">{d.battery}%</span>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col items-end gap-1 shrink-0">
              <Signal bars={d.signal} />
              <span className="text-[9px] text-white/25">{d.fw}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
