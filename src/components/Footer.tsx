"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const copy = {
  en: {
    nav: "Navigation",
    contact: "Contact",
    connect: "Connect",
    address1: "10th of Ramadan City — Al Urduniyya · Mall Al Jawhara, 4th Floor",
    address2: "",
    slogan: "Engineering Safety · Protecting Lives",
    rights: "All rights reserved",
    home: "Home",
    services: "Services",
    contactLink: "Contact",
  },
  ar: {
    nav: "تصفح الموقع",
    contact: "بيانات التواصل",
    connect: "تابعنا",
    address1: "العاشر من رمضان — الأردنية · مول الجوهرة، الدور الرابع",
    address2: "",
    slogan: "نصنع الأمان، لنحمي الحياة",
    rights: "جميع الحقوق محفوظة",
    home: "الرئيسيه",
    services: "خدماتنا",
    contactLink: "تواصل معنا",
  },
};

export default function Footer() {
  const { lang, isAr } = useLang();
  const tx = copy[lang];
  const fontFamily = isAr ? "Cairo, sans-serif" : "Inter, sans-serif";

  return (
    <footer style={{ background: "#1a1c1c", color: "#f0f1f1", fontFamily }}>
      <div className="container" style={{ padding: "3rem 1.5rem" }}>
        <div 
          dir={isAr ? "rtl" : "ltr"}
          style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", justifyContent: "space-between", alignItems: "flex-start" }}
        >
          {/* Brand */}
          <div style={{ flex: "1 1 220px" }}>
            <p style={{ fontWeight: 900, fontSize: "1.3rem", color: "#fff", letterSpacing: "-0.02em", fontFamily: "Inter, sans-serif" }}>TopSafety</p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", marginTop: "0.25rem", fontFamily: "Cairo, sans-serif" }}>قمة السلامة</p>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.05em", color: "rgba(255,255,255,0.4)", marginTop: "0.75rem", textTransform: isAr ? "none" : "uppercase" }}>
              {tx.address1}
            </p>
          </div>

          {/* Navigation */}
          <div style={{ flex: "1 1 160px" }}>
            <p style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: isAr ? "0" : "0.1em", textTransform: isAr ? "none" : "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>
              {tx.nav}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                [tx.home, "/"],
                [tx.services, "/#services"],
                [tx.contactLink, "/contact"]
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ flex: "1 1 200px" }}>
            <p style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: isAr ? "0" : "0.1em", textTransform: isAr ? "none" : "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>
              {tx.contact}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="tel:+201091664974" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.9rem" }}>
                <span dir="ltr" className="inline-block">+20 10 9166 4974</span>
              </a>
              <a href="tel:01111400982" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.9rem" }}>
                <span dir="ltr" className="inline-block">011 1140 0982</span>
              </a>
              <a href="mailto:sales@TOPSAFTY-EG.com" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.85rem" }}>
                <span dir="ltr" className="inline-block">sales@TOPSAFTY-EG.com</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div style={{ flex: "1 1 140px" }}>
            <p style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: isAr ? "0" : "0.1em", textTransform: isAr ? "none" : "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>
              {tx.connect}
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href="https://wa.me/201111400982" target="_blank" rel="noopener noreferrer"
                style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L0 24l6.31-1.489A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.804 9.804 0 01-5.031-1.384l-.36-.213-3.748.884.886-3.65-.235-.374A9.82 9.82 0 012.18 12C2.18 6.57 6.57 2.18 12 2.18c5.43 0 9.82 4.39 9.82 9.82s-4.39 9.82-9.82 9.82z"/></svg>
              </a>
              <a href="https://m.me/qmtalslamtlanzmtalatfa" target="_blank" rel="noopener noreferrer"
                style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "#0084FF", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                aria-label="Messenger">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12c0 3.506 1.558 6.651 4.026 8.835V24l3.807-2.094A12.06 12.06 0 0012 22.2c6.627 0 12-4.925 12-11S18.627 0 12 0zm1.193 14.963l-3.055-3.26-5.963 3.26L10.35 8.79l3.131 3.26 5.887-3.26-6.175 6.173z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div dir={isAr ? "rtl" : "ltr"} style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "2.5rem", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} TopSafety — قمة السلامة. {tx.rights}.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>
            {tx.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
