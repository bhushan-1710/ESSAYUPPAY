import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "citron" | "mint";
  size?: "sm" | "default" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      href,
      isExternal,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium text-sm transition-colors duration-150 rounded-[4px] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[var(--color-accent)] text-white hover:bg-[#9E251E] active:bg-[#851F19]",
      secondary:
        "bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[#EAE0D7] active:bg-[#DFD3C8]",
      ghost:
        "bg-transparent text-[var(--color-text)] hover:bg-[rgba(44,29,39,0.06)] active:bg-[rgba(44,29,39,0.12)]",
      citron:
        "bg-[var(--color-accent-3)] text-[var(--color-text)] hover:bg-[#EAE479] active:bg-[#DFD865] border border-[rgba(44,29,39,0.15)]",
      mint:
        "bg-[var(--color-accent-2)] text-[var(--color-text)] hover:bg-[#7CB398] active:bg-[#6FA68B]",
    };

    const sizeStyles = {
      sm: "h-9 min-h-[44px] sm:min-h-9 px-3.5 text-xs tracking-wide",
      default: "h-11 min-h-[44px] px-5 text-sm",
      lg: "h-13 min-h-[48px] px-7 text-base tracking-tight",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            className={combinedClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
