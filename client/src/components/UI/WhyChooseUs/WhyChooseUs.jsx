import cl from './index.module.scss';
import discountIcon from '../../../assets/png/whyChooseUs/discount.png';
import fastDeliveryIcon from '../../../assets/png/whyChooseUs/fastDelivery.png';
import qualityIcon from '../../../assets/png/whyChooseUs/quality.png';
import thumbUpIcon from '../../../assets/png/whyChooseUs/thumbUp.png';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <div className={cl.whyChooseUsWrapper}>
      <h2>{t('why choose us', { ns: 'whyChooseUs' })}</h2>
      <section className={cl.figuresWrapper}>
        <section>
          <figure>
            <img src={discountIcon} alt={t('first alt', { ns: 'whyChooseUs' })} />
            <figcaption>
              <h3>{t('first title', { ns: 'whyChooseUs' })}</h3>
              <p>{t('first paragraph', { ns: 'whyChooseUs' })}</p>
            </figcaption>
          </figure>
          <figure>
            <img src={fastDeliveryIcon} alt={t('second alt', { ns: 'whyChooseUs' })} />
            <figcaption>
              <h3>{t('second title', { ns: 'whyChooseUs' })}</h3>
              <p>{t('second paragraph', { ns: 'whyChooseUs' })}</p>
            </figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src={qualityIcon} alt={t('third alt', { ns: 'whyChooseUs' })} />
            <figcaption>
              <h3>{t('third title', { ns: 'whyChooseUs' })}</h3>
              <p>{t('third paragraph', { ns: 'whyChooseUs' })}</p>
            </figcaption>
          </figure>
          <figure>
            <img src={thumbUpIcon} alt={t('fourth alt', { ns: 'whyChooseUs' })} />
            <figcaption>
              <h3>{t('fourth title', { ns: 'whyChooseUs' })}</h3>
              <p>{t('fourth paragraph', { ns: 'whyChooseUs' })}</p>
            </figcaption>
          </figure>
        </section>
      </section>
    </div>
  );
};
export default WhyChooseUs;
