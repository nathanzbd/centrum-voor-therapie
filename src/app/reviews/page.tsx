import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { reviews } from "@/lib/reviews";
import { business } from "@/lib/content";
import { Star, Quote } from "lucide-react";

export const metadata = {
  title: "Ervaringen & Reviews | Centrum voor Therapie",
  description:
    "Lees ervaringen van cliënten van Centrum voor Therapie. 4.9/5 op Google Reviews.",
};

export default function ReviewsPage() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-16 warm-gradient">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-deep">
            Ervaringen
          </span>
          <h1 className="text-5xl md:text-6xl mt-3 leading-tight">
            Wat cliënten <span className="italic gold-text">vertellen</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={22} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-ink-soft">
              <strong className="text-ink">{business.rating}</strong> · {business.reviewCount} Google reviews
            </span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="bg-cream rounded-3xl p-8 border border-line/60 relative"
            >
              <Quote size={24} className="text-gold-light absolute top-6 right-6 opacity-50" />
              <div className="flex mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-ink-soft leading-relaxed mb-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="pt-5 border-t border-line/50 flex justify-between items-center">
                <div>
                  <div className="font-medium text-ink">{r.name}</div>
                  <div className="text-xs text-ink-mute mt-0.5">{r.date}</div>
                </div>
                <span className="text-xs text-ink-mute">via Google</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
