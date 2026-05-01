import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/content";
import { Calendar, Check, MapPin, Car, Bus, Heart } from "lucide-react";

export const metadata = {
  title: "Praktijkruimte | Centrum voor Therapie Purmerend",
  description:
    "Een rustige, warme praktijkruimte in Purmerend op de begane grond. Goed bereikbaar met openbaar vervoer en gratis parkeren.",
};

const photos = [
  { src: "/images/praktijk/room-3.jpg", alt: "Praktijkruimte sfeer", span: "tall" },
  { src: "/images/praktijk/room-1.jpg", alt: "Certificaten" },
  { src: "/images/praktijk/room-2.jpg", alt: "Detail" },
  { src: "/images/praktijk/room-4.jpg", alt: "Detail" },
  { src: "/images/praktijk/room-5.jpg", alt: "Praktijk detail" },
] as const;

export default function PraktijkPage() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-16 warm-gradient overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-blush/40 blur-3xl animate-drift" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-gold-light/30 blur-3xl animate-drift" style={{ animationDelay: "-9s" }} />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-deep">
            Praktijkruimte
          </span>
          <h1 className="text-5xl md:text-6xl mt-3 leading-tight pb-1">
            Een plek waar je <span className="gold-text">tot rust</span> komt
          </h1>
          <p className="text-lg text-ink-soft mt-5 max-w-2xl mx-auto">
            De praktijk is een prettige en rustige ruimte op de begane grond,
            waar je op je eigen wijze en tempo aan jezelf kunt werken.
          </p>
        </div>
      </section>

      {/* Asymmetric gallery */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-4">
            <Reveal className="col-span-12 md:col-span-7 md:row-span-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-line/60 group bg-blush-soft">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="flex items-center gap-2 text-white/90">
                    <Heart size={16} className="fill-blush text-blush" />
                    <span className="text-sm uppercase tracking-widest">Veilig &amp; warm</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1} className="col-span-6 md:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-line/60 group bg-blush-soft">
                <Image
                  src={photos[1].src}
                  alt={photos[1].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>

            <Reveal delay={2} className="col-span-6 md:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-line/60 group bg-blush-soft">
                <Image
                  src={photos[2].src}
                  alt={photos[2].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>

            <Reveal delay={1} className="col-span-6 md:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-line/60 group bg-blush-soft">
                <Image
                  src={photos[3].src}
                  alt={photos[3].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>

            <Reveal delay={2} className="col-span-6 md:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-line/60 group bg-blush-soft">
                <Image
                  src={photos[4].src}
                  alt={photos[4].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bereikbaarheid */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold-deep">
                Bereikbaarheid
              </span>
              <h2 className="text-4xl md:text-5xl mt-3 leading-tight pb-1">
                Goed te <span className="gold-text">vinden</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            <Reveal delay={1}>
              <div className="bg-white rounded-3xl p-7 border border-line/60 h-full">
                <div className="w-12 h-12 rounded-2xl bg-blush-soft flex items-center justify-center mb-4">
                  <Car size={20} className="text-gold-deep" />
                </div>
                <h3 className="text-xl mb-2">Met de auto</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Voldoende gratis parkeergelegenheid recht tegenover de praktijk —
                  geen zoeken nodig.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="bg-white rounded-3xl p-7 border border-line/60 h-full">
                <div className="w-12 h-12 rounded-2xl bg-blush-soft flex items-center justify-center mb-4">
                  <Bus size={20} className="text-gold-deep" />
                </div>
                <h3 className="text-xl mb-2">Openbaar vervoer</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Ongeveer 4 minuten lopen vanaf de bushalte. Goed te bereiken vanuit
                  Amsterdam en omgeving.
                </p>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="bg-white rounded-3xl p-7 border border-line/60 h-full">
                <div className="w-12 h-12 rounded-2xl bg-blush-soft flex items-center justify-center mb-4">
                  <MapPin size={20} className="text-gold-deep" />
                </div>
                <h3 className="text-xl mb-2">Adres</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {business.address.street}<br />
                  {business.address.postcode} {business.address.city}
                </p>
                <p className="text-xs text-ink-mute mt-2 italic">Alleen op afspraak</p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-line/60 aspect-[16/8]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.835!2d4.9929536!3d52.5097867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c606ab0d9d309d%3A0x92782142ca265d60!2sCentrum%20voor%20Therapie!5e0!3m2!1snl!2snl!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Centrum voor Therapie - Locatie"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl mb-5 pb-1">
              Welkom in <span className="gold-text">de praktijk</span>
            </h2>
            <p className="text-ink-soft mb-8">
              Stuur me een bericht voor een kennismakingsgesprek — vrijblijvend en zonder druk.
            </p>
            <Link href="/contact" className="btn-primary">
              <Calendar size={16} />
              Plan een gesprek
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
