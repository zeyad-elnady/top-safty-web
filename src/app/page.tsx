"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

/* ─── Section data ─────────────────────────────── */
const sections = [
  {
    id: "commitment",
    img: "/IMG/img1.jpeg",
    imgAlt: "TopSafety worker in full safety gear on site",
    en: {
      badge: "Our Core Commitment",
      heading: "Uncompromising Safety Standards",
      body: "Safety is the core of everything we do. Our team operates strictly with the highest level of personal and site safety gear. We believe that protecting our workforce on the ground is the essential first step in protecting your facility and your people.",
      checks: ["NFPA Compliant Engineering", "24/7 Monitoring Ready Systems"],
    },
    ar: {
      badge: "التزامنا الجوهري",
      heading: "معايير سلامة لا تقبل المساومة",
      body: "السلامة هي جوهر كل ما نقوم به. يعمل فريقنا ملتزماً بأعلى مستويات معدات السلامة الشخصية والمهنية في الموقع. نؤمن بأن حماية فريق عملنا على أرض الواقع هي الخطوة الأساسية الأولى لحماية منشأتك وأفرادك.",
      checks: ["هندسة متوافقة مع معايير NFPA", "أنظمة جاهزة للمراقبة على مدار الساعة"],
    },
    imgLeft: true,
    bg: "#fff",
  },
  {
    id: "equipment",
    img: "/IMG/img2.jpeg",
    imgAlt: "Workers on elevating machinery for fire system installation",
    en: {
      badge: "Advanced Equipment",
      heading: "Advanced Execution & Equipment",
      body: "Delivering top-tier fire safety systems requires top-tier tools. Equipped with cutting-edge elevating machinery and advanced platforms, our experts handle complex installations at any height and scale with total precision and confidence.",
      checks: ["Complex Multi-Floor Installations", "All Heights & Scales"],
    },
    ar: {
      badge: "معدات متقدمة",
      heading: "معدات حديثة وتنفيذ احترافي",
      body: "تقديم أنظمة إطفاء عالية الجودة يتطلب أدوات متطورة. بالاعتماد على أحدث آلات الرفع والمعدات المتقدمة، يتمكن خبراؤنا من التعامل مع التركيبات المعقدة على أي ارتفاع وبمختلف الأحجام بدقة وثقة تامة.",
      checks: ["تركيبات معقدة متعددة الطوابق", "جميع الارتفاعات والأحجام"],
    },
    imgLeft: false,
    bg: "var(--color-surface-container-low)",
  },
  {
    id: "environments",
    img: "/IMG/img5.jpeg",
    imgAlt: "Fire safety equipment installed in a hospital environment",
    en: {
      badge: "Specialized Solutions",
      heading: "Supply & Installation of All Fire Protection Systems",
      body: "We offer a complete range of fire safety services tailored to every facility type — from early detection to full suppression systems and annual maintenance contracts.",
      checks: [
        "Supply & installation of all fire suppression, sprinkler, and hydrant systems",
        "Conventional and addressable fire alarm systems",
        "Supply & installation of all types of fire pumps and maintenance",
        "Supply & installation of fire hose cabinets",
        "Supply of all fire extinguisher types: powder, gas, and foam",
        "Annual maintenance contracts with periodic inspections throughout the year",
        "Fire plan drawing, approval, and evacuation plan design for factories, hotels, and schools",
      ],
    },
    ar: {
      badge: "حلول متخصصة",
      heading: "توريد وتركيب جميع انظمة مكافحة الحرائق",
      body: "نقدم مجموعة متكاملة من خدمات السلامة من الحرائق المصممة لكل نوع من المنشآت — من الكشف المبكر إلى أنظمة الإطفاء الكاملة وعقود الصيانة السنوية.",
      checks: [
        "توريد وتركيب جميع انظمة الاطفاء والرش الآلي وخطوط الحريق",
        "انظمة الانذار المبكر للحريق العادي والمعنون",
        "توريد وتركيب جميع انواع مضخات الحريق والصيانة",
        "توريد وتركيب صناديق إطفاء الحريق",
        "توريد جميع انواع طفايات الحريق البودرة والغاز والرغوة",
        "عقود صيانة سنوية تتضمن زيارة دورية على مدار العام يتم فحص النظام",
        "رسم واعتماد مخططات الحريق وخطط الاخلاء للمصانع والفنادق والمدارس",
      ],
    },
    imgLeft: true,
    bg: "#fff",
  },
];

const copy = {
  en: {
    badge: "Excellence in Fire Protection",
    h1a: "TopSafety: ",
    h1b: "Your First Line of Defense",
    sub: "We provide comprehensive fire safety solutions — from site assessment to civil defense handover. Your facility's safety is our top priority.",
    cta1: "Get a Free Inspection",
    cta2: "View Our Work",
    stats: [["99.9%", "System Uptime"], ["500+", "Projects Done"], ["0ms", "Response Lag"]],
    sysLabel: "System Architecture",
    sysH: "Sophisticated System Architecture",
    sysPara: "We don't just install systems; we engineer solutions. Every pipe, valve, and control unit is meticulously structured for optimal performance and rapid response during critical moments.",
    sysBtn: "Get a Free Inspection",
    ctaBannerH: "Ready to Secure Your Facility?",
    ctaBannerSub: "Contact us today for a free site inspection and custom quotation.",
    ctaBannerBtn: "Contact Us Now",
  },
  ar: {
    badge: "قمة في حماية الحريق",
    h1a: "قمة السلامة: ",
    h1b: "خط دفاعك الأول",
    sub: "نقدم لك حلولاً متكاملة لتأمين مشروعك بأعلى معايير الجودة والسلامة — من دراسة الموقع حتى التسليم للحماية المدنية. سلامة مكانك وأفرادك مسؤوليتنا الأولى.",
    cta1: "احصل على معاينة مجانية",
    cta2: "تصفح أعمالنا",
    stats: [["99.9%", "وقت تشغيل النظام"], ["500+", "مشروع منجز"], ["0ms", "تأخير الاستجابة"]],
    sysLabel: "البنية الهندسية",
    sysH: "تصميمات هندسية دقيقة ومتطورة",
    sysPara: "نحن لا نقوم بتركيب الأنظمة فحسب، بل نبتكر حلولاً هندسية. يتم تخطيط كل أنبوب وصمام ووحدة تحكم بدقة متناهية لضمان الأداء الأمثل والاستجابة السريعة.",
    sysBtn: "احصل على معاينة مجانية",
    ctaBannerH: "جاهز لتأمين منشأتك؟",
    ctaBannerSub: "تواصل معنا اليوم للحصول على معاينة مجانية وعرض سعر مخصص.",
    ctaBannerBtn: "تواصل معنا الآن",
  },
};

export default function HomePage() {
  const { lang, isAr } = useLang();
  const tx = copy[lang];
  const fontFamily = isAr ? "Cairo, sans-serif" : "Inter, sans-serif";

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "8rem",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #fff 0%, #f9f9f9 50%, #ffdad4 100%)",
          fontFamily,
        }}
      >
        <div style={{ position: "absolute", top: "15%", right: "-5%", width: "28rem", height: "28rem", background: "rgba(153,0,0,0.06)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "22rem", height: "22rem", background: "rgba(100,23,0,0.05)", borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />

        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.5rem 1.25rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "9999px", marginBottom: "2rem", backdropFilter: "blur(12px)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "var(--color-primary)" }} className="animate-pulse" />
            <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-primary)" }}>{tx.badge}</span>
          </div>

          {/* H1 */}
          <h1 className="text-display-lg" style={{ color: "var(--color-on-surface)", maxWidth: "900px", margin: "0 auto 1.5rem" }}>
            {tx.h1a}<span style={{ color: "var(--color-primary)" }}>{tx.h1b}</span>
          </h1>

          {/* Sub-copy */}
          <p style={{ fontSize: "1rem", color: "var(--color-secondary)", maxWidth: "660px", margin: "0 auto 2.5rem", lineHeight: "1.8" }}>
            {tx.sub}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact" style={{ textDecoration: "none", padding: "0.875rem 2rem", background: "var(--color-primary)", color: "#fff", borderRadius: "9999px", fontWeight: 700, fontSize: "0.95rem", boxShadow: "0 8px 24px rgba(110,0,0,0.25)" }}>
              {tx.cta1}
            </Link>
            <Link href="/#services" style={{ textDecoration: "none", padding: "0.875rem 2rem", background: "transparent", color: "var(--color-on-surface)", borderRadius: "9999px", fontWeight: 700, fontSize: "0.95rem", border: "2px solid var(--color-on-surface)" }}>
              {tx.cta2}
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", justifyContent: "center", marginTop: "4rem" }}>
            {tx.stats.map(([val, label]) => (
              <div key={val} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--color-primary)", lineHeight: 1 }}>{val}</p>
                <p style={{ fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-secondary)", marginTop: "0.35rem" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTERNATING SECTIONS ─────────────────── */}
      <div id="services">
        {sections.map((s) => {
          const sc = s[lang];
          const imgOrder = s.imgLeft ? 1 : 2;
          const txtOrder = s.imgLeft ? 2 : 1;
          return (
            <section key={s.id} id={s.id} style={{ background: s.bg, padding: "5rem 1.5rem", fontFamily }}>
              <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
                {/* Image */}
                <div style={{ order: imgOrder, borderRadius: "2rem", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)", position: "relative", aspectRatio: "4/3" }} className="group">
                  <Image src={s.img} alt={s.imgAlt} fill loading="lazy" className="img-zoom" style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                {/* Text */}
                <div style={{ order: txtOrder, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-primary)" }}>{sc.badge}</span>
                  <h2 className="text-headline-md" style={{ color: "var(--color-on-surface)" }}>{sc.heading}</h2>
                  <p style={{ color: "var(--color-secondary)", lineHeight: "1.8", fontSize: "0.95rem" }}>{sc.body}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "0.25rem" }}>
                    {sc.checks.map((c) => (
                      <li key={c} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <span style={{ width: "1.4rem", height: "1.4rem", borderRadius: "50%", background: "var(--color-primary-fixed)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>
                        </span>
                        <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--color-on-surface)" }}>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── SYSTEMS GRID (crimson bg) ─────────────── */}
      <section style={{ background: "var(--color-primary)", padding: "5rem 1.5rem", fontFamily }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,218,212,0.8)" }}>{tx.sysLabel}</span>
            <h2 className="text-headline-md" style={{ color: "#fff", marginTop: "0.5rem" }}>{tx.sysH}</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "1rem", maxWidth: "560px", lineHeight: "1.8", fontSize: "0.95rem" }}>{tx.sysPara}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { src: "/IMG/img4.jpeg", alt: "Organized fire system components and pipework" },
              { src: "/IMG/img6.jpg",  alt: "Sophisticated fire control system installation" },
            ].map((img) => (
              <div key={img.src} style={{ borderRadius: "2rem", overflow: "hidden", position: "relative", aspectRatio: "4/3", boxShadow: "0 16px 48px rgba(0,0,0,0.3)" }} className="group">
                <Image src={img.src} alt={img.alt} fill loading="lazy" className="img-zoom" style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(110,0,0,0.4) 0%, transparent 60%)" }} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "var(--color-primary)", padding: "0.875rem 2rem", borderRadius: "9999px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}>
              {tx.sysBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────── */}
      <section style={{ background: "var(--color-surface-container-high)", padding: "5rem 1.5rem", textAlign: "center", fontFamily }}>
        <div className="container" style={{ maxWidth: "640px" }}>
          <h2 className="text-headline-md" style={{ color: "var(--color-on-surface)", marginBottom: "1rem" }}>{tx.ctaBannerH}</h2>
          <p style={{ color: "var(--color-secondary)", marginBottom: "2rem", lineHeight: "1.75" }}>{tx.ctaBannerSub}</p>
          <Link href="/contact" style={{ textDecoration: "none", padding: "1rem 2.5rem", background: "var(--color-primary)", color: "#fff", borderRadius: "9999px", fontWeight: 700, fontSize: "1rem", display: "inline-block" }}>
            {tx.ctaBannerBtn}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
