import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Centrum voor Therapie | Mari-Louise Fongers — Psycholoog Purmerend",
  description:
    "Praktijk voor integratieve psychotherapie in Purmerend. Persoonlijke begeleiding bij stress, angst, burn-out, depressie, trauma en chronische pijn. Snel een eerste afspraak, zonder verwijsbrief.",
  keywords: [
    "psycholoog Purmerend",
    "therapie Purmerend",
    "psychotherapie",
    "integratieve psychotherapie",
    "Mari-Louise Fongers",
    "EMDR Purmerend",
    "burn-out hulp",
    "angst therapie",
  ],
  authors: [{ name: "Mari-Louise Fongers" }],
  openGraph: {
    title: "Centrum voor Therapie — Psycholoog in Purmerend",
    description:
      "Persoonlijke psychotherapie en coaching. Warm, betrokken, vol aandacht. Snel terecht zonder verwijsbrief.",
    type: "website",
    locale: "nl_NL",
    url: "https://centrumvoortherapie.nl",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
