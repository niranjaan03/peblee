const docs = [
  { name: "Company Handbook.pdf", type: "PDF", chunks: 142, status: "ready", size: "2.4 MB" },
  { name: "Product Roadmap Q3.md", type: "MD", chunks: 38, status: "ready", size: "84 KB" },
  { name: "docs.peblee.ai/api", type: "URL", chunks: 67, status: "indexing", size: "—" },
  { name: "Meeting Notes Jul.txt", type: "TXT", chunks: 11, status: "ready", size: "18 KB" },
];

const typeColor: Record<string, string> = {
  PDF: "#ef4444",
  MD: "#6F97D7",
  URL: "#10a37f",
  TXT: "#f59e0b",
};

export default function KnowledgeMockup() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-[inherit]" style={{ background: "#0f0f0f" }}>
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-white/5 flex items-center justify-between">
        <div>
          <div className="text-[14px] font-semibold text-white mb-0.5">Knowledge Base</div>
          <div className="text-[10px] text-white/30">4 sources · 258 total chunks</div>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium text-white"
          style={{ background: "#6F97D7" }}>
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 1v8M1 5h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          Upload
        </button>
      </div>

      {/* List */}
      <div className="flex-1 px-4 py-3 flex flex-col gap-2 overflow-hidden">
        {docs.map((d) => (
          <div key={d.name} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/6"
            style={{ background: "#141414" }}>
            {/* Type badge */}
            <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-[9px] font-bold"
              style={{ background: typeColor[d.type] + "22", color: typeColor[d.type] }}>
              {d.type}
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium text-white/80 truncate mb-0.5">{d.name}</div>
              <div className="flex items-center gap-2">
                {d.status === "indexing" ? (
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 w-20 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <div className="h-full w-2/3 rounded-full animate-pulse" style={{ background: "#6F97D7" }} />
                    </div>
                    <span className="text-[9px] text-white/30">Indexing…</span>
                  </div>
                ) : (
                  <span className="text-[9px] text-green-400/60">✓ {d.chunks} chunks indexed</span>
                )}
                <span className="text-[9px] text-white/20">{d.size}</span>
              </div>
            </div>
            {/* Delete */}
            <button className="w-6 h-6 flex items-center justify-center text-white/15 hover:text-white/40">
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
