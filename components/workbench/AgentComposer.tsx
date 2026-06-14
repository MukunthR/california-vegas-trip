"use client";

import { FormEvent, PointerEvent, useRef, useState } from "react";
import {
  Maximize2,
  Mic,
  Minimize2,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { agentChips, quickPrompts } from "@/data/workbench";
import { cn } from "@/lib/utils";

export function AgentComposer() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const movedRef = useRef(false);

  function submitQuery(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!query.trim()) return;

    setMessages((current) => [query.trim(), ...current].slice(0, 3));
    setQuery("");
    setIsExpanded(true);
  }

  function handleDragStart(event: PointerEvent<HTMLButtonElement>) {
    if (event.button !== 0 || !shellRef.current) return;

    const rect = shellRef.current.getBoundingClientRect();
    dragRef.current = {
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
    };
    movedRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handleDragMove(event: PointerEvent<HTMLButtonElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId || !shellRef.current) return;

    const rect = shellRef.current.getBoundingClientRect();
    const nextX = Math.min(
      Math.max(event.clientX - drag.offsetX, 12),
      window.innerWidth - rect.width - 12,
    );
    const nextY = Math.min(
      Math.max(event.clientY - drag.offsetY, 12),
      window.innerHeight - rect.height - 12,
    );

    if (
      Math.abs(nextX - rect.left) > 2 ||
      Math.abs(nextY - rect.top) > 2
    ) {
      movedRef.current = true;
    }

    setPosition({ x: nextX, y: nextY });
  }

  function handleDragEnd(event: PointerEvent<HTMLButtonElement>) {
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null;
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function toggleExpanded() {
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    setIsExpanded((current) => !current);
  }

  const shellStyle = position
    ? {
        left: position.x,
        top: position.y,
        transform: "none",
      }
    : undefined;

  return (
    <div
      ref={shellRef}
      className="fixed bottom-5 left-1/2 z-40 w-[min(calc(100vw-2rem),720px)] -translate-x-1/2"
      style={shellStyle}
    >
      {isExpanded ? (
        <div className="mb-3 rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--jnj-brand-primary)] text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  AINF Workbench Agent
                </h2>
                <p className="text-[11px] text-gray-400">
                  Multi-agent orchestration across research, content, IMx, GEO,
                  and review
                </p>
              </div>
            </div>
            <button
              className="grid h-8 w-8 place-items-center rounded-lg text-gray-400 hover:bg-gray-100"
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-label="Collapse agent"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            {agentChips.map((agent) => {
              const Icon = agent.icon;
              return (
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                    agent.color,
                  )}
                  key={agent.label}
                >
                  <Icon className="h-3 w-3" />
                  {agent.label}
                </span>
              );
            })}
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            {quickPrompts.map((prompt) => (
              <button
                className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-left text-xs leading-5 text-gray-600 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-900"
                key={prompt}
                type="button"
                onClick={() => setQuery(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          {messages.length > 0 ? (
            <div className="mt-3 space-y-2">
              {messages.map((message) => (
                <div
                  className="rounded-xl border border-purple-100 bg-purple-50/70 p-3 text-xs leading-5 text-purple-950"
                  key={message}
                >
                  <span className="font-semibold">Queued analysis: </span>
                  {message}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      <form
        className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white/95 p-2 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl"
        onSubmit={submitQuery}
      >
        <button
          className="grid h-10 w-10 shrink-0 cursor-grab touch-none place-items-center rounded-full bg-[var(--jnj-brand-primary)] text-white transition hover:bg-[var(--jnj-brand-primary-dark)] active:cursor-grabbing"
          type="button"
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
          onClick={toggleExpanded}
          aria-label="Drag or toggle agent panel"
          title="Drag to move. Click to expand."
        >
          <Sparkles className="h-4 w-4" />
        </button>

        <input
          className="min-w-0 flex-1 bg-transparent px-1 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ask anything across your workbench..."
        />

        <div className="hidden items-center gap-1 text-gray-400 sm:flex">
          <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-[11px] font-semibold text-gray-500">
            Sequential
          </span>
          <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100" type="button" aria-label="Voice">
            <Mic className="h-3.5 w-3.5" />
          </button>
          <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100" type="button" aria-label="Expand">
            <Maximize2 className="h-3.5 w-3.5" />
          </button>
          <button className="grid h-8 w-8 place-items-center rounded-lg hover:bg-gray-100" type="button" aria-label="Minimize">
            <Minimize2 className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gray-900 text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-200"
          type="submit"
          disabled={!query.trim()}
          aria-label="Send query"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}
