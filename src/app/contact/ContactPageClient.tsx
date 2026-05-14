"use client";

import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const PhoneIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const EmailIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const PinIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const copy = {
  en: {
    heroBadge: "Get In Touch",
    h1: "Let's Protect ",
    h1span: "Your Facility",
    heroSub: "Fill in the form and we'll reach out within 24 hours to schedule a free site inspection.",
    infoH: "Contact Information",
    formH: "Send Us a Message",
    back: "← Back to Home",
    phone: "Phone Lines",
    email: "Email",
    location: "Location",
    locVal: "10th of Ramadan City — Al Urduniyya",
    locVal2: "Mall Al Jawhara, 4th Floor",
  },
  ar: {
    heroBadge: "تواصل معنا",
    h1: "لنؤمّن ",
    h1span: "منشأتك معاً",
    heroSub: "أرسل لنا رسالة وسيتواصل معك فريقنا خلال 24 ساعة لتحديد موعد المعاينة المجانية.",
    infoH: "معلومات التواصل",
    formH: "أرسل لنا رسالة",
    back: "→ العودة للرئيسية",
    phone: "خطوط الهاتف",
    email: "البريد الإلكتروني",
    location: "الموقع",
    locVal: "العاشر من رمضان — الأردنية",
    locVal2: "مول الجوهرة، الدور الرابع",
  },
};

export default function ContactPageClient() {
  const { lang, isAr } = useLang();
  const tx = copy[lang];
  const fontFamily = isAr ? "Cairo, sans-serif" : "Inter, sans-serif";

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "9rem", paddingBottom: "4rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "linear-gradient(135deg, #fff 0%, #f9f9f9 60%, #ffdad4 100%)", position: "relative", overflow: "hidden", fontFamily }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "24rem", height: "24rem", background: "rgba(153,0,0,0.05)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-primary)", display: "block", marginBottom: "1rem" }}>
            {tx.heroBadge}
          </span>
          <h1 className="text-display-lg" style={{ color: "var(--color-on-surface)", marginBottom: "1.25rem" }}>
            {tx.h1}<span style={{ color: "var(--color-primary)" }}>{tx.h1span}</span>
          </h1>
          <p style={{ color: "var(--color-secondary)", maxWidth: "520px", margin: "0 auto", lineHeight: "1.8" }}>
            {tx.heroSub}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "4rem 1.5rem 6rem", background: "var(--color-surface-container-low)", fontFamily }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>

          {/* Info column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 className="text-headline-md" style={{ color: "var(--color-on-surface)" }}>{tx.infoH}</h2>

            <ContactCard href="tel:+201091664974" icon={PhoneIcon} label={tx.phone} labelAr="خطوط الهاتف" value="+20 10 9166 4974" value2="011 1140 0982" />
            <ContactCard href="mailto:sales@TOPSAFTY-EG.com" icon={EmailIcon} label={tx.email} labelAr="البريد الإلكتروني" value="sales@TOPSAFTY-EG.com" />
            <ContactCard href="https://maps.app.goo.gl/cM3t1n3yLvcJ1JZf7" icon={PinIcon} label={tx.location} labelAr="الموقع" value={tx.locVal} value2={tx.locVal2} />

            {/* Map embed */}
            <a
              href="https://maps.app.goo.gl/cM3t1n3yLvcJ1JZf7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "2px solid var(--color-primary)", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 48px rgba(110,0,0,0.18)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)"; }}
              title="Open in Google Maps"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0!2d31.7!3d30.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIwJzAwLjAiTiAzMcKwNDInMDAuMCJF!5e0!3m2!1sar!2seg!4v1000000000000!5m2!1sar!2seg&q=mall+al+jawahara+10th+ramadan+egypt"
                width="100%"
                height="220"
                style={{ border: 0, display: "block", pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا على الخريطة"
              />
              <div style={{ background: "var(--color-primary)", color: "#fff", textAlign: "center", padding: "0.6rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                {isAr ? "افتح في خرائط Google" : "Open in Google Maps"}
              </div>
            </a>

            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--color-primary)", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
              {tx.back}
            </Link>
          </div>

          {/* Form column */}
          <div style={{ background: "#fff", borderRadius: "1.5rem", padding: "2.5rem 2rem", boxShadow: "0 8px 32px rgba(0,0,0,0.07)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-on-surface)", marginBottom: "1.5rem", fontFamily }}>
              {tx.formH}
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
