import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

export function initLocales() {
  i18next.use(LanguageDetector).init({
    supportedLngs: ['en', 'ru'],
    detection: {order:['navigator']},
    debug: true,
    resources: {
      en: {
        translation: {
          INTRO_DIALOGUE_1:
            "Norman wasn't a particularly popular necromancer...",
        },
      },
      ru: {
        translation: {
          INTRO_DIALOGUE_1:
            "Норман не был особенно популярным некромантом...",
        },
      },
    },
  });
}
