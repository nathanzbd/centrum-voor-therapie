import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { business } from "@/lib/content";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";

export const metadata = {
  title: "Contact | Centrum voor Therapie Purmerend",
  description:
    "Neem contact op met Mari-Louise Fongers. Praktijk Tuinstee 61, Purmerend. Snel een eerste afspraak, zonder verwijsbrief.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="relative pt-20 pb-16 warm-gradient">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-gold-deep">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl mt-3 leading-tight">
              Stuur me een <span className="italic gold-text">bericht</span>
            </h1>
            <p className="text-lg text-ink-soft mt-5">
              Twijfel je of therapie iets voor je is? Of wil je gewoon iets vragen?
              Ik denk graag met je mee — vrijblijvend.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-cream rounded-3xl p-8 border border-line/60">
              <h3 className="text-xl mb-5">Direct contact</h3>
              <div className="space-y-4 text-sm">
                <a href={`tel:${business.phoneRaw}`} className="flex gap-3 group">
                  <Phone size={18} className="text-gold-deep mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-mute">
                      Telefoon
                    </div>
                    <div className="text-ink group-hover:text-gold-deep">
                      {business.phone}
                    </div>
                  </div>
                </a>
                <a href={`mailto:${business.email}`} className="flex gap-3 group">
                  <Mail size={18} className="text-gold-deep mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-mute">
                      Email
                    </div>
                    <div className="text-ink group-hover:text-gold-deep break-all">
                      {business.email}
                    </div>
                  </div>
                </a>
                <div className="flex gap-3">
                  <MapPin size={18} className="text-gold-deep mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-mute">
                      Praktijk (op afspraak)
                    </div>
                    <div className="text-ink">
                      {business.address.street}<br />
                      {business.address.postcode} {business.address.city}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock size={18} className="text-gold-deep mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-mute">
                      Tijden
                    </div>
                    <div className="text-ink">Ma-Vr · op afspraak</div>
                  </div>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
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
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
