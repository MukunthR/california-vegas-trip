import {
  BarChart3,
  FileText,
  Megaphone,
  Plus,
  Search,
  Workflow,
} from "lucide-react";
import { workColumns, type WorkItem } from "@/data/workbench";

const itemIcons = {
  chart: BarChart3,
  campaign: Megaphone,
  doc: FileText,
  research: Search,
};

export function WorkTracker() {
  const itemCount = workColumns.reduce(
    (total, column) => total + column.items.length,
    0,
  );
  const blockedCount = workColumns.reduce(
    (total, column) =>
      total +
      column.items.reduce((columnTotal, item) => columnTotal + (item.blocked ?? 0), 0),
    0,
  );
  const inProgress = workColumns.find((column) => column.title === "In Progress")
    ?.items.length;

  return (
    <section className="rounded-2xl border border-[var(--jnj-border)] bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.05)] md:p-5">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Workflow className="h-4 w-4 text-[var(--jnj-brand-primary)]" />
            <h2 className="text-sm font-semibold text-gray-900">Work Tracker</h2>
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-400">
              {itemCount} items
            </span>
            {blockedCount > 0 ? (
              <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-[var(--jnj-brand-primary)]">
                ! {blockedCount} blocked
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-[11px] text-gray-400">
            Centralized marketing work tracker - {inProgress} in progress - Add
            any item manually
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              className="rounded-md bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-900 shadow-sm"
              type="button"
            >
              Board
            </button>
            <button
              className="rounded-md px-3 py-1.5 text-[11px] font-semibold text-gray-500"
              type="button"
            >
              List
            </button>
          </div>
          <button
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--jnj-brand-primary)] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[var(--jnj-brand-primary-dark)]"
            type="button"
          >
            <Plus className="h-3.5 w-3.5" />
            Add item
          </button>
        </div>
      </div>

      <div className="app-scrollbar flex gap-3 overflow-x-auto pb-1">
        {workColumns.map((column) => (
          <div
            className="min-w-[210px] flex-1 rounded-xl border border-gray-100 bg-gray-50/70 p-3"
            key={column.title}
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                {column.title}
              </h3>
              <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-gray-500 ring-1 ring-gray-200">
                {column.items.length}
              </span>
            </div>

            <div className="space-y-2.5">
              {column.items.map((item) => (
                <WorkCard item={item} key={item.title} />
              ))}
              <button
                className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-gray-200 bg-white/70 px-3 py-2 text-[11px] font-semibold text-gray-400 transition hover:border-gray-300 hover:text-gray-600"
                type="button"
              >
                <Plus className="h-3 w-3" />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const Icon = itemIcons[item.icon as keyof typeof itemIcons] ?? FileText;

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="mb-2 flex gap-2">
        <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-red-50 text-[var(--jnj-brand-primary)]">
          <Icon className="h-3.5 w-3.5" />
        </div>
        <h4 className="line-clamp-2 text-xs font-semibold leading-4 text-gray-900">
          {item.title}
        </h4>
      </div>

      <div className="mb-3 flex flex-wrap gap-1">
        {item.tags.map((tag) => (
          <span
            className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2 text-[11px] text-gray-500">
        <span className="truncate font-medium">{item.owner}</span>
        <div className="flex shrink-0 items-center gap-1.5">
          {item.blocked ? (
            <span className="rounded-full bg-red-50 px-1.5 py-0.5 font-bold text-[var(--jnj-brand-primary)]">
              !{item.blocked}
            </span>
          ) : null}
          <span>{item.due}</span>
        </div>
      </div>
    </article>
  );
}
