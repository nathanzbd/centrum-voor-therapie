import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { conditions } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Klachten & Specialisaties | Centrum voor Therapie",
  description:
    "Persoonlijke begeleiding bij stress, angst, burn-out, depressie, chronische pijn en trauma in Purmerend.",
};

export default function KlachtenPage() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-16 warm-gradient">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-deep">
            Specialisaties
          </span>
          <h1 className="text-5xl md:text-6xl mt-3 leading-tight">
            Klachten waarbij ik je <span className="gold-text">begeleid</span>
          </h1>
          <p className="text-lg text-ink-soft mt-5 max-w-2xl mx-auto">
            Voor uiteenlopende klachten bied ik persoonlijke begeleiding —
            afgestemd op jouw situatie en verhaal.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 space-y-6">
          {conditions.map((c, i) => (
            <article
              key={c.slug}
              className={`grid md:grid-cols-12 gap-6 md:gap-8 items-center bg-cream rounded-3xl p-6 md:p-12 border border-line/60 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-4 max-w-[200px] md:max-w-none mx-auto md:mx-0">
                <div className="aspect-square rounded-2xl overflow-hidden bg-blush-soft border border-line/40">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-8">
                <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">{c.title}</h2>
                <p className="text-ink-soft text-lg leading-relaxed mb-5">
                  {c.summary}
                </p>
                <div className="text-xs uppercase tracking-widest text-gold-deep mb-3">
                  Veelvoorkomende symptomen
                </div>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-ink-soft mb-6">
                  {c.symptoms.map((s, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold-deep hover:gap-3 transition-all"
                >
                  Hierover praten
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
