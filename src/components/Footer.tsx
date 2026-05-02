import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { business } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line/50 bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image
              src="/images/logo/logo-icon.png"
              alt="Centrum voor Therapie"
              width={64}
              height={64}
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm text-ink-soft leading-relaxed mb-4 max-w-xs">
              Praktijk voor integratieve psychotherapie in Purmerend. Mari Louise
              Fongers — warm, betrokken en vol aandacht.
            </p>
            <p className="text-xs text-ink-mute italic">
              &quot;{business.tagline}&quot;
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold-deep mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-gold-deep" />
                <a href={`tel:${business.phoneRaw}`} className="hover:text-gold-deep">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-gold-deep" />
                <a href={`mailto:${business.email}`} className="hover:text-gold-deep break-all">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-gold-deep" />
                <span>
                  {business.address.street}<br />
                  {business.address.postcode} {business.address.city}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold-deep mb-4">
              Snel naar
            </h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><Link href="/klachten" className="hover:text-gold-deep">Klachten</Link></li>
              <li><Link href="/werkwijze" className="hover:text-gold-deep">Werkwijze</Link></li>
              <li><Link href="/over" className="hover:text-gold-deep">Over mij</Link></li>
              <li><Link href="/praktijk" className="hover:text-gold-deep">Praktijkruimte</Link></li>
              <li><Link href="/tarieven" className="hover:text-gold-deep">Tarieven</Link></li>
              <li><Link href="/reviews" className="hover:text-gold-deep">Ervaringen</Link></li>
              <li><Link href="/contact" className="hover:text-gold-deep">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-line/50 flex flex-col sm:flex-row justify-between gap-4 text-xs text-ink-mute">
          <div>
            © {new Date().getFullYear()} Centrum voor Therapie · KvK {business.kvk} · BTW {business.btw}
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold-deep">Privacy</Link>
            <Link href="/disclaimer" className="hover:text-gold-deep">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
