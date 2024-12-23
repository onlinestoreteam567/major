import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useDispatch } from 'react-redux';
import { setFalse } from '@features/catalogPage/catalogPageSlice';

const Catalog = () => {
  const { getTranslation } = useTranslationNamespace('common');
  const dispatch = useDispatch();

  const handleSetFalse = () => dispatch(setFalse());

  const catalogItems = [
    { src: '/images/catalog/1.png', label: 'normalHair' },
    { src: '/images/catalog/2.png', label: 'coloredHair' },
    { src: '/images/catalog/3.png', label: 'damagedHair' },
    { src: '/images/catalog/4.png', label: 'thinHair' },
    { src: '/images/catalog/5.png', label: 'deepConditioning' },
    { src: '/images/catalog/6.png', label: 'hairGrowth' },
  ];

  return (
    <section className={cl.catalogWrapper}>
      <Heading type="h2">{getTranslation('catalog')}</Heading>
      <div className={cl.wrapImges}>
        {catalogItems.map((item, index) => (
          <figure key={index} onClick={handleSetFalse}>
            <img src={item.src} alt="" />
            <figcaption>{getTranslation(item.label)}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
