import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { business } from "@/lib/content";
import { Calendar, Check, MapPin } from "lucide-react";

export const metadata = {
  title: "Praktijkruimte | Centrum voor Therapie Purmerend",
  description:
    "Een rustige, warme praktijkruimte in Purmerend op de begane grond. Goed bereikbaar met openbaar vervoer en gratis parkeren.",
};

const photos = [
  "/images/praktijk/room-1.jpg",
  "/images/praktijk/room-2.jpg",
  "/images/praktijk/room-3.jpg",
  "/images/praktijk/room-4.jpg",
  "/images/praktijk/room-5.jpg",
];

export default function PraktijkPage() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-16 warm-gradient">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <span className="text-xs uppercase tracking-widest text-gold-deep">
            Praktijkruimte
          </span>
          <h1 className="text-5xl md:text-6xl mt-3 leading-tight">
            Een plek waar je <span className="italic gold-text">tot rust</span> komt
          </h1>
          <p className="text-lg text-ink-soft mt-5 max-w-2xl mx-auto">
            De praktijk is een prettige en rustige ruimte op de begane grond,
            waar je op je eigen wijze en tempo aan jezelf kunt werken.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-8 md:row-span-2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-line/60">
                <Image
                  src={photos[0]}
                  alt="Praktijkruimte"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {photos.slice(1, 5).map((p, i) => (
              <div key={i} className="md:col-span-4">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-line/60">
                  <Image
                    src={p}
                    alt={`Praktijk foto ${i + 2}`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-5 leading-tight">
              Bereikbaar &amp; <span className="italic">welkom</span>
            </h2>
            <ul className="space-y-3 text-ink-soft">
              {business.usps.map((u, i) => (
                <li key={i} className="flex gap-3">
                  <Check size={18} className="text-gold-deep mt-0.5 shrink-0" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-line/60">
            <div className="flex gap-3 mb-5">
              <MapPin size={22} className="text-gold-deep" />
              <div>
                <div className="font-medium">{business.name}</div>
                <div className="text-ink-soft text-sm mt-1">
                  {business.address.street}<br />
                  {business.address.postcode} {business.address.city}
                </div>
                <div className="text-xs text-ink-mute mt-2">Alleen op afspraak</div>
              </div>
            </div>
            <Link href="/contact" className="btn-primary mt-2">
              <Calendar size={16} />
              Afspraak maken
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
