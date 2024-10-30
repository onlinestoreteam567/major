import cl from './index.module.scss';
import png1 from '@assets/png/catalog/1.png';
import png2 from '@assets/png/catalog/2.png';
import png3 from '@assets/png/catalog/3.png';
import png4 from '@assets/png/catalog/4.png';
import png5 from '@assets/png/catalog/5.png';
import png6 from '@assets/png/catalog/6.png';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Catalog = () => {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.catalogWrapper}>
      <h2>{getTranslation('catalog')}</h2>
      <section>
        <section>
          <figure>
            <img src={png1} alt="" />
            <figcaption>{getTranslation('normal hair')}</figcaption>
          </figure>
          <figure>
            <img src={png2} alt="" />
            <figcaption>{getTranslation('colored hair')}</figcaption>
          </figure>
          <figure>
            <img src={png3} alt="" />
            <figcaption>{getTranslation('damaged hair')}</figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src={png4} alt="" />
            <figcaption>{getTranslation('thin hair')}</figcaption>
          </figure>
          <figure>
            <img src={png5} alt="" />
            <figcaption>{getTranslation('deep conditioning')}</figcaption>
          </figure>
          <figure>
            <img src={png6} alt="" />
            <figcaption>{getTranslation('hair growth')}</figcaption>
          </figure>
        </section>
      </section>
    </div>
  );
};
export default Catalog;
