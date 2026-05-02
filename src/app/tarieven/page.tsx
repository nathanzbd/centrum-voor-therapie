import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { tariffs } from "@/lib/content";
import { Calendar, Check } from "lucide-react";

export const metadata = {
  title: "Tarieven & Vergoedingen | Centrum voor Therapie",
  description:
    "Tarieven en vergoedingen Centrum voor Therapie Purmerend. BTW-vrijgesteld. Geen verwijsbrief nodig, geen eigen risico.",
};

const features = [
  "Geen verwijsbrief nodig",
  "Geen eigen risico",
  "BTW vrijgesteld (particuliere zorg)",
  "AGB-codes aanwezig",
  "Aansluiting bij erkende beroepsverenigingen",
];

export default function TarievenPage() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-16 warm-gradient">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-deep">
            Tarieven
          </span>
          <h1 className="text-5xl md:text-6xl mt-3 leading-tight">
            Heldere <span className="gold-text">tarieven</span>
          </h1>
          <p className="text-lg text-ink-soft mt-5">
            Eerlijke prijzen, zonder verrassingen. BTW-vrijgesteld voor particuliere zorgverlening.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {tariffs.map((t, i) => (
              <div key={i} className="bg-cream rounded-3xl p-8 border border-line/60">
                <div className="text-xs uppercase tracking-widest text-gold-deep mb-3">
                  {t.duration}
                </div>
                <h3 className="text-xl mb-4">{t.title}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-display text-ink">{t.price}</span>
                </div>
                <div className="text-sm text-ink-mute">{t.note}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-line/60 mt-6">
            <h3 className="text-xl mb-5">Goed om te weten</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-ink-soft">
              {features.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <Check size={18} className="text-gold-deep mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-xs text-ink-mute italic mt-6 pt-5 border-t border-line/50">
              Annuleren kan tot 48 uur van tevoren. Daarna wordt de gereserveerde
              sessie in rekening gebracht.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-5">
          <h2 className="text-3xl md:text-4xl">Vergoedingen</h2>
          <p className="text-ink-soft text-[17px] leading-relaxed">
            Veel zorgverzekeraars vergoeden integratieve psychotherapie via de
            aanvullende verzekering. Of er sprake is van vergoeding bij jouw
            verzekeraar hangt af van je polis. Vraag dit op vóór je begint —
            dan weet je waar je aan toe bent.
          </p>
          <p className="text-ink-soft text-[17px] leading-relaxed">
            Twijfel je of jouw verzekering vergoedt? Bel of mail me, dan denk ik
            met je mee.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-gold-deep via-gold to-gold-light p-10 md:p-14 lg:p-16 text-center overflow-hidden glow-gold">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blush/20 blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl !text-white mb-5">Vragen over <span className="!text-white">kosten?</span></h2>
              <p className="text-white/90 mb-8 text-lg">Vraag het me gerust — ik geef je graag duidelijkheid.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-gold-deep rounded-full font-medium hover:bg-cream hover:scale-[1.02] transition-all"
              >
                <Calendar size={16} />
                Stuur een bericht
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
