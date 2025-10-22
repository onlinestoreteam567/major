import Spinner from '@components/UI/Spinner/Spinner';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const FooterCopyrightSection = ({ contacts }) => {
  const { getTranslation } = useTranslationNamespace('footer');

  return (
    <section className={cl.footerCopyrightSection}>
      {!contacts ? (
        <Spinner />
      ) : (
        <>
          <hr />
          <h3>
            {getTranslation('copyright1')} {`${contacts[0].current_year}-${contacts[0].current_year + 1}`},
            {getTranslation('copyright2')}
          </h3>
        </>
      )}
    </section>
  );
};
export default FooterCopyrightSection;
