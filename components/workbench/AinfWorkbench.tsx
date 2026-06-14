"use client";

import { useEffect, useState } from "react";
import { LoginScreen } from "./LoginScreen";
import { WorkbenchShell } from "./WorkbenchShell";

const STORAGE_KEY = "ainf_auth";

export function AinfWorkbench() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsAuthenticated(Boolean(window.localStorage.getItem(STORAGE_KEY)));
    setIsReady(true);
  }, []);

  function handleLogin(email: string) {
    window.localStorage.setItem(STORAGE_KEY, email.trim().toLowerCase());
    setIsAuthenticated(true);
  }

  function handleLogout() {
    window.localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  }

  if (!isReady) {
    return <div className="min-h-screen bg-[var(--jnj-bg)]" />;
  }

  return isAuthenticated ? (
    <WorkbenchShell onLogout={handleLogout} />
  ) : (
    <LoginScreen onLogin={handleLogin} />
  );
}
