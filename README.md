# ESSYUPPAY.AI

> **Independent Digital Studio**  
> Creative direction: *Playful Precision*, *Digital Cinema*, and *Editorial Discipline*.  
> Single source of truth: [`design (1).md`](./design%20(1).md).

---

## 1. Project Overview

ESSYUPPAY.AI is an art-directed digital agency web application engineered with Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and Lucide icons. It establishes a high-craft editorial presence prioritizing semantic HTML, accessibility (WCAG 2.2 AA), and high-performance tactile aesthetics.

---

## 2. Approved Design Tokens

All styles and colors strictly adhere to the approved tokens:

| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| **Peach Paper** | `#F4E3D7` | Main canvas background (~60% visual field) |
| **Aubergine Ink** | `#2C1D27` | Primary text and structural dark elements |
| **Tomato Signal** | `#B72F27` | Primary action and selective accent |
| **Mineral Mint** | `#8ABFA5` | Secondary graphic counterpoint |
| **Pale Citron** | `#F3ED8B` | Highlight panels and micro accents |
| **Forest Green** | `#174A3A` | Dark alternative surface & focus indicator |
| **Surface White** | `#FFFFFF` | Form controls and high-clarity surfaces |
| **Muted Aubergine** | `#65535A` | Secondary text on Peach Paper |
| **Plum Grey** | `#76636D` | Structural borders |

### Typography Stack
* **Display:** Bricolage Grotesque Variable (`--font-bricolage`)
* **Body / UI:** Instrument Sans (`--font-instrument-sans`)
* **Editorial Contrast:** Instrument Serif (`--font-instrument-serif`)
* **Metadata:** IBM Plex Mono (`--font-ibm-plex-mono`)

---

## 3. Getting Started

### Prerequisites
* Node.js 20+ installed
* npm 10+

### Installation & Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run type check & production build
npm run build

# Run linting
npm run lint
```

---

## 4. Environment Variables

Create a `.env.local` file in the root directory for contact form delivery:

```env
# Resend Email Integration (Planned for Stage 6)
RESEND_API_KEY=re_your_api_key_here
CONTACT_NOTIFICATION_EMAIL=bhushansapkal207@gmail.com
CONTACT_FROM_EMAIL=enquiries@essyuppay.ai
```

> **Security Note:** Never commit `.env.local` or secret keys to version control. The integration remains safely unconfigured until legitimate keys are provided.

---

## 5. Architectural Directory Map

```text
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── globals.css       # Design tokens, custom properties, and base resets
│   ├── layout.tsx        # Root layout, Google fonts, and metadata
│   └── page.tsx          # Homepage entry
├── components/           # Modular components
│   ├── layout/           # Header, Footer, Mobile Navigation Sheet
│   ├── sections/         # Hero, WorkGrid, Capabilities, Approach, ClosingCta
│   └── ui/               # Accessible buttons, inputs, dialogs
├── data/                 # Truthful portfolio items and service definitions
└── lib/                  # Utilities, tokens, and helpers
```
