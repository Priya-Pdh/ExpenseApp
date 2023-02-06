import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en-US/translation.json';
import translationSV from './locales/sv-SE/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  sv: {
    translation: translationSV,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: ['en'],
  debug: false,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
