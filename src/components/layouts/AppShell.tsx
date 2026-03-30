"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layouts/header/Header";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skeleton", href: "/skeleton" },
  { label: "Price Board", href: "/price-board" },
  { label: "Tailwind", href: "/tailwind" },
  { label: "Login", href: "/login" },
];

const HIDE_HEADER_ROUTES = new Set(["/login"]);

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const shouldShowHeader = !HIDE_HEADER_ROUTES.has(pathname);

  return (
    <>
      {shouldShowHeader ? <Header navItems={navItems} /> : null}
      {children}
    </>
  );
}
