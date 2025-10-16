import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const OurProduction = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  const mobileImagePath = '/images/about/ourProductionMobile.webp';
  const desktopImagePath = '/images/about/ourProductionDesktop.webp';

  return (
    <section className={cl.ourProduction}>
      <Heading type="h2">{getTranslation('ourProductionTitle')}</Heading>
      <picture>
        <source srcSet={desktopImagePath} media="(min-width: 1024px)" />
        <img src={mobileImagePath} alt={getTranslation('ourProductionAlt')} />
      </picture>
      <div>
        <Paragraph type="body1">{getTranslation('ourProductionParagraph1')}</Paragraph>
        <Paragraph type="body1">{getTranslation('ourProductionParagraph2')}</Paragraph>
      </div>
    </section>
  );
};
export default OurProduction;
