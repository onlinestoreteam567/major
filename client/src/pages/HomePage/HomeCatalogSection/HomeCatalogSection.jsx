import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { loadCategories, selectCategories } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '@redux/filter/filterSlice';
import { getProductsByCategory } from '@redux/products/service';
import Spinner from '@UI/Spinner/Spinner';
import CategoryItem from './CategoryItem';

const HomeCatalogSection = () => {
  const { getTranslation } = useTranslationNamespace('common');
  const isLoading = useSelector(loadCategories);
  const items = useSelector(selectCategories);
  const firstSixItems = items.slice(0, 6);

  const dispatch = useDispatch();
  const getCategory = (value) => {
    dispatch(setCategory(value));
    dispatch(getProductsByCategory(value));
  };

  return (
    <section className={cl.homeCatalogSection}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Heading type="h2">{getTranslation('catalog')}</Heading>
          <ul>
            {firstSixItems.map((item) => (
              <CategoryItem key={item.id} item={item} getTranslation={getTranslation} getCategory={getCategory} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default HomeCatalogSection;
