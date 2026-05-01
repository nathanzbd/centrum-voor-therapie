"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { business } from "@/lib/content";

const navItems = [
  { href: "/over", label: "Over Mari-Louise" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/klachten", label: "Klachten" },
  { href: "/praktijk", label: "Praktijk" },
  { href: "/tarieven", label: "Tarieven" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-md border-b border-line/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo/logo-icon.png"
              alt="Centrum voor Therapie"
              width={56}
              height={56}
              className="h-12 w-auto transition-transform group-hover:scale-105"
              priority
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[15px] tracking-[0.18em] font-medium text-gold-deep uppercase">
                Centrum voor
              </span>
              <span className="text-[15px] tracking-[0.18em] font-medium text-gold-deep uppercase">
                Therapie
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-soft hover:text-gold-deep transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${business.phoneRaw}`}
              className="hidden md:inline-flex btn-primary"
            >
              <Phone size={16} />
              Bel nu
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 text-ink"
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4 border-t border-line/50 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-ink-soft hover:text-gold-deep transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phoneRaw}`}
              className="btn-primary mt-2 self-start"
            >
              <Phone size={16} />
              {business.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
