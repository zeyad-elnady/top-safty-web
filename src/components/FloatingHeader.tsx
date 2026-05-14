"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";

const navLinks = [
  { href: "/",          en: "Home",     ar: "الرئيسيه"   },
  { href: "/#services", en: "Services", ar: "خدماتنا"     },
  { href: "/contact",   en: "Contact",  ar: "تواصل معنا"  },
];

export default function FloatingHeader() {
  const { lang, toggleLang, isAr } = useLang();
  const [visible, setVisible]     = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted]       = useState(false);
  const lastScrollY = useRef(0);
  const pathname    = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ── scroll hide/show ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80)                       setVisible(true);
      else if (y > lastScrollY.current) setVisible(false);
      else                              setVisible(true);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close drawer on nav ── */
  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  /* ── lock body scroll ── */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      {/* ── FLOATING PILL ───────────────────────── */}
      <header
        className={`header-floating w-[95%] max-w-6xl${visible ? "" : " header-hidden"}`}
        style={{ left: "50%" }}
      >
        <div
          style={{
            borderRadius: "9999px",
            padding: "0.45rem 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            boxShadow: "0 8px 28px rgba(47,47,47,0.09)",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" style={{ textDecoration: "none" }}>
            <div style={{ position: "relative", width: "2rem", height: "2rem", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(110,0,0,0.15)", flexShrink: 0 }}>
              <Image src="/IMG/logo.png" alt="TopSafety Logo" fill style={{ objectFit: "cover" }} priority />
            </div>
            <span style={{ color: "var(--color-primary)", fontWeight: 900, letterSpacing: "-0.03em", fontSize: "1rem" }}>
              TopSafety
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" dir={isAr ? "rtl" : "ltr"}>
            {navLinks.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && l.href !== "/#services" && pathname?.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: active ? "var(--color-primary)" : "var(--color-secondary)",
                    borderBottom: active ? "2px solid var(--color-primary)" : "2px solid transparent",
                    paddingBottom: "2px",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "color 0.2s",
                    fontFamily: isAr ? "Cairo, sans-serif" : "Inter, sans-serif",
                  }}
                >
                  {isAr ? l.ar : l.en}
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              style={{
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                border: "1.5px solid var(--color-outline-variant)",
                background: "transparent",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--color-primary)",
                cursor: "pointer",
                letterSpacing: "0.03em",
                transition: "background 0.2s, border-color 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-primary-fixed)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-outline-variant)";
              }}
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>

            {/* CTA — desktop only */}
            <Link
              href="/contact"
              className="hidden md:inline-flex"
              style={{
                padding: "0.4rem 1rem",
                background: "var(--color-primary)",
                color: "#fff",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                fontWeight: 700,
                textDecoration: "none",
                flexShrink: 0,
                whiteSpace: "nowrap",
                fontFamily: isAr ? "Cairo, sans-serif" : "Inter, sans-serif",
              }}
            >
              {isAr ? "معاينة مجانية" : "Free Inspection"}
            </Link>

            {/* Hamburger — mobile only */}
            <button
              id="hamburger-btn"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="md:hidden"
              style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", width: "2.2rem", height: "2.2rem", borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer" }}
            >
              <span style={{ width: "1.2rem", height: "2px", background: "#555", borderRadius: "2px", display: "block" }} />
              <span style={{ width: "0.9rem", height: "2px", background: "#555", borderRadius: "2px", display: "block" }} />
              <span style={{ width: "1.2rem", height: "2px", background: "#555", borderRadius: "2px", display: "block" }} />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ───────────────────────── */}
      {drawerOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4"
          dir={isAr ? "rtl" : "ltr"}
        >
          <div className="relative flex w-full max-w-[400px] min-w-[300px] flex-col items-center justify-center gap-6 rounded-3xl bg-white p-8 shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setDrawerOpen(false)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black hover:bg-gray-200"
            >
              ✕
            </button>

            {/* Content Container */}
            <div className="flex w-full flex-col items-center gap-8 text-black">
              
              {/* Logo */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-200">
                  <Image src="/IMG/logo.png" alt="TopSafety Logo" fill className="object-cover" />
                </div>
                <span className="text-xl font-black text-red-800">TopSafety</span>
              </div>

              {/* Nav Links */}
              <nav className="flex w-full flex-col items-center gap-4">
                {navLinks.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setDrawerOpen(false)}
                      className={`py-2 text-xl font-bold transition-colors hover:text-red-800 ${
                        active ? "text-red-800" : "text-gray-800"
                      }`}
                    >
                      {isAr ? l.ar : l.en}
                    </Link>
                  );
                })}
              </nav>

              {/* Lang Toggle */}
              <button
                onClick={toggleLang}
                className="rounded-full border border-gray-300 px-6 py-2 font-medium text-gray-600 transition-colors hover:bg-gray-50"
              >
                {lang === "en" ? "العربية 🇪🇬" : "English 🇬🇧"}
              </button>

              {/* CTA & Footer */}
              <div className="flex w-full flex-col items-center gap-2">
                <Link
                  href="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="flex w-full max-w-[250px] items-center justify-center rounded-xl bg-red-800 py-3 font-bold text-white shadow-md transition-colors hover:bg-red-900"
                >
                  {isAr ? "احصل على معاينة مجانية" : "Get a Free Inspection"}
                </Link>
                <p className="mt-4 text-xs text-gray-400">
                  {isAr ? "العاشر من رمضان — الأردنية · مول الجوهرة، الدور الرابع" : "10th of Ramadan City — Al Urduniyya · Mall Al Jawhara, 4th Floor"}
                </p>
              </div>

            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
