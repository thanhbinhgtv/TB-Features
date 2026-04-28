import * as React from "react";

import { cn } from "@/utils/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "destructive";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-(--button-primary-bg) text-(--text-on-accent) hover:bg-(--button-primary-bg-hover) border border-transparent",
  outline:
    "bg-transparent text-(--text-primary) border border-(--border-default) hover:bg-(--surface-subtle)",
  destructive:
    "bg-(--error) text-white border border-transparent hover:opacity-90",
};

export function Button({ className, variant = "default", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-(--radius-button) px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
