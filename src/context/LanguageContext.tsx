"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { vi, LocaleData } from "@/data/locales/vi";
import { en } from "@/data/locales/en";

export type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  data: LocaleData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as Language;
    if (storedLang === "en") {
      const animFrameId = requestAnimationFrame(() => {
        setLanguageState(storedLang);
      });
      return () => cancelAnimationFrame(animFrameId);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  const currentLocale = language === "en" ? en : vi;

  const t = (key: string): string => {
    return currentLocale.ui[key] || vi.ui[key] || key;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
    data: currentLocale,
  };

  // Render a minimal loader or skeleton, or just render children normally.
  // To avoid hydration warnings due to mismatching languages between SSR (always "vi") and localStorage (could be "en"),
  // we can either return the provider once mounted, or just let it render children.
  // To prevent visual flickers, rendering normally works fine, but we suppress potential hydration warnings if any.
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
