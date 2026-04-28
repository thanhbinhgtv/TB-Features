"use client";

import { Toaster } from "sonner";

import { useTheme } from "@/contexts/ThemeContext";

export function AppToaster() {
  const { theme } = useTheme();

  return (
    <Toaster
      position="top-right"
      theme={theme}
      richColors
      toastOptions={{
        style: {
          borderRadius: "12px",
          border: "1px solid var(--border-default)",
          background: "var(--surface-card)",
          color: "var(--text-primary)",
        },
      }}
    />
  );
}
