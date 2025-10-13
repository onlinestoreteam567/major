import Spinner from '@UI/Spinner/Spinner';
import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, selectProducts } from '@redux/selectors';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { fetchProductsAll } from '@redux/products/service';
import { resetFilter } from '@redux/filter/filterSlice';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import Button from '@components/UI/Button/Button';
import ProductCard from '@components/UI/ProductCard/ProductCard';

const CatalogProductList = () => {
  const isLoading = useSelector(loadProducts);
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const dispatch = useDispatch();
  const items = useSelector(selectProducts);

  const showArr = Array.isArray(items) && items.length !== 0;
  const handleClearFilters = () => {
    dispatch(fetchProductsAll());
    dispatch(resetFilter());
  };

  return (
    <section className={cl.catalogProductList}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {showArr ? (
            <ul className={cl.container}>
              {items.map((card, index) => (
                <li key={card.id}>
                  <ProductCard card={card} index={index} />
                </li>
              ))}
            </ul>
          ) : (
            <div className={cl.emptyWrap}>
              <img src="/images/X.webp" alt={getTranslation('notFoundImageAlt')} />
              <Paragraph type="body2">{getTranslation('notFoundParagraph')}</Paragraph>
              <Button onClick={handleClearFilters} variant="secondary" ariaLabel={getTranslation('continueSearching')}>
                {getTranslation('continueSearching')}
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
};
export default CatalogProductList;
