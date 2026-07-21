export type ImageAsset = {
  id: string;
  src: string;
  fallbackSrc?: string;
  alt: string;
  originalUrl: string;
  width: number;
  height: number;
  category?: "knippen" | "kleuren" | "styling" | "salon" | "persoonlijk" | "product";
};

export const siteData = {
  business: {
    name: "HAIR 27",
    owner: "Saray Coolen",
    street: "Heerstraat-Noord 27",
    postalCode: "6099 AV",
    city: "Beegden",
    country: "Nederland",
    phoneDisplay: "0475 763 262",
    phoneHref: "tel:+31475763262",
    phoneSchema: "+31 475 763 262",
    email: "info@hair27.nl",
    website: "https://hair27.nl/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=HAIR%2027%20Heerstraat-Noord%2027%206099%20AV%20Beegden",
    timezone: "Europe/Amsterdam"
  },
  social: {
    instagram: "https://www.instagram.com/hairtwentyseven/",
    facebook: "https://www.facebook.com/HAIR27beegden/"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Over Hair 27", href: "/#over-hair-27" },
    { label: "Behandelingen", href: "/#behandelingen" },
    { label: "Lookbook", href: "/#lookbook" },
    { label: "Prijzen", href: "/prijzen" },
    { label: "Openingstijden", href: "/#openingstijden" },
    { label: "Contact", href: "/#contact" }
  ],
  reviewSummary: {
    score: "4,8",
    count: 37,
    source: "Google-reviews"
  },
  logo: {
    dark: {
      src: "/images/optimized/hair27-logo-zwart-1024.webp",
      originalUrl: "https://hair27.nl/wp-content/uploads/2021/04/hair27-logo-zwart.png",
      alt: "HAIR 27 logo"
    },
    light: {
      src: "/images/optimized/hair27-logo-wit-1024.webp",
      originalUrl: "https://hair27.nl/wp-content/uploads/2021/04/hair27-logo-wit-1024x228.png",
      alt: "HAIR 27 logo"
    }
  },
  images: {
    hero: {
      id: "hero",
      src: "/images/optimized/homepage-1600.webp",
      fallbackSrc: "/images/source/homepage-scaled.jpg",
      alt: "Moderne salonruimte van HAIR 27 in Beegden",
      originalUrl: "https://hair27.nl/wp-content/uploads/2021/04/homepage-scaled.jpg",
      width: 1600,
      height: 1067,
      category: "salon"
    },
    intro: {
      id: "intro",
      src: "/images/optimized/overhair27-zw-1200.webp",
      fallbackSrc: "/images/source/overhair27-zw-scaled.jpg",
      alt: "Saray Coolen in de salon van HAIR 27",
      originalUrl: "https://hair27.nl/wp-content/uploads/2022/04/overhair27-zw-scaled.jpg",
      width: 1200,
      height: 1600,
      category: "persoonlijk"
    },
    contact: {
      id: "contact",
      src: "/images/optimized/contact-zw-1200.webp",
      fallbackSrc: "/images/source/contact-zw.jpg",
      alt: "Zwart-wit sfeerfoto van de HAIR 27 salon",
      originalUrl: "https://hair27.nl/wp-content/uploads/2022/04/contact-zw.jpg",
      width: 1200,
      height: 800,
      category: "salon"
    },
    products: {
      id: "products",
      src: "/images/optimized/producten-gedraaid-1200.webp",
      fallbackSrc: "/images/source/producten-gedraaid-scaled.jpg",
      alt: "Producten voor haarverzorging in de salon",
      originalUrl: "https://hair27.nl/wp-content/uploads/2021/05/producten-gedraaid-scaled.jpg",
      width: 1200,
      height: 1600,
      category: "product"
    },
    stmnt: {
      id: "stmnt",
      src: "/images/optimized/STMNT-1000.webp",
      fallbackSrc: "/images/source/STMNT.jpeg",
      alt: "STMNT Grooming producten voor heren",
      originalUrl: "https://hair27.nl/wp-content/uploads/2022/04/STMNT.jpeg",
      width: 1000,
      height: 750,
      category: "product"
    }
  } satisfies Record<string, ImageAsset>,
  lookbook: [
    {
      id: "lookbook-1",
      src: "/images/optimized/lookbook1-1000.webp",
      fallbackSrc: "/images/source/lookbook1-scaled.jpg",
      alt: "Kapselinspiratie uit het lookbook van HAIR 27",
      originalUrl: "https://hair27.nl/wp-content/uploads/2021/05/lookbook1-scaled.jpg",
      width: 1000,
      height: 1250,
      category: "kleuren"
    },
    {
      id: "lookbook-2",
      src: "/images/optimized/lookbook2-1000.webp",
      fallbackSrc: "/images/source/lookbook2-scaled.jpg",
      alt: "Gestyled dameskapsel uit het HAIR 27 lookbook",
      originalUrl: "https://hair27.nl/wp-content/uploads/2021/05/lookbook2-scaled.jpg",
      width: 1000,
      height: 1250,
      category: "styling"
    },
    {
      id: "lookbook-4",
      src: "/images/optimized/lookbook4-1000.webp",
      fallbackSrc: "/images/source/lookbook4-scaled.jpg",
      alt: "Haarkleur en styling door HAIR 27",
      originalUrl: "https://hair27.nl/wp-content/uploads/2021/05/lookbook4-scaled.jpg",
      width: 1000,
      height: 1250,
      category: "kleuren"
    }
  ] satisfies ImageAsset[],
  values: [
    "Persoonlijke aandacht",
    "Eerlijk en deskundig advies",
    "Kwaliteit in een ontspannen sfeer"
  ],
  services: [
    {
      title: "Dames",
      description: "Knippen, föhnen en verzorgen met aandacht voor je haar, gezichtsvorm en dagelijkse routine.",
      from: "vanaf €32,50"
    },
    {
      title: "Heren",
      description: "Strakke coupes, tondeusewerk, baard trimmen en verzorging met STMNT Grooming.",
      from: "vanaf €17,50"
    },
    {
      title: "Kinderen",
      description: "Rustig en vriendelijk knippen, afgestemd op leeftijd en haarwens.",
      from: null
    },
    {
      title: "Kleuren en balayage",
      description: "Kleurbehandelingen, coupe soleil, toner en balayage met Schwarzkopf Professional.",
      from: "vanaf €37,50"
    },
    {
      title: "Styling en verzorging",
      description: "Wasmassage, föhnen, blowen, opsteken en verzorgende kleurmaskers.",
      from: "vanaf €15"
    },
    {
      title: "Wenkbrauwen",
      description: "Epileren, verven of een gecombineerde wenkbrauwbehandeling tijdens je afspraak.",
      from: "vanaf €12,50"
    }
  ],
  prices: [
    {
      category: "Heren",
      items: [
        { name: "Knippen", price: "€25" },
        { name: "Wasmassage / Knippen", price: "€29,50" },
        { name: "Tondeuse", price: "€17,50" },
        { name: "Baard trimmen", price: "€17,50" }
      ]
    },
    {
      category: "Dames",
      items: [
        { name: "Knippen", price: "€32,50" },
        { name: "Wasmassage / Knippen", price: "€35" },
        { name: "Wasmassage / Knippen / Blowen", price: "€38" },
        { name: "Wasmassage / Knippen / Föhnen", price: "€41" },
        { name: "Wasmassage / Föhnen", price: "€29,50" },
        { name: "Wasmassage / Föhnen lang haar", price: "€39,50" },
        { name: "Uitgroei verven", price: "v.a. €41,50" },
        { name: "Kleur helemaal", price: "v.a. €47,50" },
        { name: "Coupe soleil scalp", price: "v.a. €57,50" },
        { name: "Coupe soleil helemaal", price: "v.a. €87,50" },
        { name: "Balayage", price: "v.a. €87,50" },
        { name: "Toner in behandeling", price: "v.a. €37,50" },
        { name: "Chroma id kleur masker / Massage", price: "v.a. €15" },
        { name: "Opsteken", price: "v.a. €40" },
        { name: "Wenkbrauwen epileren in behandeling", price: "€12,50" },
        { name: "Wenkbrauwen verven in behandeling", price: "€12,50" },
        { name: "Wenkbrauwen combi", price: "€20" }
      ]
    }
  ],
  openingHours: [
    { day: "Maandag", schemaDay: "Monday", hours: "gesloten" },
    { day: "Dinsdag", schemaDay: "Tuesday", hours: "gesloten" },
    { day: "Woensdag", schemaDay: "Wednesday", hours: "09:00-17:30" },
    { day: "Donderdag", schemaDay: "Thursday", hours: "10:00-17:30" },
    { day: "Vrijdag", schemaDay: "Friday", hours: "10:00-17:30" },
    { day: "Zaterdag", schemaDay: "Saturday", hours: "09:00-16:00" },
    { day: "Zondag", schemaDay: "Sunday", hours: "gesloten" }
  ],
  reviews: [
    {
      name: "Jose van der Linden",
      text: "Goed advies, vriendelijk, luistert goed naar je wensen en knipt goed en modern."
    },
    {
      name: "Christin",
      text: "Geweldig. Ik was lang op zoek naar een kapper die netjes te werk gaat. Nu kom ik al vanaf de opening bij Saray en ga ik niet meer weg."
    },
    {
      name: "Nick Ringelberg",
      text: "Een vriendelijke kapster. Ik kon via Facebook een afspraak maken en een paar uur later was ik geknipt. Daarbij is de prijs niet duur."
    }
  ],
  ownerChecks: [
    "Controleer of de reviewscore 4,8 en 37 Google-reviews nog actueel zijn.",
    "Controleer de volledige prijslijst voordat de site live gaat.",
    "Controleer of Instagram en Facebook nog de juiste pagina's zijn.",
    "Koppel het contactformulier aan een formulierverwerker of e-mailservice.",
    "Lever extra lookbookfoto's aan wanneer filters per behandeling gewenst zijn."
  ]
} as const;

export const appointmentMailto = () => {
  const subject = encodeURIComponent("Afspraak aanvraag HAIR 27");
  const body = encodeURIComponent(
    "Hallo Saray,\n\nIk wil graag een afspraak maken bij HAIR 27.\n\nNaam:\nTelefoon:\nGewenste behandeling:\nVoorkeursdag of moment:\n\nGroet,"
  );
  return `mailto:${siteData.business.email}?subject=${subject}&body=${body}`;
};
