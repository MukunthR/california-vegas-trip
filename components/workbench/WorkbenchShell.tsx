"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  Circle,
  Settings,
  UserRound,
} from "lucide-react";
import { brands, modules, personas } from "@/data/workbench";
import { cn } from "@/lib/utils";
import { AgentComposer } from "./AgentComposer";
import { BrandContextBar } from "./BrandContextBar";
import { DailyBriefing } from "./DailyBriefing";
import { InsightsCanvas } from "./InsightsCanvas";
import { PrioritySignals } from "./PrioritySignals";
import { WorkTracker } from "./WorkTracker";

type WorkbenchShellProps = {
  onLogout: () => void;
};

export function WorkbenchShell({ onLogout }: WorkbenchShellProps) {
  const [activeModule, setActiveModule] = useState("home");
  const [brand, setBrand] = useState(brands[0]);
  const [persona, setPersona] = useState(personas[0]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--jnj-bg)]">
      <header className="sticky top-0 z-30 flex-shrink-0 border-b border-[var(--jnj-border)] bg-white/95 shadow-[0_1px_2px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        <div className="flex h-14 items-center gap-4 px-4 md:px-7">
          <div className="flex shrink-0 items-center gap-3">
            <div className="text-[22px] font-bold tracking-[-0.08em] text-[var(--jnj-brand-primary)]">
              J&amp;J
            </div>
            <div className="h-5 w-px bg-black/10" />
            <div>
              <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-gray-400">
                Innovative Medicine
              </div>
              <div className="text-sm font-semibold tracking-[-0.01em] text-gray-900">
                AINF Workbench
              </div>
            </div>
          </div>

          <nav className="app-scrollbar hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto lg:flex">
            {modules.map((module) => {
              const Icon = module.icon;
              const isActive = module.id === activeModule;

              return (
                <button
                  key={module.id}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition",
                    isActive
                      ? "bg-gray-100 text-gray-900 shadow-sm"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
                  )}
                  type="button"
                  onClick={() => setActiveModule(module.id)}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {module.label}
                </button>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button
              className="hidden h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:bg-gray-50 md:inline-flex"
              type="button"
              aria-label="Settings"
            >
              <Settings className="h-3.5 w-3.5" />
            </button>

            <label className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm sm:flex">
              <Circle className="h-2.5 w-2.5 fill-purple-600 text-purple-600" />
              <select
                className="max-w-28 appearance-none bg-transparent pr-1 outline-none"
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
              >
                {brands.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <ChevronDown className="h-3 w-3 text-gray-400" />
            </label>

            <label className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm sm:flex">
              <UserRound className="h-3.5 w-3.5 text-gray-400" />
              <select
                className="appearance-none bg-transparent pr-1 outline-none"
                value={persona.label}
                onChange={(event) => {
                  const nextPersona =
                    personas.find((item) => item.label === event.target.value) ??
                    personas[0];
                  setPersona(nextPersona);
                }}
              >
                {personas.map((item) => (
                  <option key={item.label}>{item.label}</option>
                ))}
              </select>
              <ChevronDown className="h-3 w-3 text-gray-400" />
            </label>

            <button
              className="relative hidden h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 md:inline-flex"
              type="button"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-1.5 h-1.5 w-1.5 rounded-full bg-[var(--jnj-brand-primary)]" />
            </button>

            <div className="hidden items-center gap-1.5 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm md:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.14)]" />
              Online
            </div>

            <button
              className="flex items-center gap-2 rounded-lg px-2 py-1 text-left transition hover:bg-gray-100"
              type="button"
              onClick={onLogout}
              title="Sign out"
            >
              <div className="hidden md:block">
                <p className="text-xs font-semibold text-gray-900">
                  Mukunth Rajendran
                </p>
                <p className="text-[11px] font-semibold text-blue-600">
                  {persona.short}
                </p>
              </div>
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-gray-200 to-gray-100 text-sm font-bold text-gray-700 ring-2 ring-white">
                MR
              </div>
              <ChevronDown className="hidden h-3.5 w-3.5 text-gray-400 md:block" />
            </button>
          </div>
        </div>

        <div className="app-scrollbar flex gap-1 overflow-x-auto border-t border-gray-100 px-3 py-2 lg:hidden">
          {modules.map((module) => (
            <button
              key={module.id}
              className={cn(
                "whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition",
                activeModule === module.id
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500",
              )}
              type="button"
              onClick={() => setActiveModule(module.id)}
            >
              {module.label}
            </button>
          ))}
        </div>
      </header>

      <main className="relative flex-1 px-4 pb-32 pt-7 md:px-7 lg:px-9">
        <div className="mx-auto max-w-[1220px] space-y-5">
          <DailyBriefing />
          <BrandContextBar />
          <InsightsCanvas />
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)]">
            <WorkTracker />
            <PrioritySignals />
          </div>
        </div>
        <AgentComposer />
      </main>
    </div>
  );
}
