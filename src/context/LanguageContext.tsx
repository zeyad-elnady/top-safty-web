"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar";

interface LangContextValue {
  lang: Lang;
  toggleLang: () => void;
  isAr: boolean;
}

const LangContext = createContext<LangContextValue>({
  lang: "ar",
  toggleLang: () => {},
  isAr: true,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggleLang, isAr: lang === "ar" }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang} style={{ minHeight: "100vh" }}>
        {children}
      </div>
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
