import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  Instrument_Serif,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { JsonLd } from "@/components/seo/json-ld";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F4E3D7",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://essyuppay.ai"),
  title: {
    default: "ESSYUPPAY.AI — Independent Digital Design & Engineering Studio",
    template: "%s | ESSYUPPAY.AI",
  },
  description:
    "We make digital work feel impossible to ignore. Bespoke websites, digital experiences and practical AI solutions for ambitious businesses.",
  keywords: [
    "digital agency",
    "web design",
    "frontend engineering",
    "SEO visibility",
    "creative development",
    "tactile editorial design",
  ],
  authors: [{ name: "ESSYUPPAY.AI" }],
  creator: "ESSYUPPAY.AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://essyuppay.ai",
    siteName: "ESSYUPPAY.AI",
    title: "ESSYUPPAY.AI — Independent Digital Design & Engineering Studio",
    description:
      "We make digital work feel impossible to ignore. Bespoke websites, digital experiences and practical AI solutions for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrumentSans.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-sans antialiased selection:bg-[var(--color-accent)] selection:text-white">
        <SmoothScrollProvider>
          <JsonLd />
          <SkipLink />
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
