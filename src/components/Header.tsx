"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { business, conditions } from "@/lib/content";

const mainNav = [
  { href: "/over", label: "Over mij" },
  { href: "/praktijk", label: "Praktijkruimte" },
  { href: "/tarieven", label: "Tarieven" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line/50">
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
            {/* Klachten dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm text-ink-soft hover:text-gold-deep transition-colors"
                aria-haspopup="true"
              >
                Klachten
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-2xl border border-line/60 shadow-xl p-2 min-w-[260px]">
                  <Link
                    href="/werkwijze"
                    className="block px-4 py-2.5 text-sm text-ink hover:bg-cream rounded-xl transition-colors border-b border-line/40 mb-1"
                  >
                    <span className="text-xs uppercase tracking-widest text-gold-deep block mb-0.5">
                      Werkwijze
                    </span>
                    Integratieve psychotherapie
                  </Link>
                  {conditions.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/klachten/${c.slug}`}
                      className="block px-4 py-2 text-sm text-ink-soft hover:text-gold-deep hover:bg-cream rounded-xl transition-colors"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {mainNav.map((item) => (
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
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 text-ink"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-6 flex flex-col gap-1 border-t border-line/50 pt-4">
            <button
              onClick={() => setMobileDropdown((v) => !v)}
              className="flex items-center justify-between text-base text-ink py-2"
            >
              <span>Klachten</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${mobileDropdown ? "rotate-180" : ""}`}
              />
            </button>
            {mobileDropdown && (
              <div className="pl-4 flex flex-col gap-2 pb-2 border-l border-line/50 ml-2">
                <Link
                  href="/werkwijze"
                  className="text-sm text-gold-deep py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Werkwijze
                </Link>
                {conditions.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/klachten/${c.slug}`}
                    className="text-sm text-ink-soft py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            )}
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-ink-soft hover:text-gold-deep transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phoneRaw}`}
              className="btn-primary mt-3 self-start"
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
