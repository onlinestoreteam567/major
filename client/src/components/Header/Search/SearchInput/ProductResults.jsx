import { loadSearch, selectSearch } from '@redux/selectors';
import cl from './index.module.scss';
import Spinner from '@components/helpers/Spinner';
import { useSelector } from 'react-redux';
import NotFound from './NotFound';
import { Link } from 'react-router-dom';

const ProductResults = ({ handleCloseInput }) => {
  const isLoading = useSelector(loadSearch);
  const products = useSelector(selectSearch);

  if (products === null) return;
  const showOnlyFirstThree = products.slice(0, 3);

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
                    <a href="#">
                      <p className={cl.productName}>{product.name}</p>
                    </a>
                    <p className={cl.productPrice}>
                      {product.price} <img src="/svg/hryvnia.svg" alt="Hryvnia symbol" className={cl.hryvniaSymbol} />
                    </p>
                  </section>
                </li>
              ))}
            </ul>
          )}
          {products.length >= 3 && (
            <a className={cl.showAll} href="#">
              Показати всі результати пошуку
            </a>
          )}
        </section>
      )}
    </div>
  );
};

export default ProductResults;
