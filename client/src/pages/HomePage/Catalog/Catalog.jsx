import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { loadCategories, selectCategories } from '@redux/selectors';
import { useSelector } from 'react-redux';
import Spinner from '@components/helpers/Spinner';

const Catalog = () => {
  const { getTranslation } = useTranslationNamespace('common');
  const isLoading = useSelector(loadCategories);
  const items = useSelector(selectCategories);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className={cl.catalogWrapper}>
      <Heading type="h2">{getTranslation('catalog')}</Heading>
      <div className={cl.wrapImges}>
        {items.map((item, index) => (
          <figure key={index}>
            {console.log(item)}
            <img src={item.image} alt="" />
            <figcaption>{getTranslation(item.name)}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
