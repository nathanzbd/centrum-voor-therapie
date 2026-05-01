import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacyverklaring | Centrum voor Therapie" };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 prose-stone">
          <h1 className="text-4xl md:text-5xl mb-6">Privacyverklaring</h1>
          <div className="space-y-4 text-ink-soft text-[15px] leading-relaxed">
            <p>
              Centrum voor Therapie hecht veel waarde aan de bescherming van jouw
              persoonsgegevens. In deze privacyverklaring lees je hoe ik daarmee
              omga.
            </p>
            <h2 className="text-xl text-ink mt-8 mb-3">Welke gegevens</h2>
            <p>
              Voor het bieden van zorg verwerk ik gegevens als naam, adres,
              telefoonnummer, e-mailadres en gegevens over je hulpvraag. Deze
              gegevens worden vertrouwelijk behandeld.
            </p>
            <h2 className="text-xl text-ink mt-8 mb-3">Geheimhouding</h2>
            <p>
              Als therapeut heb ik beroepsgeheim. Informatie wordt nooit gedeeld
              zonder jouw uitdrukkelijke toestemming, behalve wanneer een
              wettelijke verplichting daartoe verplicht.
            </p>
            <h2 className="text-xl text-ink mt-8 mb-3">Bewaartermijn</h2>
            <p>
              Dossiers worden bewaard volgens de wettelijke bewaartermijn die
              geldt voor de zorg.
            </p>
            <h2 className="text-xl text-ink mt-8 mb-3">Jouw rechten</h2>
            <p>
              Je hebt recht op inzage, correctie en verwijdering van jouw
              gegevens. Voor vragen kun je contact opnemen via{" "}
              <a className="text-gold-deep underline" href="mailto:centrumvoortherapie@gmail.com">
                centrumvoortherapie@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
