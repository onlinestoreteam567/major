import cl from './index.module.scss';
import Heading from '@components/UI/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Catalog = () => {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <section className={cl.catalogWrapper}>
      <Heading type="h2">{getTranslation('catalog')}</Heading>
      <section>
        <figure>
          <img src="/images/catalog/1.png" alt="" />
          <figcaption>{getTranslation('normalHair')}</figcaption>
        </figure>
        <figure>
          <img src="/images/catalog/2.png" alt="" />
          <figcaption>{getTranslation('coloredHair')}</figcaption>
        </figure>
        <figure>
          <img src="/images/catalog/3.png" alt="" />
          <figcaption>{getTranslation('damagedHair')}</figcaption>
        </figure>
        <figure>
          <img src="/images/catalog/4.png" alt="" />
          <figcaption>{getTranslation('thinHair')}</figcaption>
        </figure>
        <figure>
          <img src="/images/catalog/5.png" alt="" />
          <figcaption>{getTranslation('deepConditioning')}</figcaption>
        </figure>
        <figure>
          <img src="/images/catalog/6.png" alt="" />
          <figcaption>{getTranslation('hairGrowth')}</figcaption>
        </figure>
      </section>
    </section>
  );
};
export default Catalog;
