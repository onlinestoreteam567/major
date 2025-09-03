import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const OurProduction = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  return (
    <section className={cl.ourProduction}>
      <Heading type="h2">{getTranslation('ourProductionTitle')}</Heading>
      <img src="/images/about/ourProduction.webp" alt={getTranslation('ourProductionAlt')} />
      <div>
        <Paragraph type="body1">{getTranslation('ourProductionParagraph1')}</Paragraph>
        <Paragraph type="body1">{getTranslation('ourProductionParagraph2')}</Paragraph>
      </div>
    </section>
  );
};
export default OurProduction;
