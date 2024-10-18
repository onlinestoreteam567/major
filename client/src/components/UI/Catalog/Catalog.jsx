import cl from './index.module.scss';
import png1 from '../../../assets/png/catalog/1.png';
import png2 from '../../../assets/png/catalog/2.png';
import png3 from '../../../assets/png/catalog/3.png';
import png4 from '../../../assets/png/catalog/4.png';
import png5 from '../../../assets/png/catalog/5.png';
import png6 from '../../../assets/png/catalog/6.png';
import { useTranslation } from 'react-i18next';

const Catalog = () => {
  const { t } = useTranslation();

  return (
    <div className={cl.catalogWrapper}>
      <h2>{t('catalog', { ns: 'catalog' })}</h2>
      <section>
        <section>
          <figure>
            <img src={png1} alt="" />
            <figcaption>{t('normal hair', { ns: 'catalog' })}</figcaption>
          </figure>
          <figure>
            <img src={png2} alt="" />
            <figcaption>{t('colored hair', { ns: 'catalog' })}</figcaption>
          </figure>
          <figure>
            <img src={png3} alt="" />
            <figcaption>{t('damaged hair', { ns: 'catalog' })}</figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src={png4} alt="" />
            <figcaption>{t('thin hair', { ns: 'catalog' })}</figcaption>
          </figure>
          <figure>
            <img src={png5} alt="" />
            <figcaption>{t('deep conditioning', { ns: 'catalog' })}</figcaption>
          </figure>
          <figure>
            <img src={png6} alt="" />
            <figcaption>{t('hair growth', { ns: 'catalog' })}</figcaption>
          </figure>
        </section>
      </section>
    </div>
  );
};
export default Catalog;
