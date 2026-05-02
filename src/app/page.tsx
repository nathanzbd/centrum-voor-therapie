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
  Brain,
  Compass,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
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
        <div className="absolute -top-32 -right-20 w-[600px] h-[600px] rounded-full bg-blush/40 blur-3xl animate-drift" />
        <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-gold-light/30 blur-3xl animate-drift" style={{ animationDelay: "-9s" }} />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12 pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-in-up pb-2">
                Ruimte om <span className="gold-text">jezelf</span><br />
                opnieuw te <br />
                ontmoeten.
              </h1>

              <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-lg animate-fade-in-up delay-100 italic">
                &ldquo;Waar kan ik jou bij helpen? Samen ontdekken we wat jij wilt
                bereiken — en zetten we daar concrete stappen in. In alle veiligheid,
                in jouw tempo.&rdquo;
              </p>

              <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up delay-200">
                <Link href="/contact" className="btn-primary">
                  <Calendar size={16} />
                  Maak een afspraak
                </Link>
                <Link href="/werkwijze" className="btn-secondary">
                  Hoe werk ik
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-line/60 animate-fade-in-up delay-300">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <div className="text-sm text-ink-soft">
                  <span className="font-medium text-ink">{business.rating}/5</span>
                  {" · "}
                  <span className="text-ink-mute">{business.reviewCount} Google reviews</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in delay-200">
              <div className="relative aspect-[4/5] max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-blush via-cream to-gold-light blur-2xl opacity-50 animate-pulse-soft" />
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-line/60 shadow-2xl bg-blush-soft">
                  <Image
                    src="/images/profile/mari-louise-round.png"
                    alt="Mari Louise Fongers"
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-line/50 max-w-[230px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart size={14} className="text-gold-deep fill-blush" />
                    <span className="text-xs uppercase tracking-widest text-gold-deep font-medium">
                      Welkom
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft italic leading-snug">
                    &ldquo;Waar kan ik jou bij helpen?&rdquo;
                  </p>
                  <p className="text-xs text-ink-mute mt-1">— Mari Louise</p>
                </div>

                <div className="hidden sm:block absolute -top-6 -right-4 bg-gold-deep !text-white rounded-2xl px-4 py-3 shadow-xl">
                  <div className="text-xs uppercase tracking-widest opacity-80">Ervaring</div>
                  <div className="text-2xl font-display">20 jaar</div>
                </div>
              </div>
            </div>
          </div>

          {/* USP strip */}
          <Reveal>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-3 pt-8 border-t border-line/40">
              {business.usps.map((usp, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-ink-soft">
                  <Check size={16} className="text-gold-deep shrink-0" />
                  <span>{usp}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Warm intro band */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-blush/30 blur-3xl" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="text-xl md:text-2xl text-ink leading-[1.7] font-display">
              &ldquo;We willen allemaal lekker functioneren in ons leven, en
              meestal lukt dat ook. Maar soms lopen we tegen dingen aan waarbij
              we wat hulp kunnen gebruiken.&rdquo;
            </p>
            <p className="text-lg text-gold-deep mt-6 italic">
              Ben je op zoek naar psychologische hulp?
            </p>
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blush/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Over mij
              </span>
              <h2 className="text-4xl md:text-5xl mt-3 leading-tight pb-1">
                Mari Louise<br />
                <span className="text-gold-deep font-medium">Fongers</span>
              </h2>
              <p className="text-ink-mute mt-4 italic">
                Integratief Psychotherapeut · ECP gecertificeerd
              </p>
              <Link
                href="/over"
                className="inline-flex items-center gap-2 text-gold-deep mt-6 under-link"
              >
                Lees mijn verhaal <ArrowRight size={16} />
              </Link>
            </Reveal>

            <Reveal delay={1} className="lg:col-span-7">
              <div className="space-y-5 text-ink-soft text-[17px] leading-relaxed">
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
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Educational visual band: integrative therapy approach */}
      <section className="relative py-20 bg-cream overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-8 bg-blush/30 blur-3xl rounded-full" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-line/60 shadow-xl bg-blush-soft">
                <Image
                  src="/images/educational/tree-of-growth.jpg"
                  alt="Geworteld groeien — integratieve psychotherapie"
                  fill
                  sizes="(max-width: 1024px) 80vw, 480px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl px-5 py-4 shadow-lg border border-line/50">
                <Brain size={20} className="text-gold-deep mb-2" />
                <div className="text-xs uppercase tracking-widest text-gold-deep">Methodes</div>
                <div className="text-sm text-ink mt-1">EMDR · ACT · CGT</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <span className="text-xs uppercase tracking-widest text-gold-deep">
              Werkwijze
            </span>
            <h2 className="text-4xl md:text-5xl mt-3 leading-tight pb-1">
              Geen vast protocol.<br />
              <span className="gold-text">Een aanpak op maat.</span>
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mt-6 mb-6">
              Integratieve psychotherapie betekent dat ik verschillende therapeutische
              stromingen combineer — afgestemd op wat jij op dat moment nodig hebt.
            </p>
            <ul className="space-y-3 text-ink-soft mb-8">
              {[
                "Cognitieve Gedragstherapie (CGT)",
                "EMDR voor traumaverwerking",
                "Mindfulness &amp; ACT",
                "Systemisch werken",
                "Provocatieve therapie",
              ].map((m, i) => (
                <li key={i} className="flex gap-3">
                  <Compass size={16} className="text-gold-deep mt-1 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: m }} />
                </li>
              ))}
            </ul>
            <Link href="/werkwijze" className="btn-secondary">
              Meer over de werkwijze
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Specialisaties
              </span>
              <h2 className="text-4xl md:text-5xl mt-3 leading-tight pb-1">
                Herken jij iets <span className="gold-text">van het volgende?</span>
              </h2>
              <p className="text-ink-soft mt-5 text-lg">
                Voor uiteenlopende klachten bied ik persoonlijke begeleiding —
                afgestemd op jouw situatie en verhaal.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c, i) => (
              <Reveal key={c.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <Link
                  href={`/klachten/${c.slug}`}
                  className="card-tilt group block relative bg-white rounded-3xl border border-line/60 overflow-hidden h-full"
                >
                  <div className="aspect-[5/3] overflow-hidden bg-blush-soft">
                    <Image
                      src={c.image}
                      alt={c.title}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl mb-3">{c.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed mb-5 line-clamp-3">
                      {c.summary}
                    </p>
                    <span className="text-sm text-gold-deep under-link">
                      Meer informatie <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="py-20 bg-gradient-to-br from-cream via-bg-warm to-blush-soft relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold-light/30 blur-3xl animate-drift" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-blush/40 blur-3xl animate-drift" style={{ animationDelay: "-12s" }} />
        <Reveal>
          <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <Quote size={44} className="text-gold-deep mx-auto mb-8 opacity-60" />
            <p className="text-3xl md:text-5xl font-display leading-snug text-ink mb-8 pb-1">
              <span className="italic">&ldquo;Alles is haalbaar,</span>
              <br />
              niets is onoverkomelijk.&rdquo;
            </p>
            <div className="text-sm uppercase tracking-widest text-gold-deep">
              Mari Louise Fongers
            </div>
          </div>
        </Reveal>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-deep">
                  Ervaringen
                </span>
                <h2 className="text-4xl md:text-5xl mt-3 leading-tight pb-1 max-w-2xl">
                  Wat cliënten <span className="gold-text">vertellen</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} className="fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-ink-soft">
                  <strong className="text-ink">{business.rating}</strong> · {business.reviewCount} Google reviews
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredReviews.map((r, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="bg-cream rounded-3xl p-7 border border-line/60 h-full hover:shadow-lg transition-shadow">
                  <Quote size={20} className="text-gold-light mb-3" />
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
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/reviews" className="btn-secondary">
              Alle ervaringen lezen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Aangesloten bij
              </span>
              <h2 className="text-3xl md:text-4xl mt-3 pb-1">
                Erkende <span className="gold-text">kwaliteit</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={c.full}
                  className="bg-white rounded-2xl p-4 border border-line/40 hover:border-gold-light hover:shadow-md transition-all flex items-center justify-center h-24 hover:-translate-y-1"
                >
                  <Image
                    src={c.image}
                    alt={c.full}
                    width={120}
                    height={80}
                    className="max-h-14 w-auto object-contain"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-gold-deep via-gold to-gold-light p-10 md:p-16 text-white overflow-hidden glow-gold">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-drift" />
              <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-blush/20 blur-3xl animate-drift" style={{ animationDelay: "-7s" }} />

              <div className="relative grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl !text-white leading-tight mb-5 pb-1">
                    Klaar om te <br />
                    <span className="!text-white">beginnen?</span>
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    Twijfel je of therapie iets voor je is? Stuur een berichtje of
                    bel — ik denk graag met je mee.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3 bg-white text-gold-deep rounded-full font-medium hover:bg-cream hover:scale-[1.02] transition-all"
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
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
