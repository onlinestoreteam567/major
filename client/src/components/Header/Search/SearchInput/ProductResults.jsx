import { loadSearch, selectSearch } from '@redux/selectors';
import cl from './index.module.scss';
import Spinner from '@components/helpers/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from './NotFound';
import { Link } from 'react-router-dom';
import { resetFilter } from '@redux/filter/filterSlice';
import { setProducts } from '@redux/products/listSlice';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const ProductResults = ({ handleCloseInput }) => {
  const isLoading = useSelector(loadSearch);
  const products = useSelector(selectSearch);
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('search');

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
            <NotFound />
          ) : (
            <ul>
              {showOnlyFirstThree.map((product) => (
                <li key={product.id} className={cl.searchResultItem}>
                  <Link to={`/catalog/${product.id}`} onClick={handleCloseInput}>
                    <img src={product.images[0].image} alt={product.name} />
                  </Link>
                  <section className={cl.searchResultInfo}>
                    <p className={cl.productName}>{product.name}</p>
                    <p className={cl.productPrice}>
                      {product.price} <img src="/svg/hryvnia.svg" alt="Hryvnia symbol" className={cl.hryvniaSymbol} />
                    </p>
                  </section>
                </li>
              ))}
            </ul>
          )}
          {products.length <= 3 && products.length > 0 && (
            <Link className={cl.showAll} to="/catalog" onClick={() => addSearchResultsToCatalog()}>
              {getTranslation('searchResultsComplete')}
              <br /> <br />
              {getTranslation('goToCatalog')}
            </Link>
          )}
          {products.length > 3 && (
            <Link className={cl.showAll} to="/catalog" onClick={() => addSearchResultsToCatalog()}>
              {getTranslation('showAll')}
            </Link>
          )}
        </section>
      )}
    </div>
  );
};

export default ProductResults;
