import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { DateTime } from "luxon";

import ns1 from "helpers/i18n/locales/en/ns1.json";
import ns2 from "helpers/i18n/locales/en/ns2.json";

const resources = {
  en: { translation: ns1 },
  ua: { translation: ns2 },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    resources,
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (!lng || !format) return;

        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime.DATE_HUGE);
        }
        return value;
      },
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
