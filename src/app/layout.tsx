import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingHeader from "@/components/FloatingHeader";
import FABGroup from "@/components/FABGroup";
import JsonLd from "@/components/JsonLd";
import { LangProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-loaded",
  display: "swap",
});

const SITE_URL = "https://topsafety-eg.com";

export const metadata: Metadata = {
  /* ── Core ─────────────────────────────────────────────────────────── */
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TopSafety | قمة السلامة — أنظمة مكافحة وإنذار الحريق",
    template: "%s | TopSafety قمة السلامة",
  },
  description:
    "TopSafety (توب سيفتي) — شركة متخصصة في توريد وتركيب أنظمة مكافحة الحريق، الإنذار المبكر، الرش الآلي، ومضخات الحريق في مصر. Top Safety Egypt — expert fire alarm, suppression & sprinkler system installation. Free inspection. العاشر من رمضان، مصر.",

  /* ── Keywords (bilingual + common misspellings) ───────────────────── */
  keywords: [
    /* Brand — EN */
    "TopSafety", "Top Safety Egypt", "Top Safety", "Top Safty Egypt",
    "topsafety-eg", "topsafety eg", "TopSafety EG", "topsafety egypt",
    /* Brand — AR */
    "توب سيفتي", "توب سيفتي مصر", "قمة السلامة", "قمة السلامة مصر",
    "شركة قمة السلامة", "شركة توب سيفتي",
    /* Services — EN */
    "fire safety Egypt", "fire alarm systems Egypt", "fire fighting systems Egypt",
    "fire suppression systems Egypt", "sprinkler systems Egypt",
    "fire pump installation Egypt", "addressable fire alarm Egypt",
    "fire extinguisher Egypt", "civil defense Egypt",
    "fire plan approval Egypt", "annual fire maintenance Egypt",
    "fire hose cabinet Egypt",
    /* Services — AR */
    "أنظمة مكافحة الحريق", "أنظمة إنذار الحريق", "إنذار الحريق المعنون",
    "نظام رش المياه", "مضخات الحريق", "صناديق إطفاء الحريق",
    "طفايات الحريق", "عقود صيانة الحريق", "رسم مخططات الحريق",
    "خطط الإخلاء", "الحماية المدنية مصر", "أنظمة الإطفاء مصر",
    /* Location */
    "العاشر من رمضان", "مدينة العاشر من رمضان", "الأردنية العاشر من رمضان",
    "مول الجوهرة", "محافظة الشرقية",
    "10th of Ramadan City", "10th Ramadan Egypt", "Sharqia Egypt",
  ],

  /* ── Authorship ────────────────────────────────────────────────────── */
  authors: [{ name: "TopSafety", url: SITE_URL }],
  creator: "TopSafety — قمة السلامة",
  publisher: "TopSafety",
  category: "Fire Safety & Protection",

  /* ── Canonical & hreflang alternates ──────────────────────────────── */
  alternates: {
    canonical: SITE_URL,
    languages: {
      "ar-EG": `${SITE_URL}/?lang=ar`,
      "en-EG": `${SITE_URL}/?lang=en`,
      "x-default": SITE_URL,
    },
  },

  /* ── Open Graph ────────────────────────────────────────────────────── */
  openGraph: {
    title: "TopSafety | قمة السلامة — أنظمة مكافحة الحريق في مصر",
    description:
      "توب سيفتي — الشريك الموثوق لأنظمة مكافحة وإنذار الحريق في مصر. نخدم المصانع والفنادق والمستشفيات والمدارس. Top Safety Egypt — fire alarm, suppression & maintenance.",
    url: SITE_URL,
    siteName: "TopSafety — قمة السلامة",
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_EG"],
    images: [
      {
        url: `${SITE_URL}/IMG/logo.png`,
        width: 512,
        height: 512,
        alt: "TopSafety — قمة السلامة Logo",
      },
    ],
  },

  /* ── Twitter / X ───────────────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "TopSafety | قمة السلامة — توب سيفتي مصر",
    description:
      "أنظمة مكافحة الحريق · الإنذار المبكر · الرش الآلي · مضخات الحريق | Fire safety systems Egypt — inspection, installation & maintenance.",
    images: [`${SITE_URL}/IMG/logo.png`],
  },

  /* ── Robots ────────────────────────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Icons ─────────────────────────────────────────────────────────── */
  icons: {
    icon: "/IMG/logo.png",
    shortcut: "/IMG/logo.png",
    apple: "/IMG/logo.png",
  },

  /* ── Google Search Console verification (replace token when ready) ── */
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cairo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/IMG/logo.png" />

        {/* hreflang — helps Google pick the right language version */}
        <link rel="alternate" hrefLang="ar-EG" href={`${SITE_URL}/?lang=ar`} />
        <link rel="alternate" hrefLang="en-EG" href={`${SITE_URL}/?lang=en`} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

        {/* Geo meta — boosts local search visibility */}
        <meta name="geo.region" content="EG-SHR" />
        <meta name="geo.placename" content="10th of Ramadan City, Sharqia, Egypt" />
        <meta name="geo.position" content="30.3;31.7" />
        <meta name="ICBM" content="30.3, 31.7" />

        {/* JSON-LD Structured Data (LocalBusiness + Organization + WebSite) */}
        <JsonLd />
      </head>
      <body className={inter.variable} style={{ fontFamily: "Inter, Cairo, sans-serif" }} suppressHydrationWarning>
        <LangProvider>
          <FloatingHeader />
          <main>{children}</main>
          <FABGroup />
        </LangProvider>
      </body>
    </html>
  );
}
