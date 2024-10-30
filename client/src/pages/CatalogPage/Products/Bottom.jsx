import cl from './index.module.scss';
import { useTranslation } from 'react-i18next';

const Bottom = () => {
  const { t } = useTranslation();

  return (
    <section className={cl.bottom}>
      <p>{t('showing', { ns: 'catalogPage' })}</p>
      <button>{t('load more', { ns: 'catalogPage' })}</button>
    </section>
  );
};
export default Bottom;
