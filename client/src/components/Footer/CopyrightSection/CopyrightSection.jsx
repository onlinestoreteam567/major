import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const CopyrightSection = () => {
  const { getTranslation } = useTranslationNamespace('footer');
  return (
    <section className={cl.copyrightSection}>
      <hr />
      <h3>{getTranslation('copyright')}</h3>
    </section>
  );
};
export default CopyrightSection;
