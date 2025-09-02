import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const FooterCopyrightSection = () => {
  const { getTranslation } = useTranslationNamespace('footer');
  return (
    <section className={cl.footerCopyrightSection}>
      <hr />
      <h3>{getTranslation('copyright')}</h3>
    </section>
  );
};
export default FooterCopyrightSection;
