import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import Paragraph from '@UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const WhyChooseUs = () => {
  const { getTranslation } = useTranslationNamespace('whyChooseUs');
  return (
    <section className={cl.whyChooseUsWrapper}>
      <Heading type="h2">{getTranslation('whyChooseUs')}</Heading>
      <div className={cl.figuresWrapper}>
        <figure>
          <img src="/images/whyChooseUs/discount.webp" alt={getTranslation('firstAlt')} />
          <figcaption>
            <Heading type="h3">{getTranslation('firstTitle')}</Heading>
            <Paragraph type="body2">{getTranslation('firstParagraph')}</Paragraph>
          </figcaption>
        </figure>
        <figure>
          <img src="/images/whyChooseUs/fastDelivery.webp" alt={getTranslation('secondAlt')} />
          <figcaption>
            <Heading type="h3">{getTranslation('secondTitle')}</Heading>
            <Paragraph type="body2">{getTranslation('secondParagraph')}</Paragraph>
          </figcaption>
        </figure>
        <figure>
          <img src="/images/whyChooseUs/quality.webp" alt={getTranslation('thirdAlt')} />
          <figcaption>
            <Heading type="h3">{getTranslation('thirdTitle')}</Heading>
            <Paragraph type="body2">{getTranslation('thirdParagraph')}</Paragraph>
          </figcaption>
        </figure>
        <figure>
          <img src={'/images/whyChooseUs/thumbUp.webp'} alt={getTranslation('fourthAlt')} />
          <figcaption>
            <Heading type="h3">{getTranslation('fourthTitle')}</Heading>
            <Paragraph type="body2">{getTranslation('fourthParagraph')}</Paragraph>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
export default WhyChooseUs;
