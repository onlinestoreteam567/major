import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const FooterCopyrightSection = ({ contacts }) => {
  const { getTranslation } = useTranslationNamespace('footer');
  if (!contacts) return;

  const year = `${contacts[0].current_year}-${contacts[0].current_year + 1}`;

  return (
    <section className={cl.footerCopyrightSection}>
      <hr />
      <h3>
        {getTranslation('copyright1')} {year}, {getTranslation('copyright2')}
      </h3>
    </section>
  );
};
export default FooterCopyrightSection;
