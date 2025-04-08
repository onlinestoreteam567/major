import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua',
    lng: 'ua',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: [
      // Global/General namespaces
      'common',
      'header',
      'footer',

      // Pages
      'catalogPage',

      // Components
      'yellowButton',
      'buttonClose',
      'buttonAriaLable',

      // Modules/Sections
      'mainBanner',
      'majorInfo',
      'whyChooseUs',
      'ourPartners',
      'basket',
      'search',
      'card',
    ],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
