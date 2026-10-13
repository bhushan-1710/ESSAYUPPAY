import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "mint" | "citron" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2 py-0.5 rounded-[2px] font-mono text-[11px] font-medium uppercase tracking-[0.05em] select-none";

  const variantStyles = {
    default:
      "bg-[rgba(44,29,39,0.08)] text-[var(--color-text)] border border-[rgba(44,29,39,0.12)]",
    accent:
      "bg-[var(--color-accent)] text-white border border-transparent",
    mint:
      "bg-[var(--color-accent-2)] text-[var(--color-text)] border border-[rgba(23,74,58,0.2)]",
    citron:
      "bg-[var(--color-accent-3)] text-[var(--color-text)] border border-[rgba(44,29,39,0.15)]",
    outline:
      "bg-transparent text-[var(--color-text-muted)] border border-[var(--color-border)]",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
