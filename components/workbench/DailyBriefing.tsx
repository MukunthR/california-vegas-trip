import {
  Download,
  Mail,
  RefreshCw,
  Volume2,
} from "lucide-react";
import { dailyBriefing, type BriefingItem } from "@/data/workbench";
import { cn } from "@/lib/utils";

const cardStyles: Record<BriefingItem["color"], string> = {
  blue: "border-blue-100 bg-blue-50/70 text-blue-950",
  purple: "border-purple-100 bg-purple-50/80 text-purple-950",
  green: "border-emerald-100 bg-emerald-50/80 text-emerald-950",
  red: "border-red-100 bg-red-50/80 text-red-950",
};

const dotStyles: Record<BriefingItem["color"], string> = {
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  green: "bg-emerald-600",
  red: "bg-[var(--jnj-brand-primary)]",
};

export function DailyBriefing() {
  return (
    <section className="rounded-2xl border border-[var(--jnj-border)] bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] md:p-6">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-normal tracking-[-0.03em] text-gray-900">
            Daily Briefing
          </h1>
          <p className="mt-1 text-xs text-gray-500">
            Generated 7:00 AM - Wednesday, June 10, 2026
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-xl bg-gray-100 p-1">
            <button
              className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-gray-900 shadow-sm"
              type="button"
            >
              Text
            </button>
            <button
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-gray-500"
              type="button"
            >
              <Volume2 className="h-3.5 w-3.5" />
              Audio
            </button>
          </div>
          {[RefreshCw, Mail, Download].map((Icon, index) => (
            <button
              key={index}
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 sm:inline-flex"
              type="button"
              aria-label="Briefing action"
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {dailyBriefing.map((item) => (
          <article
            key={item.title}
            className={cn("rounded-xl border px-4 py-3", cardStyles[item.color])}
          >
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className={cn("h-1.5 w-1.5 rounded-full", dotStyles[item.color])}
                />
                <h2 className="truncate text-sm font-semibold">{item.title}</h2>
              </div>
              <span className="shrink-0 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-600 ring-1 ring-black/5">
                {item.badge}
              </span>
            </div>
            <p className="text-xs leading-5 text-slate-600">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
