import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { tariffs } from "@/lib/content";
import {
  Calendar,
  Check,
  Clock,
  ShieldCheck,
  HeartHandshake,
  FileX,
  Award,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Tarieven & Vergoedingen",
  description:
    "Tarieven en vergoedingen Centrum voor Therapie Purmerend. BTW-vrijgesteld. Geen verwijsbrief nodig, geen eigen risico.",
};

const valuePoints = [
  {
    icon: FileX,
    title: "Geen verwijsbrief",
    text: "Direct starten zonder huisarts of doorverwijzing.",
  },
  {
    icon: ShieldCheck,
    title: "Geen eigen risico",
    text: "Particuliere zorg, geen aanslag op je verzekering.",
  },
  {
    icon: Award,
    title: "ECP gecertificeerd",
    text: "Erkende beroepsverenigingen en kwaliteitsregister.",
  },
  {
    icon: HeartHandshake,
    title: "Persoonlijke aanpak",
    text: "Geen vast protocol, maatwerk afgestemd op jou.",
  },
  {
    icon: Clock,
    title: "Flexibele sessies",
    text: "Op afspraak van maandag tot vrijdag.",
  },
  {
    icon: Sparkles,
    title: "20 jaar ervaring",
    text: "Bijna twee decennia praktijkervaring.",
  },
];

const insurers = [
  "ASR",
  "Caresco",
  "CZ",
  "DSW",
  "Eno",
  "FBTO",
  "Menzis",
  "ONVZ",
  "VGZ",
  "Zilveren Kruis",
  "Zorg en Zekerheid",
];

export default function TarievenPage() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-16 warm-gradient overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-blush/40 blur-3xl animate-drift" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-gold-light/30 blur-3xl animate-drift" style={{ animationDelay: "-9s" }} />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-deep">
            Tarieven & Vergoedingen
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl mt-3 leading-tight">
            Heldere <span className="gold-text">tarieven</span>
          </h1>
          <p className="text-lg text-ink-soft mt-5">
            Eerlijke prijzen, zonder verrassingen. Met persoonlijke begeleiding van bewezen kwaliteit.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {tariffs.map((t, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2}>
                <div className="relative bg-white rounded-3xl p-10 border border-line/60 h-full shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                  <div className="text-xs uppercase tracking-widest text-gold-deep mb-2">
                    {t.duration}
                  </div>
                  <h3 className="text-2xl mb-5">{t.title}</h3>
                  <div className="flex items-baseline gap-2 mb-2 pb-5 border-b border-line/50">
                    <span className="text-4xl font-display text-ink">{t.price}</span>
                    <span className="text-sm text-ink-mute">per sessie</span>
                  </div>
                  <ul className="space-y-2.5 text-sm text-ink-soft mt-5">
                    <li className="flex gap-2">
                      <Check size={16} className="text-gold-deep mt-0.5 shrink-0" />
                      <span>{t.note}</span>
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-gold-deep mt-0.5 shrink-0" />
                      <span>Geen eigen risico</span>
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-gold-deep mt-0.5 shrink-0" />
                      <span>Geen verwijsbrief nodig</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="text-xs text-ink-mute italic mt-6 text-center">
            Annuleren kan tot 48 uur van tevoren. Daarna wordt de gereserveerde sessie in rekening gebracht.
          </p>
        </div>
      </section>

      {/* Value points */}
      <section className="py-20 bg-cream relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-blush/25 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Wat krijg je
              </span>
              <h2 className="text-3xl md:text-4xl mt-3">
                Meer dan alleen <span className="gold-text">een sessie</span>
              </h2>
              <p className="text-ink-soft mt-4 max-w-xl mx-auto">
                Bij elke afspraak krijg je de zorg en aandacht die je verdient.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valuePoints.map((p, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="bg-white rounded-2xl p-6 border border-line/40 h-full hover:border-gold-light transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-blush-soft flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-gold-deep" />
                  </div>
                  <h3 className="text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vergoedingen — centered */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold-light/20 blur-3xl" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 lg:px-10 text-center">
            <span className="text-xs uppercase tracking-widest text-gold-deep">
              Verzekering
            </span>
            <h2 className="text-3xl md:text-4xl mt-3 mb-6">
              <span className="gold-text">Vergoedingen</span>
            </h2>
            <p className="text-ink-soft text-[17px] leading-relaxed mb-5">
              Veel zorgverzekeraars vergoeden integratieve psychotherapie via de aanvullende
              verzekering. Of er sprake is van vergoeding bij jouw verzekeraar hangt af van je
              polis. Vraag dit op vóór je begint, dan weet je waar je aan toe bent.
            </p>
            <p className="text-ink-soft text-[17px] leading-relaxed mb-10">
              Twijfel je of jouw verzekering vergoedt? Bel of mail me, dan denk ik met je mee.
            </p>

            <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
              {insurers.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-full bg-cream border border-line/50 text-sm text-ink-soft"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-xs text-ink-mute italic mt-5">
              Bovenstaande verzekeraars hebben in het verleden integratieve psychotherapie
              vergoed. Check altijd je eigen polis.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-gold-deep via-gold to-gold-light p-10 md:p-14 lg:p-16 text-center overflow-hidden glow-gold">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blush/20 blur-3xl" />
              <div className="relative max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl !text-white mb-5">
                  Vragen over <span className="!text-white">kosten?</span>
                </h2>
                <p className="text-white/90 mb-8 text-lg">
                  Vraag het me gerust. Ik geef je graag duidelijkheid.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white text-gold-deep rounded-full font-medium hover:bg-cream hover:scale-[1.02] transition-all"
                >
                  <Calendar size={16} />
                  Stuur een bericht
                </Link>
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
