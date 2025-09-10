import i18n from '@config/i18next';

export const changeLanguage = (language) => {
  i18n.changeLanguage(language);
  localStorage.setItem('language', language);
};
