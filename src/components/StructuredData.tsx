import { business } from "@/lib/content";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: business.name,
    description:
      "Praktijk voor integratieve psychotherapie in Purmerend onder leiding van Mari Louise Fongers. Hulp bij stress, angst, burn-out, depressie, trauma, chronische pijn, relatieproblemen en re-integratie.",
    url: "https://centrumvoortherapie.nl",
    telephone: business.phoneRaw,
    email: business.email,
    image: "https://centrumvoortherapie.nl/images/logo/logo-icon.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postcode,
      addressLocality: business.address.city,
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.5097867,
      longitude: 4.9955525,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
      bestRating: 5,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "€€",
    medicalSpecialty: "Psychotherapy",
    founder: {
      "@type": "Person",
      name: business.therapist,
      jobTitle: "Integratief Psychotherapeut",
    },
    areaServed: {
      "@type": "City",
      name: "Purmerend",
    },
    sameAs: [
      "https://www.facebook.com/p/Centrum-voor-Therapie-100063795840483/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
