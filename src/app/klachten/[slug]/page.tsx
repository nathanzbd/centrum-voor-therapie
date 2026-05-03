import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { conditions } from "@/lib/content";
import { ArrowRight, ArrowLeft, Calendar, Phone, Heart } from "lucide-react";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = conditions.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} · hulp bij ${c.title.toLowerCase()} | Centrum voor Therapie`,
    description: c.summary,
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);
  if (!condition) notFound();

  const others = conditions.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />

      <section className="relative pt-16 pb-12 warm-gradient overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[400px] h-[400px] rounded-full bg-blush/30 blur-3xl animate-drift" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Link
            href="/klachten"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold-deep transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Alle klachten
          </Link>
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Specialisatie
              </span>
              <h1 className="text-5xl md:text-6xl mt-3 leading-[1.05]">
                Hulp bij <span className="gold-text">{condition.title.toLowerCase()}</span>
              </h1>
              <p className="text-lg text-ink-soft mt-6 leading-relaxed">
                {condition.summary}
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-square max-w-sm mx-auto">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-blush via-cream to-gold-light blur-2xl opacity-50 animate-pulse-soft" />
                <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl bg-blush-soft">
                  <Image
                    src={condition.image}
                    alt={condition.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 380px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="bg-cream rounded-3xl p-8 border border-line/60 h-full">
              <div className="text-xs uppercase tracking-widest text-gold-deep mb-3">
                Herkenbare signalen
              </div>
              <h2 className="text-2xl mb-5">Symptomen</h2>
              <ul className="space-y-3 text-ink-soft">
                {condition.symptoms.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-deep mt-2.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="bg-white rounded-3xl p-8 border border-line/60 h-full">
              <Heart size={22} className="text-gold-deep mb-3 fill-blush" />
              <div className="text-xs uppercase tracking-widest text-gold-deep mb-3">
                Hoe ik je begeleid
              </div>
              <h2 className="text-2xl mb-5">Persoonlijk &amp; integratief</h2>
              <p className="text-ink-soft leading-relaxed mb-4">
                Geen vast protocol. Ik kies de aanpak die past bij jouw verhaal en
                tempo. Met onder meer cognitieve therapie, EMDR, mindfulness of
                provocatieve therapie werken we naar herstel.
              </p>
              <p className="text-sm text-ink-mute italic">
                Stuur een bericht of bel, dan plannen we een eerste gesprek.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-gold-deep via-gold to-gold-light p-10 md:p-14 lg:p-16 text-center overflow-hidden glow-gold">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blush/20 blur-3xl" />
              <div className="relative max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl !text-white mb-5">
                  Neem de eerste <span className="!text-white">stap</span>
                </h2>
                <p className="text-white/90 mb-8 text-lg">
                  Je hoeft het niet alleen uit te zoeken. Stuur een bericht of bel, ik denk graag met je mee.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-white text-gold-deep rounded-full font-medium hover:bg-cream hover:scale-[1.02] transition-all"
                  >
                    <Calendar size={16} /> Maak een afspraak
                  </Link>
                  <a
                    href="tel:+31630682579"
                    className="inline-flex items-center gap-2 px-7 py-3 border border-white/40 rounded-full font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone size={16} /> +31 6 30682579
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-gold-deep">
              Andere klachten
            </span>
            <h2 className="text-3xl mt-3">Mogelijk ook relevant</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((c, i) => (
              <Reveal key={c.slug} delay={(i + 1) as 1 | 2 | 3}>
                <Link
                  href={`/klachten/${c.slug}`}
                  className="card-tilt group block bg-white rounded-3xl border border-line/60 p-7 hover:border-gold-light hover:shadow-lg"
                >
                  <div className="w-14 h-14 mb-4 rounded-2xl overflow-hidden bg-blush-soft">
                    <Image
                      src={c.image}
                      alt={c.title}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl mb-2">{c.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-4 line-clamp-3">
                    {c.summary}
                  </p>
                  <span className="text-sm text-gold-deep under-link">
                    Lees meer <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
