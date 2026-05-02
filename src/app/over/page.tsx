import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { aboutBio, certifications } from "@/lib/content";
import { ArrowRight, Award, Calendar, Heart, Sparkles, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Over Mari Louise Fongers | Centrum voor Therapie",
  description:
    "ECP gecertificeerd integratief psychotherapeut met bijna 20 jaar ervaring. Warm, betrokken, vol aandacht.",
};

export default function OverPage() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-20 warm-gradient">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Even voorstellen
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl mt-3 leading-tight">
                Mari Louise<br />
                <span className="gold-text">Fongers</span>
              </h1>
              <p className="text-lg text-ink-soft mt-5 leading-relaxed max-w-xl">
                {aboutBio.short}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] max-w-[280px] mx-auto">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blush via-blush-soft to-gold-light/60 blur-2xl opacity-70" />
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-[3px] border-white shadow-xl">
                  <Image
                    src="/images/profile/mari-louise-new.png"
                    alt="Mari Louise Fongers"
                    fill
                    sizes="(max-width: 1024px) 60vw, 280px"
                    className="object-cover"
                    style={{ filter: "saturate(1.05) brightness(1.02)" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warm personal statement card */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[400px] h-[400px] rounded-full bg-blush/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-gold-light/25 blur-3xl" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 lg:px-12">
            <div className="bg-white rounded-[2rem] p-10 md:p-14 border border-line/60 shadow-xl text-center relative overflow-hidden">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blush via-cream to-gold-light flex items-center justify-center shadow-lg">
                <Heart size={20} className="text-gold-deep fill-blush" />
              </div>
              <Quote size={32} className="text-gold-light mx-auto mb-5 mt-3 opacity-60" />
              <h2 className="text-2xl md:text-3xl text-gold-deep font-display mb-6">
                Waar kan ik jou bij helpen?
              </h2>
              <div className="space-y-4 text-ink-soft text-lg leading-[1.85] max-w-2xl mx-auto">
                <p>
                  Ik lever maatwerk, speciaal afgestemd op wat jij nodig hebt.
                  Samen ontdekken we wat jij wilt bereiken én daar concrete
                  stappen in maken. In alle veiligheid werken aan jezelf —
                  <strong className="text-gold-deep font-medium"> jij staat centraal</strong>.
                </p>
                <p>
                  Respectvol, met een open blik en ook wel met een vleugje
                  luchtige humor.
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-line/50">
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-gold-light" />
                <Sparkles size={16} className="text-gold-deep" />
                <span className="text-sm text-gold-deep font-display italic">
                  Mari Louise Fongers
                </span>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-gold-light" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Bio paragraphs with warm accents */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-[300px] h-[300px] rounded-full bg-blush/30 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Mijn weg
              </span>
              <h2 className="text-3xl md:text-4xl mt-3">
                Hoe ik <span className="gold-text">hier</span> kwam
              </h2>
            </div>
          </Reveal>

          <div className="space-y-7">
            {aboutBio.paragraphs.map((p, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="flex gap-5 items-start">
                  <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-white border border-line/60 items-center justify-center text-gold-deep text-sm font-display mt-1 shadow-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-ink-soft text-[17px] leading-[1.85] flex-1">
                    {p}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="mt-12 p-8 bg-white rounded-3xl border border-line/60 text-center shadow-sm">
              <Sparkles size={20} className="text-gold-deep mx-auto mb-3" />
              <div className="text-xs uppercase tracking-widest text-gold-deep mb-3">
                Stijl van werken
              </div>
              <p className="text-ink-soft italic text-lg leading-relaxed">
                &ldquo;Betrokken, warm, vol aandacht, onderzoekend en respectvol —
                waarbij jouw tempo voorop staat.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-12">
              <Award size={32} className="text-gold-deep mx-auto mb-4" />
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Certificering
              </span>
              <h2 className="text-4xl md:text-5xl mt-3">
                Aangesloten bij <span className="gold-text">erkende</span> verenigingen
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cream rounded-2xl p-6 border border-line/40 hover:border-gold-light hover:bg-white transition-all hover:-translate-y-1 flex items-center gap-4 h-full"
                >
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-white rounded-xl">
                    <Image
                      src={c.image}
                      alt={c.full}
                      width={80}
                      height={80}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-ink">{c.name}</div>
                    <div className="text-xs text-ink-mute mt-0.5">{c.full}</div>
                    <div className="text-xs text-gold-deep mt-1">{c.note}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-gold-deep via-gold to-gold-light p-10 md:p-14 lg:p-16 text-center overflow-hidden glow-gold">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blush/20 blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl !text-white mb-5">
                Klaar voor je <span className="!text-white">eerste gesprek?</span>
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Stuur me een bericht of bel — ik denk graag met je mee.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white text-gold-deep rounded-full font-medium hover:bg-cream hover:scale-[1.02] transition-all"
                >
                  <Calendar size={16} />
                  Maak een afspraak
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
