import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
let savedLanguage = localStorage.getItem('language');

if (savedLanguage !== 'ua' && savedLanguage !== 'en') {
  savedLanguage = 'ua';
  localStorage.setItem('language', 'ua');
}

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua',
    lng: savedLanguage || 'ua',
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
      'checkoutPage',
      'aboutPage',
      'cooperationPage',

      // Components
      'yellowButton',
      'buttonClose',
      'buttonAriaLable',
      'reviewPopUp',

      // Modules/Sections
      'mainBanner',
      'majorInfo',
      'whyChooseUs',
      'ourPartners',
      'basket',
      'search',
      'card',
      'notFound',
      'errorPage',
    ],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
