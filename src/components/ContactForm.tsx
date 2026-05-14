"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/context/LanguageContext";

interface FormState {
  name: string;
  email: string;
  subject: string;
  description: string;
}

const t = {
  en: {
    nameLabel: "Full Name",
    namePlaceholder: "e.g. Ahmed Hassan",
    emailLabel: "Your Email Address",
    emailPlaceholder: "e.g. ahmed@company.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "e.g. Fire alarm system for warehouse",
    descLabel: "Project Description",
    descPlaceholder: "Tell us about your project — location, building type, floor count, special requirements...",
    submit: "Send Message",
    hint: "This will open your email client pre-filled to",
    successTitle: "Email client opened!",
    successBody: "Your default email app has launched with the message pre-filled. Please send it to complete your inquiry.",
    sendAnother: "Send Another Message",
  },
  ar: {
    nameLabel: "الاسم الكامل",
    namePlaceholder: "مثال: أحمد حسن",
    emailLabel: "بريدك الإلكتروني",
    emailPlaceholder: "مثال: ahmed@company.com",
    subjectLabel: "الموضوع",
    subjectPlaceholder: "مثال: نظام إنذار حريق لمستودع",
    descLabel: "وصف المشروع",
    descPlaceholder: "أخبرنا عن مشروعك — الموقع، نوع المبنى، عدد الطوابق، أي متطلبات خاصة...",
    submit: "إرسال الرسالة",
    hint: "سيفتح عميل البريد الإلكتروني مُعبّأً مسبقاً إلى",
    successTitle: "!تم فتح عميل البريد",
    successBody: "تم تشغيل تطبيق البريد الإلكتروني مع الرسالة جاهزة. يرجى إرسالها لإكمال استفسارك.",
    sendAnother: "إرسال رسالة أخرى",
  },
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.8rem 1rem",
  borderRadius: "0.625rem",
  border: "1.5px solid #d1d5db",
  background: "#fff",
  fontSize: "0.95rem",
  color: "var(--color-on-surface)",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.85rem",
  fontWeight: 600,
  marginBottom: "0.4rem",
  color: "var(--color-on-surface-variant)",
};

export default function ContactForm() {
  const { lang, isAr } = useLang();
  const tx = t[lang];

  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Inquiry — TopSafety Website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n--- Project Description ---\n${form.description}`
    );
    window.location.href = `mailto:sales@TOPSAFTY-EG.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const getFocusStyle = (name: string): React.CSSProperties =>
    focused === name
      ? { borderColor: "var(--color-primary)", boxShadow: "0 0 0 3px rgba(110,0,0,0.1)" }
      : {};

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>✅</div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-primary)", marginBottom: "0.75rem", fontFamily: isAr ? "Cairo, sans-serif" : "inherit" }}>
          {tx.successTitle}
        </h3>
        <p style={{ color: "#6b7280", lineHeight: "1.7", marginBottom: "1.5rem", fontFamily: isAr ? "Cairo, sans-serif" : "inherit" }}>
          {tx.successBody}
        </p>
        <p style={{ fontSize: "0.85rem", color: "#9ca3af", marginBottom: "1.5rem" }}>
          sales@TOPSAFTY-EG.com
        </p>
        <button
          onClick={() => setSubmitted(false)}
          style={{ padding: "0.7rem 1.75rem", borderRadius: "9999px", border: "2px solid var(--color-primary)", background: "transparent", color: "var(--color-primary)", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", fontFamily: isAr ? "Cairo, sans-serif" : "inherit" }}
        >
          {tx.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%" }} noValidate>

      {/* Name */}
      <div>
        <label htmlFor="cf-name" style={{ ...labelStyle, fontFamily: isAr ? "Cairo, sans-serif" : "inherit" }}>{tx.nameLabel}</label>
        <input
          id="cf-name" name="name" type="text" required
          placeholder={tx.namePlaceholder}
          value={form.name} onChange={handleChange}
          onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
          style={{ ...fieldStyle, ...getFocusStyle("name"), direction: isAr ? "rtl" : "ltr" }}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" style={{ ...labelStyle, fontFamily: isAr ? "Cairo, sans-serif" : "inherit" }}>{tx.emailLabel}</label>
        <input
          id="cf-email" name="email" type="email" required
          placeholder={tx.emailPlaceholder}
          value={form.email} onChange={handleChange}
          onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
          style={{ ...fieldStyle, ...getFocusStyle("email"), direction: "ltr" }}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="cf-subject" style={{ ...labelStyle, fontFamily: isAr ? "Cairo, sans-serif" : "inherit" }}>{tx.subjectLabel}</label>
        <input
          id="cf-subject" name="subject" type="text" required
          placeholder={tx.subjectPlaceholder}
          value={form.subject} onChange={handleChange}
          onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
          style={{ ...fieldStyle, ...getFocusStyle("subject"), direction: isAr ? "rtl" : "ltr", fontFamily: isAr ? "Cairo, sans-serif" : "inherit" }}
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="cf-description" style={{ ...labelStyle, fontFamily: isAr ? "Cairo, sans-serif" : "inherit" }}>{tx.descLabel}</label>
        <textarea
          id="cf-description" name="description" required
          placeholder={tx.descPlaceholder}
          value={form.description} onChange={handleChange}
          onFocus={() => setFocused("description")} onBlur={() => setFocused(null)}
          rows={5}
          style={{ ...fieldStyle, ...getFocusStyle("description"), borderRadius: "0.75rem", resize: "vertical", minHeight: "130px", direction: isAr ? "rtl" : "ltr", fontFamily: isAr ? "Cairo, sans-serif" : "inherit" }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        id="contact-submit-btn"
        style={{
          width: "100%",
          padding: "0.9rem",
          background: "var(--color-primary)",
          color: "#fff",
          borderRadius: "9999px",
          border: "none",
          fontWeight: 700,
          fontSize: "0.95rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          transition: "background 0.2s, transform 0.15s",
          fontFamily: isAr ? "Cairo, sans-serif" : "inherit",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-primary-container)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-primary)"; }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/>
        </svg>
        {tx.submit}
      </button>

      <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#9ca3af", fontFamily: isAr ? "Cairo, sans-serif" : "inherit" }}>
        {tx.hint}{" "}<span style={{ color: "var(--color-primary)", fontWeight: 600 }}>sales@TOPSAFTY-EG.com</span>
      </p>
    </form>
  );
}
