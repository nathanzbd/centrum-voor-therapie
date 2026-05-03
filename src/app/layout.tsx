import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://centrumvoortherapie.nl"),
  title: {
    default: "Centrum voor Therapie | Mari Louise Fongers · Psycholoog Purmerend",
    template: "%s | Centrum voor Therapie",
  },
  description:
    "Praktijk voor integratieve psychotherapie in Purmerend. Persoonlijke begeleiding bij stress, angst, burn-out, depressie, trauma en chronische pijn. Snel een eerste afspraak, zonder verwijsbrief.",
  keywords: [
    "psycholoog Purmerend",
    "therapie Purmerend",
    "psychotherapie",
    "integratieve psychotherapie",
    "Mari Louise Fongers",
    "EMDR Purmerend",
    "burn-out hulp",
    "angst therapie",
  ],
  authors: [{ name: "Mari Louise Fongers" }],
  alternates: { canonical: "https://centrumvoortherapie.nl" },
  openGraph: {
    title: "Centrum voor Therapie · Psycholoog in Purmerend",
    description:
      "Persoonlijke psychotherapie en coaching. Warm, betrokken, vol aandacht. Snel terecht zonder verwijsbrief.",
    type: "website",
    locale: "nl_NL",
    url: "https://centrumvoortherapie.nl",
    siteName: "Centrum voor Therapie",
    images: [
      {
        url: "/images/logo/logo-icon.png",
        width: 366,
        height: 259,
        alt: "Centrum voor Therapie",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Centrum voor Therapie · Psycholoog in Purmerend",
    description:
      "Persoonlijke psychotherapie en coaching. Warm, betrokken, vol aandacht.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
