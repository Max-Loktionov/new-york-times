import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import ns1 from "helpers/i18n/locales/en/ns1.json";
import ns2 from "helpers/i18n/locales/en/ns2.json";

// export const defaultNS = "ns1";
// export const resources = {
//   en: {
//     ns1,
//     ns2,
//   },
//   ua: { ns2 },
// } as const;

// i18n.use(initReactI18next).init({
//   lng: "en",
//   ns: ["ns1", "ns2"],
//   defaultNS,
//   resources,
// });
const resources = {
  en: {
    translation: ns1,
  },
  ua: { translation: ns2 },
};

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  //   .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
