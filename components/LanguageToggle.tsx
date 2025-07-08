"use client";

import { motion } from "framer-motion";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale, ts } = useLanguage();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "id" : "en";
    setLocale(newLocale);
    window.location.reload();
  };

  const switchLabel =
    locale === "en"
      ? ts("languageToggle.indonesian")
      : ts("languageToggle.english");

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10"
    >
      <GlobeAltIcon className="w-4 h-4" />
      <span>{switchLabel}</span>
    </motion.button>
  );
}
