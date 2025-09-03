import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const OriginStorySection = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  return (
    <section className={cl.originStorySection}>
      <Heading type="h2">{getTranslation('originStorySectionTitle')}</Heading>
      <img src="/images/about/pandemic.webp" alt={getTranslation('originStorySectionImgAlt')} />
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
