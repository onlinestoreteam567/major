import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const BottomSection = () => {
  const { getTranslation } = useTranslationNamespace('footer');
  return (
    <section className={cl.bottomSection}>
      <hr />
      <p>{getTranslation('copyright')}</p>
    </section>
  );
};
export default BottomSection;
