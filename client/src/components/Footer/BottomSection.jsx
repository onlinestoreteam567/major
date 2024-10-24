import cl from './index.module.scss';
import { useTranslation } from 'react-i18next';
const BottomSection = () => {
  const { t } = useTranslation();

  return (
    <section className={cl.bottomSection}>
      <hr />
      <p>{t('copyright', { ns: 'footer' })}</p>
    </section>
  );
};
export default BottomSection;
