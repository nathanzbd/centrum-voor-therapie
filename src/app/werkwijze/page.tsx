import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { Calendar, MessageCircle, Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "Werkwijze | Integratieve Psychotherapie",
  description:
    "Hoe werkt een traject? Integratieve psychotherapie bij Centrum voor Therapie — persoonlijk, op maat en in jouw tempo.",
};

const steps = [
  {
    icon: MessageCircle,
    title: "Kennismaking",
    text: "We starten met een gesprek waarin je vertelt waar je tegenaan loopt. Alleen om te kijken of we passen.",
  },
  {
    icon: Compass,
    title: "Samen verkennen",
    text: "We brengen in kaart wat je nodig hebt. Welke patronen, gevoelens of overtuigingen spelen er? Wat zou je willen veranderen?",
  },
  {
    icon: Sparkles,
    title: "Begeleid herstel",
    text: "Met passende methodieken — van gesprek tot EMDR, van mindfulness tot ACT — werken we aan herstel in jouw tempo.",
  },
];

export default function WerkwijzePage() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-16 warm-gradient">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-deep">
            Werkwijze
          </span>
          <h1 className="text-5xl md:text-6xl mt-3 leading-tight">
            Integratieve <span className="gold-text">psychotherapie</span>
          </h1>
          <p className="text-lg text-ink-soft mt-5 max-w-2xl mx-auto">
            Geen vast protocol, maar een aanpak die past bij jou. Ik combineer
            verschillende stromingen om jou te begeleiden naar duurzaam herstel.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3}>
                <div className="bg-cream rounded-3xl p-8 border border-line/60 relative h-full">
                  <div className="text-xs text-gold-deep mb-3 font-medium">
                    Stap {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-line flex items-center justify-center mb-5">
                    <s.icon size={22} className="text-gold-deep" />
                  </div>
                  <h3 className="text-2xl mb-3">{s.title}</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl mb-4">Wat houdt integratieve therapie in?</h2>
          <p className="text-ink-soft text-[17px] leading-relaxed">
            Integratieve psychotherapie is een aanpak waarbij verschillende methodes
            samenkomen — afgestemd op wat jij op dat moment nodig hebt. Geen
            standaardrecept, maar een traject op maat.
          </p>
          <p className="text-ink-soft text-[17px] leading-relaxed">
            Als ECP-gecertificeerd therapeut combineer ik onder meer cognitieve
            therapie, systemisch werken, mindfulness, ACT, provocatieve therapie,
            EMDR en klachtverhelderingstechnieken. Wat past, dat passen we toe.
          </p>
          <p className="text-ink-soft text-[17px] leading-relaxed">
            Het doel: dat jij weer in je eigen kracht staat, met handvatten die je
            blijvend kunt toepassen.
          </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-gold-deep via-gold to-gold-light p-10 md:p-14 lg:p-16 text-center overflow-hidden glow-gold">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blush/20 blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl !text-white mb-5">
                Klaar om te <span className="!text-white">beginnen?</span>
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Stuur me een bericht — ik denk graag met je mee.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-gold-deep rounded-full font-medium hover:bg-cream hover:scale-[1.02] transition-all"
              >
                <Calendar size={16} />
                Maak een afspraak
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
