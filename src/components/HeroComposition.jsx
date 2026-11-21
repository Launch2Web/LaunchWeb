export function HeroComposition() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
        {/* Clean Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#4338CA]" />
            <span className="font-mono text-[11px] font-semibold text-slate-700">
              LaunchWeb Studio
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Production Ready</span>
          </div>
        </div>

        {/* Real Engineering Photo */}
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
            alt="LaunchWeb Solutions software engineering and design workspace"
            className="h-full w-full object-cover"
            loading="eager"
            width="1200"
            height="825"
          />
        </div>

        {/* Sleek Bottom Meta Strip */}
        <div className="flex items-center justify-between px-4 py-3 bg-white text-xs">
          <span className="font-medium text-slate-600">
            High-Performance Web Architecture
          </span>
          <div className="flex items-center gap-1.5">
            <span className="rounded bg-indigo-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-[#4338CA]">
              React
            </span>
            <span className="rounded bg-amber-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-[#EA580C]">
              Spring Boot
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
