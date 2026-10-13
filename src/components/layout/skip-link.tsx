import * as React from "react";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[var(--color-ink-deep)] focus:text-white focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:rounded-[4px] focus:shadow-lg focus:outline-2 focus:outline-[var(--color-accent-3)] focus:outline-offset-2"
    >
      Skip to main content
    </a>
  );
}
