import { useTranslation } from 'react-i18next';

const useTranslationNamespace = (defaultNamespace = '') => {
  const { t } = useTranslation();

  const getTranslation = (key, namespace = defaultNamespace) => {
    return t(key, { ns: namespace });
  };

  return { getTranslation };
};

export default useTranslationNamespace;
