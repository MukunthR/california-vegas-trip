import { ArrowUpRight, MessageSquarePlus, Radio } from "lucide-react";
import { prioritySignals, type Signal } from "@/data/workbench";
import { cn } from "@/lib/utils";

const severityStyles: Record<Signal["severity"], string> = {
  HIGH: "bg-red-50 text-[var(--jnj-brand-primary)]",
  MEDIUM: "bg-amber-50 text-amber-700",
  LOW: "bg-emerald-50 text-emerald-700",
};

export function PrioritySignals() {
  return (
    <section className="rounded-2xl border border-[var(--jnj-border)] bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.05)] md:p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Radio className="h-4 w-4 text-[var(--jnj-brand-primary)]" />
            <h2 className="text-sm font-semibold text-gray-900">
              Priority Signals
            </h2>
          </div>
          <p className="mt-1 text-[11px] text-gray-400">
            Ranked by TRx impact - Updates every 15 min
          </p>
        </div>
        <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-[var(--jnj-brand-primary)]">
          Live
        </span>
      </div>

      <div className="space-y-3">
        {prioritySignals.map((signal) => (
          <SignalCard key={signal.title} signal={signal} />
        ))}
      </div>
    </section>
  );
}

function SignalCard({ signal }: { signal: Signal }) {
  return (
    <article className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-gray-200 hover:shadow-md">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold leading-5 tracking-[-0.01em] text-gray-900">
          {signal.title}
        </h3>
        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold",
            severityStyles[signal.severity],
          )}
        >
          {signal.severity}
        </span>
      </div>
      <p className="text-xs leading-5 text-gray-600">{signal.body}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          className="rounded-lg bg-gray-900 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-black"
          type="button"
        >
          {signal.action}
        </button>
        <button
          className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-[11px] font-semibold text-gray-600 transition hover:bg-gray-50"
          type="button"
        >
          Deep dive
          <ArrowUpRight className="h-3 w-3" />
        </button>
        <button
          className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-[11px] font-semibold text-gray-600 transition hover:bg-gray-50"
          type="button"
        >
          Follow up
          <MessageSquarePlus className="h-3 w-3" />
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-gray-400">
        <span>{signal.source}</span>
        <span>-</span>
        <span>{signal.time}</span>
      </div>
    </article>
  );
}
