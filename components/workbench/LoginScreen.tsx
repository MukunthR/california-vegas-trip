"use client";

import { FormEvent, useState } from "react";

type LoginScreenProps = {
  onLogin: (email: string) => void;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    window.setTimeout(() => {
      onLogin(email);
      setIsSubmitting(false);
    }, 350);
  }

  return (
    <main className="dot-grid flex min-h-screen items-center justify-center bg-[#fbfcff] px-5 py-10">
      <div className="w-full max-w-[370px]">
        <section className="overflow-hidden rounded-[18px] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.10)] ring-1 ring-black/5">
          <div className="h-1 bg-gradient-to-r from-[var(--jnj-brand-primary)] to-[#e53e3e]" />
          <div className="px-10 pb-10 pt-9">
            <div className="mb-8 flex items-center gap-3">
              <div className="text-[22px] font-bold tracking-[-0.08em] text-[var(--jnj-brand-primary)]">
                J&amp;J
              </div>
              <div className="h-6 w-px bg-gray-200" />
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-gray-400">
                  Innovative Medicine
                </p>
                <p className="text-sm font-semibold tracking-[-0.01em] text-gray-900">
                  AINF Workbench
                </p>
              </div>
            </div>

            <h1 className="text-[22px] font-bold tracking-[-0.02em] text-gray-900">
              Welcome back
            </h1>
            <p className="mt-1 text-[13px] text-gray-500">
              Sign in to access your intelligence workspace
            </p>

            <form className="mt-7" onSubmit={handleSubmit}>
              <label className="block text-xs font-semibold text-gray-700">
                Email address
                <input
                  className="mt-1.5 w-full rounded-[10px] border-[1.5px] border-gray-200 bg-[#fafafa] px-3.5 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[var(--jnj-brand-primary)]"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                  placeholder="you@jnj.com"
                  autoComplete="email"
                />
              </label>

              <label className="mt-4 block text-xs font-semibold text-gray-700">
                Password
                <input
                  className="mt-1.5 w-full rounded-[10px] border-[1.5px] border-gray-200 bg-[#fafafa] px-3.5 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[var(--jnj-brand-primary)]"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError("");
                  }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </label>

              {error ? (
                <p className="mt-3 text-xs font-medium text-red-700">{error}</p>
              ) : null}

              <button
                className="mt-6 w-full rounded-xl bg-[var(--jnj-brand-primary)] px-4 py-3 text-sm font-semibold tracking-[0.01em] text-white transition hover:bg-[var(--jnj-brand-primary-dark)] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </div>
        </section>
        <p className="mt-5 text-center text-[11px] text-gray-400">
          Johnson &amp; Johnson Innovative Medicine - AINF Workbench -
          Confidential
        </p>
      </div>
    </main>
  );
}
