import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Quote,
  ArrowRight,
  Check,
  Calendar,
  Heart,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { business, conditions, certifications } from "@/lib/content";
import { reviews } from "@/lib/reviews";

export default function HomePage() {
  const featuredReviews = reviews.slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 warm-gradient opacity-60" />
        <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-blush/40 blur-3xl" />
        <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-gold-light/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-line">
                <Sparkles size={14} className="text-gold-deep" />
                <span className="text-xs uppercase tracking-widest text-ink-soft">
                  Praktijk in Purmerend
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
                Ruimte om <span className="gold-text italic">jezelf</span><br />
                opnieuw te <br />
                ontmoeten.
              </h1>

              <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-lg">
                Persoonlijke psychotherapie en coaching, met bijna 20 jaar ervaring.
                Warm, betrokken en met aandacht voor jouw verhaal — in jouw tempo.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="btn-primary">
                  <Calendar size={16} />
                  Maak een afspraak
                </Link>
                <Link href="/werkwijze" className="btn-secondary">
                  Hoe werk ik
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-line/60">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                <div className="text-sm text-ink-soft">
                  <span className="font-medium text-ink">{business.rating}/5</span>
                  {" · "}
                  <span className="text-ink-mute">{business.reviewCount} Google reviews</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-blush via-cream to-gold-light blur-2xl opacity-40" />
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-line/60 shadow-xl bg-blush-soft">
                  <Image
                    src="/images/profile/mari-louise-round.png"
                    alt="Mari-Louise Fongers"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-line/50 max-w-[220px] backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart size={14} className="text-gold-deep fill-blush" />
                    <span className="text-xs uppercase tracking-widest text-gold-deep font-medium">
                      Welkom
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft italic leading-snug">
                    &quot;Waar kan ik jou bij helpen?&quot;
                  </p>
                  <p className="text-xs text-ink-mute mt-1">— Mari-Louise</p>
                </div>
              </div>
            </div>
          </div>

          {/* USP strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-4">
            {business.usps.map((usp, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm text-ink-soft"
              >
                <Check size={18} className="text-gold-deep shrink-0 mt-0.5" />
                <span>{usp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Over mij
              </span>
              <h2 className="text-4xl md:text-5xl mt-3 leading-tight">
                Mari-Louise<br />
                <span className="italic text-gold-deep">Fongers</span>
              </h2>
              <p className="text-ink-mute mt-4 italic">
                Integratief Psychotherapeut · ECP gecertificeerd
              </p>
            </div>

            <div className="lg:col-span-7 space-y-5 text-ink-soft text-[17px] leading-relaxed">
              <p>
                Afgestudeerd in Sociale Psychologie en Integratieve Psychotherapie
                met bijna 20 jaar praktijkervaring. Cliënten omschrijven mijn stijl
                als <strong className="text-ink">betrokken, warm, vol aandacht,
                onderzoekend en respectvol</strong>.
              </p>
              <p>
                Ik maak gebruik van verscheidene psychologische stromingen én van
                jouw reeds aanwezige hulpbronnen — zodat je een volledig
                persoonlijke en op maat gemaakte begeleiding krijgt. Jouw
                ontwikkelingstempo staat altijd voorop.
              </p>
              <Link
                href="/over"
                className="inline-flex items-center gap-2 text-gold-deep hover:gap-3 transition-all pt-2"
              >
                Meer over mijn werkwijze
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-deep">
              Specialisaties
            </span>
            <h2 className="text-4xl md:text-5xl mt-3 leading-tight">
              Herken jij iets <span className="italic">van het volgende?</span>
            </h2>
            <p className="text-ink-soft mt-5 text-lg">
              Voor uiteenlopende klachten bied ik persoonlijke begeleiding —
              afgestemd op jouw situatie en verhaal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c) => (
              <Link
                key={c.slug}
                href={`/klachten/${c.slug}`}
                className="group relative bg-white rounded-3xl border border-line/60 p-8 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-gold-light"
              >
                <div className="w-16 h-16 mb-5 rounded-2xl overflow-hidden bg-blush-soft">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl mb-3">{c.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-5">
                  {c.summary}
                </p>
                <div className="flex items-center gap-2 text-sm text-gold-deep group-hover:gap-3 transition-all">
                  Meer informatie
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="py-24 bg-gradient-to-br from-cream via-bg-warm to-blush-soft">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <Quote size={40} className="text-gold-deep mx-auto mb-8 opacity-50" />
          <p className="text-3xl md:text-4xl font-display leading-snug text-ink mb-8">
            <span className="italic">&quot;Alles is haalbaar,</span>
            <br />
            niets is onoverkomelijk.&quot;
          </p>
          <div className="text-sm uppercase tracking-widest text-gold-deep">
            Mari-Louise Fongers
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Ervaringen
              </span>
              <h2 className="text-4xl md:text-5xl mt-3 leading-tight max-w-2xl">
                Wat cliënten <span className="italic">vertellen</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-ink-soft">
                <strong className="text-ink">{business.rating}</strong> ·{" "}
                {business.reviewCount} Google reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredReviews.map((r, i) => (
              <article
                key={i}
                className="bg-cream rounded-3xl p-7 border border-line/60"
              >
                <div className="flex mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-ink-soft text-[15px] leading-relaxed mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-line/50 text-sm">
                  <div className="font-medium text-ink">{r.name}</div>
                  <div className="text-ink-mute text-xs mt-0.5">{r.date}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/reviews" className="btn-secondary">
              Alle ervaringen lezen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-deep">
              Aangesloten bij
            </span>
            <h2 className="text-3xl md:text-4xl mt-3">
              Erkende <span className="italic">kwaliteit</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {certifications.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                title={c.full}
                className="bg-white rounded-2xl p-4 border border-line/40 hover:border-gold-light transition-colors flex items-center justify-center h-24"
              >
                <Image
                  src={c.image}
                  alt={c.full}
                  width={120}
                  height={80}
                  className="max-h-14 w-auto object-contain transition-all"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-gold-deep via-gold to-gold-light p-10 md:p-16 text-white overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-blush/20 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl text-white leading-tight mb-5">
                  Klaar om te <br />
                  <span className="italic">beginnen?</span>
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Twijfel je of therapie iets voor je is? Stuur een berichtje of
                  bel — ik denk graag met je mee, helemaal vrijblijvend.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-white text-gold-deep rounded-full font-medium hover:bg-cream transition-colors"
                  >
                    <Calendar size={16} />
                    Stuur een bericht
                  </Link>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-7 py-3 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors"
                  >
                    <Phone size={16} />
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Telefoon", value: business.phone },
                  { icon: Mail, label: "Email", value: business.email },
                  {
                    icon: MapPin,
                    label: "Praktijk",
                    value: `${business.address.street}, ${business.address.postcode} ${business.address.city}`,
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/70">
                        {label}
                      </div>
                      <div className="text-white mt-0.5">{value}</div>
                    </div>
                  </div>
                ))}
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
