"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { BookOpen, ChevronDown, Edit3 } from "lucide-react";
import { brandContext, brandContextDetail } from "@/data/workbench";
import { cn } from "@/lib/utils";

export function BrandContextBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="rounded-2xl border border-[var(--jnj-border)] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
      <div className="flex flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
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
            {isExpanded ? (
              <p className="mt-1 text-[11px] text-gray-400">
                Set brand priorities, metrics, and strategic context to ground AI
                recommendations
              </p>
            ) : (
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {brandContext.slice(0, 2).map((item) => (
                  <span
                    key={item}
                    className="max-w-[240px] truncate rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-gray-400 transition hover:text-gray-600 md:self-center"
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
        >
          Brand strategy context
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform",
              isExpanded && "rotate-180",
            )}
          />
        </button>
      </div>

      {isExpanded ? <ExpandedBrandContext /> : null}
    </section>
  );
}

function ExpandedBrandContext() {
  return (
    <div className="border-t border-gray-100 px-5 pb-5 pt-4">
      <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
        <ContextBlock title="Strategic Priorities">
          <ul className="space-y-2">
            {brandContextDetail.strategicPriorities.map((priority) => (
              <li
                className="flex gap-2 text-xs leading-5 text-gray-700"
                key={priority}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {priority}
              </li>
            ))}
          </ul>
        </ContextBlock>

        <ContextBlock title="Preferred Metrics">
          <div className="flex flex-wrap gap-2">
            {brandContextDetail.preferredMetrics.map((metric, index) => (
              <span
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                  index < 5
                    ? "border-blue-200 bg-blue-50 text-blue-600"
                    : "border-gray-200 bg-white text-gray-500",
                )}
                key={metric}
              >
                {metric}
              </span>
            ))}
          </div>
        </ContextBlock>

        <ContextBlock title="Brand Aspiration">
          <p className="text-xs italic leading-5 text-gray-700">
            {brandContextDetail.brandAspiration}
          </p>
        </ContextBlock>

        <ContextBlock title="Business Context">
          <p className="text-xs leading-5 text-gray-700">
            {brandContextDetail.businessContext}
          </p>
        </ContextBlock>
      </div>

      <div className="mt-5 border-t border-gray-100 pt-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-gray-400">
              Personal Context
            </h3>
            <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-bold text-purple-600">
              AI-learned - 23 interactions
            </span>
          </div>
          <span className="hidden text-[10px] text-gray-300 sm:inline">
            Feeds into organisational knowledge
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {brandContextDetail.personalContext.map((group) => (
            <div
              className="rounded-xl border border-purple-100 bg-purple-50/60 p-3"
              key={group.title}
            >
              <h4 className="mb-2 text-[10px] font-bold uppercase tracking-wide text-purple-600">
                {group.title}
              </h4>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li className="flex gap-1.5 text-[11px] text-gray-700" key={item}>
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          {brandContextDetail.groundingFlow.map((step, index) => (
            <div className="contents" key={step.title}>
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5">
                <p className="text-[11px] font-semibold text-gray-700">
                  {step.title}
                </p>
                <p className="mt-0.5 text-[10px] text-gray-400">{step.body}</p>
              </div>
              {index < brandContextDetail.groundingFlow.length - 1 ? (
                <span className="hidden text-center text-gray-300 md:block">→</span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-gray-400">
            Personal context personalises your AI experience. Aggregated signals
            build J&amp;J&apos;s organisational brand knowledge over time.
          </p>
          <button
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-[11px] font-semibold text-blue-600 transition hover:bg-blue-100"
            type="button"
          >
            <Edit3 className="h-3 w-3" />
            Edit Context
          </button>
        </div>
      </div>
    </div>
  );
}

function ContextBlock({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div>
      <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wide text-gray-400">
        {title}
      </h3>
      {children}
    </div>
  );
}
