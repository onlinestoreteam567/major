import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import Paragraph from '@UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const WhyChooseUs = () => {
  const { getTranslation } = useTranslationNamespace('whyChooseUs');
  return (
    <section className={cl.whyChooseUsWrapper}>
      <Heading type="h2">{getTranslation('whyChooseUs')}</Heading>
      <section className={cl.figuresWrapper}>
        <section>
          <figure>
            <img src="/images/whyChooseUs/discount.png" alt={getTranslation('firstAlt')} />
            <figcaption>
              <Heading type="h3">{getTranslation('firstTitle')}</Heading>
              <Paragraph type="body2">{getTranslation('firstParagraph')}</Paragraph>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/whyChooseUs/fastDelivery.png" alt={getTranslation('secondAlt')} />
            <figcaption>
              <Heading type="h3">{getTranslation('secondTitle')}</Heading>
              <Paragraph type="body2">{getTranslation('secondParagraph')}</Paragraph>
            </figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src="/images/whyChooseUs/quality.png" alt={getTranslation('thirdAlt')} />
            <figcaption>
              <Heading type="h3">{getTranslation('thirdTitle')}</Heading>
              <Paragraph type="body2">{getTranslation('thirdParagraph')}</Paragraph>
            </figcaption>
          </figure>
          <figure>
            <img src={'/images/whyChooseUs/thumbUp.png'} alt={getTranslation('fourthAlt')} />
            <figcaption>
              <Heading type="h3">{getTranslation('fourthTitle')}</Heading>
              <Paragraph type="body2">{getTranslation('fourthParagraph')}</Paragraph>
            </figcaption>
          </figure>
        </section>
      </section>
    </section>
  );
};
export default WhyChooseUs;
