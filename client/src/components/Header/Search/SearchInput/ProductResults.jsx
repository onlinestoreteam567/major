import { loadSearch, selectSearch } from '@redux/selectors';
import cl from './index.module.scss';
import Spinner from '@components/helpers/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from './NotFound';
import { Link } from 'react-router-dom';
import { resetFilter } from '@redux/filter/filterSlice';
import { setProducts } from '@redux/products/listSlice';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useEffect, useRef } from 'react';

const ProductResults = ({ handleCloseInput }) => {
  const isLoading = useSelector(loadSearch);
  const products = useSelector(selectSearch);
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('search');
  const showAllLinkRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && products && products.length > 3 && showAllLinkRef.current) {
        showAllLinkRef.current.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [products]);

  if (products === null) return;
  const showOnlyFirstThree = products.slice(0, 3);

  const addSearchResultsToCatalog = () => {
    dispatch(resetFilter());
    dispatch(setProducts(products));
    handleCloseInput();
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={cl.searchResultsSection}>
          <hr />
          {products.length === 0 ? (
            <NotFound handleCloseInput={handleCloseInput} />
          ) : (
            <ul>
              {showOnlyFirstThree.map((product) => (
                <li key={product.id} className={cl.searchResultItem}>
                  <Link
                    to={`/catalog/${product.id}`}
                    aria-label={`${getTranslation('ariaLabelProduct')} ${product.name}`}
                    onClick={handleCloseInput}
                  >
                    <img src={product.images[0].image} alt={product.name} />

                    <section className={cl.searchResultInfo}>
                      <p className={cl.productName}>{product.name}</p>
                      <p className={cl.productPrice}>
                        {product.price} <img src="/svg/hryvnia.svg" alt="Hryvnia symbol" className={cl.hryvniaSymbol} />
                      </p>
                    </section>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {products.length <= 3 && products.length > 0 && (
            <Link
              className={cl.showAll}
              to="/catalog"
              aria-label={getTranslation('goToCatalog')}
              onClick={() => addSearchResultsToCatalog()}
            >
              {getTranslation('searchResultsComplete')}
              <br /> <br />
              {getTranslation('goToCatalog')}
            </Link>
          )}
          {products.length > 3 && (
            <Link
              ref={showAllLinkRef}
              className={cl.showAll}
              to="/catalog"
              aria-label={getTranslation('ariaLabelShowAll')}
              onClick={() => addSearchResultsToCatalog()}
            >
              {getTranslation('showAll')}
            </Link>
          )}
        </section>
      )}
    </div>
  );
};

export default ProductResults;
