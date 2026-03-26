"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layouts/header/Header";

const navItems = [
  { label: "Trang chu", href: "/" },
  { label: "San pham", href: "/products" },
  { label: "Gio hang", href: "/cart" },
  { label: "Dang nhap", href: "/login" },
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
