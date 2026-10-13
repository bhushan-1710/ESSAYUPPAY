/**
 * ESSYUPPAY.AI — Approved Design System Tokens
 * Source of truth: design.md Sections 3.1, 3.2, 3.3, 3.5
 */

export const COLOR_TOKENS = {
  bg: "#F4E3D7", // Peach Paper
  text: "#2C1D27", // Aubergine Ink
  accent: "#B72F27", // Tomato Signal
  accent2: "#8ABFA5", // Mineral Mint
  accent3: "#F3ED8B", // Pale Citron
  inkDeep: "#174A3A", // Forest Green
  surface: "#FFFFFF", // White
  textMuted: "#65535A", // Muted Aubergine
  border: "#76636D", // Plum Grey
  success: "#236B45", // Success Green
  error: "#B42318", // Error Red
  focus: "#174A3A", // Forest Green
} as const;

export const MOTION_TOKENS = {
  fast: "160ms",
  ui: "240ms",
  reveal: "600ms",
  scene: "900ms",
  cinematic: "1200ms",
  easeStandard: "cubic-bezier(0.2, 0, 0, 1)",
  easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeInOut: "cubic-bezier(0.76, 0, 0.24, 1)",
} as const;

export const SPACING_TOKENS = {
  margins: {
    mobile: 20,
    tablet: 32,
    desktop: 48,
    wide: 64,
  },
  gutters: {
    mobile: 12,
    tablet: 20,
    desktop: 24,
  },
  maxWidth: 1440,
} as const;
