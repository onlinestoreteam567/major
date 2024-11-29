import { useTranslation } from 'react-i18next';
import { changeLanguage } from '@utils/changeLanguage';

const I18next = () => {
  const { t } = useTranslation();
  return (
    <>
      <div style={{ color: 'black' }}>{t('text')}</div>
      <button onClick={() => changeLanguage('en')}>SWITCH TO EN</button>
      <button onClick={() => changeLanguage('ua')}>SWITCH TO UA</button>
    </>
  );
};

export default I18next;
