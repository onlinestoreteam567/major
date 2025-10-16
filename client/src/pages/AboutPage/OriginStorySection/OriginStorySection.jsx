import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const OriginStorySection = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  const mobileImagePath = '/images/about/pandemicMobile.webp';
  const tabletImagePath = '/images/about/pandemicTablet.webp';
  const desktopImagePath = '/images/majorInfo/pandemicDesktop.webp';

  return (
    <section className={cl.originStorySection}>
      <Heading type="h2">{getTranslation('originStorySectionTitle')}</Heading>
      <picture>
        <source srcSet={tabletImagePath} media="(min-width: 768px)" />
        <source srcSet={desktopImagePath} media="(min-width: 1024px)" />
        <img src={mobileImagePath} alt={getTranslation('imgAlt')} />
      </picture>
      <div>
        <Paragraph type="body1">{getTranslation('originStorySectionFirstParagraph')}</Paragraph>
        <Paragraph type="body1">
          {getTranslation('originStorySectionSecondParagraph1')} <br />
          {getTranslation('originStorySectionSecondParagraph2')}
        </Paragraph>
      </div>
    </section>
  );
};
export default OriginStorySection;
