import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Disclaimer | Centrum voor Therapie" };

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h1 className="text-4xl md:text-5xl mb-6">Disclaimer</h1>
          <div className="space-y-4 text-ink-soft text-[15px] leading-relaxed">
            <p>
              De inhoud van deze website is met de grootst mogelijke zorg
              samengesteld. Aan de informatie kunnen geen rechten worden
              ontleend. Centrum voor Therapie is niet aansprakelijk voor schade
              die zou kunnen voortvloeien uit het gebruik van de informatie op
              deze website.
            </p>
            <p>
              Alle teksten, foto&apos;s en logo&apos;s op deze website zijn
              eigendom van Centrum voor Therapie en mogen niet zonder
              toestemming worden gekopieerd of hergebruikt.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
