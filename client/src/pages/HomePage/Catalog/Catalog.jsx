import cl from './index.module.scss';
import png1 from '@assets/png/catalog/1.png';
import png2 from '@assets/png/catalog/2.png';
import png3 from '@assets/png/catalog/3.png';
import png4 from '@assets/png/catalog/4.png';
import png5 from '@assets/png/catalog/5.png';
import png6 from '@assets/png/catalog/6.png';
import H2 from '@components/UI/Hs/H2/H2';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Catalog = () => {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.catalogWrapper}>
      <H2>{getTranslation('catalog')}</H2>
      <section>
        <figure>
          <img src={png1} alt="" />
          <figcaption>{getTranslation('normalHair')}</figcaption>
        </figure>
        <figure>
          <img src={png2} alt="" />
          <figcaption>{getTranslation('coloredHair')}</figcaption>
        </figure>
        <figure>
          <img src={png3} alt="" />
          <figcaption>{getTranslation('damagedHair')}</figcaption>
        </figure>
        <figure>
          <img src={png4} alt="" />
          <figcaption>{getTranslation('thinHair')}</figcaption>
        </figure>
        <figure>
          <img src={png5} alt="" />
          <figcaption>{getTranslation('deepConditioning')}</figcaption>
        </figure>
        <figure>
          <img src={png6} alt="" />
          <figcaption>{getTranslation('hairGrowth')}</figcaption>
        </figure>
      </section>
    </div>
  );
};
export default Catalog;
