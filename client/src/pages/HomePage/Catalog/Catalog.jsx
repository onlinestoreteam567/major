import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import LabelText from '@UI/Texts/LabelText/LabelText';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Catalog = () => {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <section className={cl.catalogWrapper}>
      <Heading type="h2">{getTranslation('catalog')}</Heading>
      <section>
        <figure>
          <img src="/images/catalog/1.png" alt="" />
          <figcaption>
            <LabelText>{getTranslation('normalHair')}</LabelText>
          </figcaption>
        </figure>
        <figure>
          <img src="/images/catalog/2.png" alt="" />
          <figcaption>
            <LabelText>{getTranslation('coloredHair')}</LabelText>
          </figcaption>
        </figure>
        <figure>
          <img src="/images/catalog/3.png" alt="" />
          <figcaption>
            <LabelText>{getTranslation('damagedHair')}</LabelText>
          </figcaption>
        </figure>
        <figure>
          <img src="/images/catalog/4.png" alt="" />
          <figcaption>
            <LabelText>{getTranslation('thinHair')}</LabelText>
          </figcaption>
        </figure>
        <figure>
          <img src="/images/catalog/5.png" alt="" />
          <figcaption>
            <LabelText>{getTranslation('deepConditioning')}</LabelText>
          </figcaption>
        </figure>
        <figure>
          <img src="/images/catalog/6.png" alt="" />
          <figcaption>
            <LabelText>{getTranslation('hairGrowth')}</LabelText>
          </figcaption>
        </figure>
      </section>
    </section>
  );
};
export default Catalog;
