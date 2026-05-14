/**
 * JsonLd — injects JSON-LD structured data into <head> via Next.js <Script>.
 *
 * Schemas included:
 *   1. LocalBusiness  → Google Maps / Local Pack visibility
 *   2. Organization   → Knowledge Panel (brand name + logo)
 *   3. WebSite        → Sitelinks SearchBox eligibility
 */

const SITE_URL = "https://topsafety-eg.com";
const LOGO_URL = `${SITE_URL}/IMG/logo.png`;
const PHONE_1  = "+201091664974";
const PHONE_2  = "+201111400982";
const EMAIL    = "sales@TOPSAFTY-EG.com";
const MAP_URL  = "https://maps.app.goo.gl/cM3t1n3yLvcJ1JZf7";

/* ── 1. LocalBusiness ─────────────────────────────────────────────────── */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FireStation", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#local-business`,
  name: "TopSafety — قمة السلامة",
  alternateName: [
    "Top Safety Egypt",
    "TopSafety EG",
    "توب سيفتي مصر",
    "قمة السلامة",
    "قمة السلامة مصر",
    "Top Safty Egypt",
    "شركة قمة السلامة",
  ],
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    "TopSafety (قمة السلامة) is Egypt's trusted fire protection company. We supply and install all fire fighting systems, early-warning alarms (addressable & conventional), sprinklers, hydrants, fire pumps, and extinguishers. We serve factories, hotels, hospitals and schools across Egypt with annual maintenance contracts and civil defense handover.",
  telephone: [PHONE_1, PHONE_2],
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Urduniyya — Mall Al Jawhara, 4th Floor",
    addressLocality: "10th of Ramadan City",
    addressRegion: "Ash Sharqia Governorate",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.3",
    longitude: "31.7",
  },
  hasMap: MAP_URL,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "EGP",
  paymentAccepted: "Cash, Bank Transfer",
  areaServed: [
    { "@type": "Country", name: "Egypt" },
    { "@type": "City",    name: "10th of Ramadan City" },
    { "@type": "City",    name: "Cairo" },
    { "@type": "City",    name: "Sharm El Sheikh" },
    { "@type": "AdministrativeArea", name: "Ash Sharqia Governorate" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: "30.3", longitude: "31.7" },
    geoRadius: "200000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fire Protection Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Suppression & Sprinkler Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Addressable & Conventional Fire Alarm Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Pump Supply & Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Hose Cabinet Supply & Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Extinguisher Supply — Powder, Gas & Foam" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Maintenance Contracts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Plan Drawing & Evacuation Plan Approval" } },
    ],
  },
  sameAs: [
    MAP_URL,
    "https://wa.me/201111400982",
  ],
};

/* ── 2. Organization ──────────────────────────────────────────────────── */
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "TopSafety",
  alternateName: ["قمة السلامة", "توب سيفتي", "Top Safety Egypt", "Top Safty"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE_1,
      contactType: "sales",
      areaServed: "EG",
      availableLanguage: ["Arabic", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: PHONE_2,
      contactType: "customer support",
      areaServed: "EG",
      availableLanguage: ["Arabic"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mall Al Jawhara, 4th Floor, Al Urduniyya",
    addressLocality: "10th of Ramadan City",
    addressRegion: "Sharqia",
    addressCountry: "EG",
  },
  sameAs: [MAP_URL],
};

/* ── 3. WebSite (Sitelinks SearchBox) ────────────────────────────────── */
const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "TopSafety — قمة السلامة",
  url: SITE_URL,
  inLanguage: ["ar", "en"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}
