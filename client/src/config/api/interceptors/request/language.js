import i18n from 'i18next';

// Dynamically set the Accept-Language header
export const applyLanguageInterceptor = (apiClient) => {
  apiClient.interceptors.request.use(
    (config) => {
      const defaultLanguage = 'ua';
      config.headers['Accept-Language'] = i18n.language || defaultLanguage;
      return config;
    },
    (error) => Promise.reject(error)
  );
};
