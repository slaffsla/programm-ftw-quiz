import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import ru from "./ru.json";
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: en,
      ru: ru,
    },
    interpolation: {
      escapeValue: false, // react already deals with xss
    },
  });

export default i18next;
