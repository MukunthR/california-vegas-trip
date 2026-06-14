import { BookOpen, ChevronDown } from "lucide-react";
import { brandContext } from "@/data/workbench";

export function BrandContextBar() {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-[var(--jnj-border)] bg-white px-5 py-4 shadow-[0_2px_8px_rgba(15,23,42,0.04)] md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 items-start gap-3">
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600">
          <BookOpen className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-sm font-semibold text-gray-900">
              Brand &amp; Marketing Context
            </h2>
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-600">
              Grounding AI
            </span>
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {brandContext.map((item) => (
              <span
                key={item}
                className="max-w-[240px] truncate rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-gray-400 transition hover:text-gray-600 md:self-center"
        type="button"
      >
        Brand strategy context
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
    </section>
  );
}
