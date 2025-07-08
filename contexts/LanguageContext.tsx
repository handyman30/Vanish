"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import enMessages from "../messages/en.json";
import idMessages from "../messages/id.json";

type LanguageContextType = {
  locale: string;
  t: (key: string) => string | any[] | object;
  ts: (key: string) => string;
  setLocale: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    const urlLocale = window.location.pathname.split("/")[1];
    const savedLocale = localStorage.getItem("locale") || "en";
    const currentLocale = urlLocale === "id" ? "id" : savedLocale;
    setLocaleState(currentLocale);
  }, []);

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);

    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    window.history.pushState({}, "", newPath);
  };

  const t = (key: string): string | any[] | object => {
    const messages = locale === "id" ? idMessages : enMessages;
    const keys = key.split(".");
    let value: any = messages;

    for (const k of keys) {
      value = value?.[k];
    }

    if (value === undefined || value === null) {
      return key;
    }

    return value;
  };

  const ts = (key: string): string => {
    const value = t(key);
    return typeof value === "string" ? value : "";
  };

  return (
    <LanguageContext.Provider value={{ locale, t, ts, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
