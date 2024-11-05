import cl from './index.module.scss';
import discountIcon from '@assets/png/whyChooseUs/discount.png';
import fastDeliveryIcon from '@assets/png/whyChooseUs/fastDelivery.png';
import qualityIcon from '@assets/png/whyChooseUs/quality.png';
import thumbUpIcon from '@assets/png/whyChooseUs/thumbUp.png';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <div className={cl.whyChooseUsWrapper}>
      <h2>{t('whyChooseUs', { ns: 'whyChooseUs' })}</h2>
      <section className={cl.figuresWrapper}>
        <section>
          <figure>
            <img src={discountIcon} alt={t('firstAlt', { ns: 'whyChooseUs' })} />
            <figcaption>
              <h3>{t('firstTitle', { ns: 'whyChooseUs' })}</h3>
              <p>{t('firstParagraph', { ns: 'whyChooseUs' })}</p>
            </figcaption>
          </figure>
          <figure>
            <img src={fastDeliveryIcon} alt={t('second alt', { ns: 'whyChooseUs' })} />
            <figcaption>
              <h3>{t('secondTitle', { ns: 'whyChooseUs' })}</h3>
              <p>{t('secondParagraph', { ns: 'whyChooseUs' })}</p>
            </figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src={qualityIcon} alt={t('thirdAlt', { ns: 'whyChooseUs' })} />
            <figcaption>
              <h3>{t('thirdTitle', { ns: 'whyChooseUs' })}</h3>
              <p>{t('thirdParagraph', { ns: 'whyChooseUs' })}</p>
            </figcaption>
          </figure>
          <figure>
            <img src={thumbUpIcon} alt={t('fourth alt', { ns: 'whyChooseUs' })} />
            <figcaption>
              <h3>{t('fourthTitle', { ns: 'whyChooseUs' })}</h3>
              <p>{t('fourthParagraph', { ns: 'whyChooseUs' })}</p>
            </figcaption>
          </figure>
        </section>
      </section>
    </div>
  );
};
export default WhyChooseUs;
