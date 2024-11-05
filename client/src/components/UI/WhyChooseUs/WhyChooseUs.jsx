import cl from './index.module.scss';
import discountIcon from '@assets/png/whyChooseUs/discount.png';
import fastDeliveryIcon from '@assets/png/whyChooseUs/fastDelivery.png';
import qualityIcon from '@assets/png/whyChooseUs/quality.png';
import thumbUpIcon from '@assets/png/whyChooseUs/thumbUp.png';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const WhyChooseUs = () => {
  const { getTranslation } = useTranslationNamespace('whyChooseUs');
  return (
    <div className={cl.whyChooseUsWrapper}>
      <h2>{getTranslation('whyChooseUs')}</h2>
      <section className={cl.figuresWrapper}>
        <section>
          <figure>
            <img src={discountIcon} alt={getTranslation('firstAlt')} />
            <figcaption>
              <h3>{getTranslation('firstTitle')}</h3>
              <p>{getTranslation('firstParagraph')}</p>
            </figcaption>
          </figure>
          <figure>
            <img src={fastDeliveryIcon} alt={getTranslation('secondAlt')} />
            <figcaption>
              <h3>{getTranslation('secondTitle')}</h3>
              <p>{getTranslation('secondParagraph')}</p>
            </figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src={qualityIcon} alt={getTranslation('thirdAlt')} />
            <figcaption>
              <h3>{getTranslation('thirdTitle')}</h3>
              <p>{getTranslation('thirdParagraph')}</p>
            </figcaption>
          </figure>
          <figure>
            <img src={thumbUpIcon} alt={getTranslation('fourthAlt')} />
            <figcaption>
              <h3>{getTranslation('fourthTitle')}</h3>
              <p>{getTranslation('fourthParagraph')}</p>
            </figcaption>
          </figure>
        </section>
      </section>
    </div>
  );
};
export default WhyChooseUs;
