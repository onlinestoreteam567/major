import cl from './index.module.scss';
import discountIcon from '@assets/png/whyChooseUs/discount.png';
import fastDeliveryIcon from '@assets/png/whyChooseUs/fastDelivery.png';
import qualityIcon from '@assets/png/whyChooseUs/quality.png';
import thumbUpIcon from '@assets/png/whyChooseUs/thumbUp.png';
import Heading from '@components/UI/Heading/Heading';
import Paragraph from '@components/UI/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const WhyChooseUs = () => {
  const { getTranslation } = useTranslationNamespace('whyChooseUs');
  return (
    <div className={cl.whyChooseUsWrapper}>
      <Heading type="h2">{getTranslation('whyChooseUs')}</Heading>
      <section className={cl.figuresWrapper}>
        <section>
          <figure>
            <img src={discountIcon} alt={getTranslation('firstAlt')} />
            <figcaption>
              <Heading type="h3">{getTranslation('firstTitle')}</Heading>
              <Paragraph>{getTranslation('firstParagraph')}</Paragraph>
            </figcaption>
          </figure>
          <figure>
            <img src={fastDeliveryIcon} alt={getTranslation('secondAlt')} />
            <figcaption>
              <Heading type="h3">{getTranslation('secondTitle')}</Heading>
              <Paragraph>{getTranslation('secondParagraph')}</Paragraph>
            </figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src={qualityIcon} alt={getTranslation('thirdAlt')} />
            <figcaption>
              <Heading type="h3">{getTranslation('thirdTitle')}</Heading>
              <Paragraph>{getTranslation('thirdParagraph')}</Paragraph>
            </figcaption>
          </figure>
          <figure>
            <img src={thumbUpIcon} alt={getTranslation('fourthAlt')} />
            <figcaption>
              <Heading type="h3">{getTranslation('fourthTitle')}</Heading>
              <Paragraph>{getTranslation('fourthParagraph')}</Paragraph>
            </figcaption>
          </figure>
        </section>
      </section>
    </div>
  );
};
export default WhyChooseUs;
