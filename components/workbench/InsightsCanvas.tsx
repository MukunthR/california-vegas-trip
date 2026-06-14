import { RefreshCw, Share2, Sparkles } from "lucide-react";
import { insightCards } from "@/data/workbench";
import { InsightCard } from "./InsightCard";

export function InsightsCanvas() {
  return (
    <section className="rounded-2xl border border-purple-100 bg-purple-50/35 p-4 shadow-[0_1px_4px_rgba(88,28,135,0.05)] md:p-5">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-lg bg-white text-purple-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-semibold text-purple-950">
              AI Insights Canvas
            </h2>
            <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[11px] font-semibold text-purple-700">
              Today 6:00 AM
            </span>
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-600">
              Grounded in your context
            </span>
            <span className="rounded-full bg-fuchsia-50 px-2 py-0.5 text-[11px] font-semibold text-fuchsia-600">
              Generative UI
            </span>
          </div>
          <p className="mt-1.5 text-xs font-medium text-purple-600">
            Dynamic charts &amp; visualizations populated in real-time -
            pre-filtered to decisions that need your attention - 7 sources
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-3 py-1.5 text-xs font-semibold text-purple-600 transition hover:bg-purple-50"
            type="button"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Regenerate
          </button>
          <button
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-3 py-1.5 text-xs font-semibold text-purple-600 transition hover:bg-purple-50"
            type="button"
          >
            <Share2 className="h-3.5 w-3.5" />
            Share
          </button>
        </div>
      </div>

      <div className="app-scrollbar flex gap-4 overflow-x-auto pb-1">
        {insightCards.map((insight) => (
          <InsightCard insight={insight} key={insight.title} />
        ))}
      </div>
    </section>
  );
}
