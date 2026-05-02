import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/content";
import { Phone, Mail, MapPin, Clock, Check, MessageCircle, Heart } from "lucide-react";

export const metadata = {
  title: "Contact | Centrum voor Therapie Purmerend",
  description:
    "Neem contact op met Mari Louise Fongers. Praktijk Tuinstee 61, Purmerend. Snel een eerste afspraak, zonder verwijsbrief.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-20 warm-gradient overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[600px] h-[600px] rounded-full bg-blush/40 blur-3xl animate-drift" />
        <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-gold-light/30 blur-3xl animate-drift" style={{ animationDelay: "-9s" }} />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-gold-deep">
              Neem contact op
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-3 leading-[1.05] pb-1">
              Stuur me een <span className="gold-text">bericht</span>
            </h1>
            <p className="text-lg text-ink-soft mt-6 leading-relaxed max-w-xl">
              Twijfel je of therapie iets voor je is? Of wil je gewoon iets vragen?
              Je hoeft het niet alleen uit te zoeken — ik denk graag met je mee.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={`tel:${business.phoneRaw}`} className="btn-primary">
                <Phone size={16} />
                Bel direct
              </a>
              <a
                href={`https://wa.me/${business.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-blush via-cream to-gold-light blur-2xl opacity-50 animate-pulse-soft" />
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl bg-blush-soft">
                <Image
                  src="/images/profile/mari-louise-round.png"
                  alt="Mari Louise Fongers"
                  fill
                  sizes="(max-width: 768px) 80vw, 380px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-line/50">
                <div className="flex items-center gap-2">
                  <Heart size={14} className="text-gold-deep fill-blush" />
                  <p className="text-sm italic text-ink-soft">
                    &ldquo;Hoe kan ik je helpen?&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>

          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={1}>
              <div className="bg-cream rounded-3xl p-8 border border-line/60">
                <h3 className="text-xl mb-5">Direct contact</h3>
                <div className="space-y-4 text-sm">
                  <a href={`tel:${business.phoneRaw}`} className="flex gap-3 group">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-line/50 flex items-center justify-center shrink-0 group-hover:bg-gold-deep group-hover:text-white transition-colors">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-ink-mute">
                        Telefoon
                      </div>
                      <div className="text-ink group-hover:text-gold-deep transition-colors mt-0.5">
                        {business.phone}
                      </div>
                    </div>
                  </a>
                  <a href={`mailto:${business.email}`} className="flex gap-3 group">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-line/50 flex items-center justify-center shrink-0 group-hover:bg-gold-deep group-hover:text-white transition-colors">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-ink-mute">
                        Email
                      </div>
                      <div className="text-ink group-hover:text-gold-deep transition-colors break-all mt-0.5">
                        {business.email}
                      </div>
                    </div>
                  </a>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-line/50 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-gold-deep" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-ink-mute">
                        Praktijk (op afspraak)
                      </div>
                      <div className="text-ink mt-0.5">
                        {business.address.street}<br />
                        {business.address.postcode} {business.address.city}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-line/50 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-gold-deep" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-ink-mute">
                        Tijden
                      </div>
                      <div className="text-ink mt-0.5">Ma-Vr · op afspraak</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="bg-white rounded-3xl p-8 border border-line/60">
                <h3 className="text-xl mb-4">Wat je kunt verwachten</h3>
                <ul className="space-y-2.5 text-sm text-ink-soft">
                  {business.usps.map((u, i) => (
                    <li key={i} className="flex gap-2">
                      <Check size={16} className="text-gold-deep mt-0.5 shrink-0" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-ink-mute italic mt-5 pt-4 border-t border-line/50">
                  Annuleren kan tot 48 uur van tevoren. Daarna wordt de
                  gereserveerde sessie in rekening gebracht.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
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

      <Footer />
      <WhatsAppButton />
    </>
  );
}
