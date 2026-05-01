import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
    text: "We starten met een gesprek waarin je vertelt waar je tegenaan loopt. Vrijblijvend en zonder druk — alleen om te kijken of we passen.",
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
            Integratieve <span className="italic gold-text">psychotherapie</span>
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
              <div key={i} className="bg-cream rounded-3xl p-8 border border-line/60 relative">
                <div className="text-xs text-gold-deep mb-3 font-medium">
                  Stap {i + 1}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-line flex items-center justify-center mb-5">
                  <s.icon size={22} className="text-gold-deep" />
                </div>
                <h3 className="text-2xl mb-3">{s.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-6">
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
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl mb-5">Klaar om te beginnen?</h2>
          <p className="text-ink-soft mb-8">
            Stuur me een bericht — ik denk graag met je mee.
          </p>
          <Link href="/contact" className="btn-primary">
            <Calendar size={16} />
            Maak een afspraak
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
