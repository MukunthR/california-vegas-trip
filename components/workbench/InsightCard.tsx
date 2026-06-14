import { ChevronDown } from "lucide-react";
import type { Insight } from "@/data/workbench";
import { cn } from "@/lib/utils";

type InsightCardProps = {
  insight: Insight;
};

export function InsightCard({ insight }: InsightCardProps) {
  const isAttention = insight.status === "Needs attention";

  return (
    <article
      className={cn(
        "flex min-h-[440px] w-[290px] shrink-0 flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_2px_10px_rgba(15,23,42,0.06)]",
        isAttention ? "border-red-200" : "border-gray-200",
      )}
    >
      <div
        className="border-b px-4 pt-4"
        style={{
          background: `${insight.chartColor}0d`,
          borderColor: `${insight.chartColor}26`,
        }}
      >
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          {insight.label}
        </div>
        <MiniChart insight={insight} />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span
            className={cn(
              "rounded-full px-2.5 py-1 text-[11px] font-bold",
              isAttention
                ? "bg-red-50 text-red-600"
                : insight.status === "Opportunity"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-sky-50 text-sky-600",
            )}
          >
            {insight.status}
          </span>
          <div className="text-right">
            <div className="text-sm font-bold text-gray-950">{insight.metric}</div>
            <div
              className={cn(
                "text-[11px] font-bold",
                insight.deltaPositive ? "text-emerald-600" : "text-red-600",
              )}
            >
              {insight.deltaPositive ? "+" : ""}
              {insight.delta}
            </div>
          </div>
        </div>

        <h3 className="line-clamp-3 text-sm font-bold leading-snug tracking-[-0.01em] text-gray-950">
          {insight.title}
        </h3>
        <p className="mt-3 line-clamp-6 text-xs leading-5 text-gray-600">
          {insight.body}
        </p>

        <button
          className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700"
          type="button"
        >
          Why this matters
          <ChevronDown className="h-3 w-3" />
        </button>

        <button
          className={cn(
            "mt-auto rounded-lg px-4 py-2.5 text-xs font-bold text-white transition",
            isAttention
              ? "bg-[var(--jnj-brand-primary)] hover:bg-[var(--jnj-brand-primary-dark)]"
              : insight.status === "Opportunity"
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-sky-700 hover:bg-sky-800",
          )}
          type="button"
        >
          {insight.action}
        </button>
      </div>
    </article>
  );
}

function MiniChart({ insight }: InsightCardProps) {
  const max = Math.max(...insight.chart.map((point) => point.value), 100);

  if (insight.kind === "bar") {
    return (
      <div className="h-32">
        <div className="flex h-24 items-end gap-4 border-b border-dashed border-gray-200 pb-1">
          {insight.chart.map((point, index) => (
            <div className="flex flex-1 flex-col items-center gap-1" key={point.label}>
              <div
                className="w-full max-w-7 rounded-t-sm"
                style={{
                  height: `${Math.max((point.value / max) * 84, 16)}px`,
                  background:
                    index === insight.chart.length - 1
                      ? insight.chartColor
                      : `${insight.chartColor}66`,
                }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 grid gap-1" style={{ gridTemplateColumns: `repeat(${insight.chart.length}, minmax(0, 1fr))` }}>
          {insight.chart.map((point) => (
            <span
              className="truncate text-center text-[9px] font-medium text-gray-400"
              key={point.label}
            >
              {point.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const width = 240;
  const height = 96;
  const coordinates = insight.chart.map((point, index) => {
    const x = (index / (insight.chart.length - 1)) * width;
    const y = height - (point.value / max) * (height - 18) - 8;
    return `${x},${y}`;
  });

  return (
    <div className="h-32">
      <svg
        className="h-24 w-full overflow-visible border-b border-dashed border-gray-200"
        preserveAspectRatio="none"
        viewBox={`0 0 ${width} ${height}`}
        aria-hidden="true"
      >
        {[25, 50, 75].map((tick) => (
          <line
            key={tick}
            stroke="#e5e7eb"
            strokeDasharray="3 4"
            strokeWidth="1"
            x1="0"
            x2={width}
            y1={(tick / 100) * height}
            y2={(tick / 100) * height}
          />
        ))}
        <polygon
          fill={insight.chartColor}
          opacity="0.12"
          points={`0,${height} ${coordinates.join(" ")} ${width},${height}`}
        />
        <polyline
          fill="none"
          points={coordinates.join(" ")}
          stroke={insight.chartColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        {coordinates.map((coordinate) => {
          const [x, y] = coordinate.split(",");
          return (
            <circle
              cx={x}
              cy={y}
              fill="white"
              key={coordinate}
              r="3.5"
              stroke={insight.chartColor}
              strokeWidth="2"
            />
          );
        })}
      </svg>
      <div className="mt-2 grid gap-1" style={{ gridTemplateColumns: `repeat(${insight.chart.length}, minmax(0, 1fr))` }}>
        {insight.chart.map((point) => (
          <span
            className="truncate text-center text-[9px] font-medium text-gray-400"
            key={point.label}
          >
            {point.label}
          </span>
        ))}
      </div>
    </div>
  );
}
