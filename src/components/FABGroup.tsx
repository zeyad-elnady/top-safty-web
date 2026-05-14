"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

const copy = {
  en: {
    callTitle: "📞 Call Us",
    callSub: "Choose a number",
    cancel: "Cancel",
    phones: [
      { display: "+20 10 9166 4974", tel: "tel:+201091664974", label: "Sales Line" },
      { display: "011 1140 0982",    tel: "tel:01111400982",   label: "Technical Support Line" },
    ],
  },
  ar: {
    callTitle: "📞 اتصل بنا",
    callSub: "اختر رقم الاتصال",
    cancel: "إلغاء",
    phones: [
      { display: "+20 10 9166 4974", tel: "tel:+201091664974", label: "خط المبيعات" },
      { display: "011 1140 0982",    tel: "tel:01111400982",   label: "خط الدعم الفني" },
    ],
  },
};

export default function FABGroup() {
  const { lang, isAr } = useLang();
  const tx = copy[lang];
  const fontFamily = isAr ? "Cairo, sans-serif" : "Inter, sans-serif";
  const [callOpen, setCallOpen] = useState(false);

  return (
    <>
      {/* FAB Stack */}
      <div
        className="fixed bottom-8 left-6 flex flex-col gap-3 z-[80]"
        style={{ alignItems: "flex-start" }}
      >
        {/* Phone FAB */}
        <button
          id="phone-fab"
          aria-label="Call us"
          onClick={() => setCallOpen(true)}
          className="fab"
          style={{ background: "var(--color-tertiary-container)" }}
          title="Call us"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </button>

        {/* WhatsApp FAB */}
        <a
          id="whatsapp-fab"
          href="https://wa.me/201111400982"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fab"
          style={{ background: "#25D366" }}
          title="WhatsApp"
        >
          {/* WhatsApp icon SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L0 24l6.31-1.489A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.804 9.804 0 01-5.031-1.384l-.36-.213-3.748.884.886-3.65-.235-.374A9.82 9.82 0 012.18 12C2.18 6.57 6.57 2.18 12 2.18c5.43 0 9.82 4.39 9.82 9.82s-4.39 9.82-9.82 9.82z"/>
          </svg>
        </a>

        {/* Messenger FAB */}
        <a
          id="messenger-fab"
          href="https://m.me/qmtalslamtlanzmtalatfa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Messenger"
          className="fab"
          style={{ background: "#0084FF" }}
          title="Messenger"
        >
          {/* Messenger icon SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 3.506 1.558 6.651 4.026 8.835V24l3.807-2.094A12.06 12.06 0 0012 22.2c6.627 0 12-4.925 12-11s-5.373-11-12-11zm1.193 14.963l-3.055-3.26-5.963 3.26L10.35 8.79l3.131 3.26 5.887-3.26-6.175 6.173z"/>
          </svg>
        </a>
      </div>

      {/* Call Modal */}
      {callOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setCallOpen(false); }}
          role="dialog"
          aria-modal="true"
          aria-label={tx.callSub}
          dir={isAr ? "rtl" : "ltr"}
        >
          <div className="modal-box" style={{ fontFamily }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-headline-md" style={{ color: "var(--color-primary)", fontSize: "1.3rem", fontFamily }}>
                  {tx.callTitle}
                </h2>
                <p className="text-caption text-gray-400 mt-0.5">{tx.callSub}</p>
              </div>
              <button
                onClick={() => setCallOpen(false)}
                aria-label="Close"
                className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 text-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Phone options */}
            <div className="flex flex-col gap-3">
              {tx.phones.map((p) => (
                <a
                  key={p.tel}
                  href={p.tel}
                  className="flex items-center gap-4 p-4 rounded-2xl border-2 transition-all hover:border-red-900 hover:bg-red-50 group"
                  style={{ borderColor: "var(--color-outline-variant)", textDecoration: "none" }}
                  onClick={() => setCallOpen(false)}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: "var(--color-primary-fixed)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <p className="font-bold text-base" style={{ color: "var(--color-on-surface)", display: "flex" }}>
                      <span dir="ltr">{p.display}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{p.label}</p>
                  </div>
                  <svg className="ml-auto opacity-30 group-hover:opacity-80 transition-opacity" style={{ transform: isAr ? "rotate(180deg)" : "none" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Close link */}
            <button
              onClick={() => setCallOpen(false)}
              className="w-full mt-5 py-3 rounded-full text-sm font-semibold text-gray-400 hover:bg-gray-50 transition-colors"
            >
              {tx.cancel}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
