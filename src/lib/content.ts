export const business = {
  name: "Centrum voor Therapie",
  therapist: "Mari Louise Fongers",
  tagline: "Alles is haalbaar, niets is onoverkomelijk",
  phone: "+31 6 30682579",
  phoneRaw: "+31630682579",
  email: "centrumvoortherapie@gmail.com",
  whatsapp: "+31630682579",
  address: {
    street: "Tuinstee 61",
    postcode: "1446 HH",
    city: "Purmerend",
    country: "Nederland",
  },
  kvk: "56879717",
  btw: "NL002328009B898",
  agbNote: "Beschikt over alle gecertificeerde AGB-codes",
  rating: 4.9,
  reviewCount: 11,
  reviewSource: "Google",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.8!2d4.9955!3d52.5098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c606ab0d9d309d%3A0x92782142ca265d60!2sCentrum%20voor%20Therapie!5e0!3m2!1snl!2snl!4v1700000000000",
  hours: {
    note: "Alleen op afspraak",
    schedule: [
      { day: "Maandag t/m vrijdag", time: "Op afspraak — vanaf 9:00" },
      { day: "Weekend", time: "Gesloten" },
    ],
  },
  usps: [
    "Snel een eerste afspraak",
    "Zonder verwijsbrief",
    "Geen eigen risico",
    "Gratis parkeren voor de deur",
    "4 minuten lopen vanaf de bushalte",
  ],
};

export const conditions = [
  {
    slug: "stress",
    title: "Stress",
    image: "/images/conditions/stress.jpg",
    summary:
      "Wanneer adrenaline langdurig je lichaam beheerst, raken hoofd en lijf overbelast. Samen brengen we rust en balans terug.",
    symptoms: [
      "Vermoeidheid en uitputting",
      "Hoge bloeddruk en hartkloppingen",
      "Prikkelbaarheid en somberheid",
      "Slecht slapen, piekeren",
      "Concentratieproblemen",
    ],
  },
  {
    slug: "angst-en-faalangst",
    title: "Angst & faalangst",
    image: "/images/conditions/angst.jpg",
    summary:
      "Angst beperkt wat je wilt doen. Met de juiste begeleiding leer je je angsten begrijpen, verzachten en stap voor stap loslaten.",
    symptoms: [
      "Paniekaanvallen",
      "Sociale angst",
      "Faalangst bij werk of studie",
      "Fobieën",
      "Vermijdingsgedrag",
    ],
  },
  {
    slug: "burn-out",
    title: "Burn-out",
    image: "/images/conditions/burnout.jpg",
    summary:
      "Een burn-out vraagt om herstel én inzicht. We werken aan energie terugwinnen en patronen herkennen die je opnieuw uitputten.",
    symptoms: [
      "Compleet leeg voelen",
      "Geen plezier meer ervaren",
      "Lichamelijke klachten",
      "Cynisme en afstand",
      "Werk niet meer aankunnen",
    ],
  },
  {
    slug: "depressie",
    title: "Depressie & somberheid",
    image: "/images/conditions/depressie.jpg",
    summary:
      "Wanneer alles donker en zwaar voelt, bieden gesprekken en handvatten ruimte voor licht. Je hoeft het niet alleen te doen.",
    symptoms: [
      "Aanhoudende somberheid",
      "Verlies van interesse",
      "Gevoel van leegte",
      "Vermoeidheid en lusteloosheid",
      "Negatieve gedachten",
    ],
  },
  {
    slug: "relatieproblemen",
    title: "Relatieproblemen",
    image: "/images/conditions/relatieproblemen.jpg",
    summary:
      "Een relatie waarin het niet meer stroomt vraagt om ruimte en aandacht. Samen onderzoeken we patronen en herstellen we verbinding.",
    symptoms: [
      "Steeds dezelfde discussies",
      "Afstand of onverschilligheid",
      "Communicatieproblemen",
      "Verlies van intimiteit",
      "Onzekerheid over de relatie",
    ],
  },
  {
    slug: "chronische-pijn",
    title: "Chronische pijn",
    image: "/images/conditions/chronische-pijn.jpg",
    summary:
      "Pijn die blijft gaat verder dan het lichaam. Met inzicht in lichaam én geest leer je leven met of voorbij de pijn.",
    symptoms: [
      "Langdurige fysieke klachten",
      "Pijn beïnvloedt stemming",
      "Verminderde mobiliteit",
      "Slaapproblemen door pijn",
      "Frustratie en machteloosheid",
    ],
  },
  {
    slug: "trauma",
    title: "Trauma",
    image: "/images/conditions/trauma.jpg",
    summary:
      "Ervaringen die je nog steeds raken kunnen verwerkt worden. Met onder meer EMDR werken we naar rust en ruimte in je hoofd.",
    symptoms: [
      "Herbelevingen of nachtmerries",
      "Hyperalertheid",
      "Vermijden van triggers",
      "Schaamte- of schuldgevoelens",
      "Emotioneel verdoofd",
    ],
  },
  {
    slug: "re-integratie",
    title: "Re-integratie",
    image: "/images/conditions/re-integratie.jpg",
    summary:
      "Terugkeren naar werk na ziekte of uitval vraagt zorgvuldigheid. Ik begeleid je in het opbouwen van vertrouwen en draagkracht.",
    symptoms: [
      "Onzekerheid over werkhervatting",
      "Stress bij gedachte aan werk",
      "Spanning met werkgever",
      "Gebrek aan zelfvertrouwen",
      "Behoefte aan structuur",
    ],
  },
];

export const certifications = [
  {
    name: "ECP",
    full: "European Certificate of Psychotherapy",
    image: "/images/certifications/ecp.jpg",
    href: "https://www.psychotherapie.pro/over-ecp",
    note: "Garantie voor een professionele behandeling",
  },
  {
    name: "EAP",
    full: "European Association for Psychotherapy",
    image: "/images/certifications/eap.png",
    href: "https://www.europsyche.org/",
    note: "Europese koepelorganisatie",
  },
  {
    name: "VIT",
    full: "Vereniging Integraal Therapeuten",
    image: "/images/certifications/vit.jpg",
    href: "https://vit-therapeuten.nl/",
    note: "Beroepsvereniging integratieve therapeuten",
  },
  {
    name: "S.C.A.G.",
    full: "Stichting Complementaire Gezondheidszorg",
    image: "/images/certifications/scag.jpg",
    href: "https://www.scag.nl/",
    note: "Lid nummer 11379",
  },
  {
    name: "NVECP",
    full: "Kwaliteitsregister Psychotherapie",
    image: "/images/certifications/nvecp.jpg",
    href: "https://nvecp.nl/",
    note: "Officieel kwaliteitsregister",
  },
  {
    name: "EMDR-i",
    full: "EMDR-i Netwerk Nederland",
    image: "/images/certifications/emdri.jpg",
    href: "https://www.emdri.nl/",
    note: "Gespecialiseerd in EMDR-therapie",
  },
  {
    name: "RBCZ",
    full: "Register Beroepsbeoefenaren Complementaire Zorg",
    image: "/images/certifications/rbcz.jpg",
    href: "https://www.rbcz.nu/",
    note: "Registratie complementaire zorg",
  },
];

export const tariffs = [
  {
    title: "Individuele sessie",
    duration: "45 minuten",
    price: "€ 95,00",
    note: "BTW vrijgesteld",
  },
  {
    title: "Telefonisch consult",
    duration: "15 minuten",
    price: "€ 23,75",
    note: "BTW vrijgesteld",
  },
];

export const aboutBio = {
  short:
    "Afgestudeerd in Sociale Psychologie en Integratieve Psychotherapie met bijna 20 jaar praktijkervaring. Cliënten omschrijven mijn stijl als betrokken, warm, vol aandacht, onderzoekend en respectvol — waarbij jouw tempo voorop staat.",
  paragraphs: [
    "Na mijn studies werkte ik in het bedrijfsleven, maar in 2003 maakte ik de overstap naar mijn oorspronkelijke passie: betrokkenheid en interesse in de mens en maatschappij. Vanuit een afgeronde opleiding Sociale Psychologie volgde ik de opleiding Integratieve Psychotherapie aan de Nederlandse Academie voor Psychotherapie.",
    "Ter verdere professionalisering doorliep ik de volledige ECP-status (European Certified Psychotherapy). Om mezelf te blijven ontwikkelen volg ik voortdurend bijscholingen — met onder meer Systemisch werken, Cognitieve therapie, Provocatieve therapie, A&O Psychologie en klachtverhelderingstechnieken. Ik ben tevens gecertificeerd Mindfulness en ACT trainer.",
    "Sinds de start van mijn praktijk heb ik veel ervaring opgedaan in het therapeutisch begeleiden van mensen met diverse hulpvragen. Enkele jaren werkte ik in een revalidatiecentrum waar omgaan met chronische pijn centraal staat. Ik geniet er intens van bij te dragen aan het zelfhelende vermogen van de mens — psychotherapie en coaching brengen je dáár waar je wilt zijn.",
    "Mijn stijl van werken omschrijven cliënten als betrokken, warm, vol aandacht, onderzoekend en respectvol — waarbij het ontwikkelingstempo van de cliënt vóórop staat.",
  ],
};
