import { loadSearch, selectSearch } from '@redux/selectors';
import cl from './index.module.scss';
import Spinner from '@components/helpers/Spinner';
import EmptyPage from '@components/helpers/EmptyPage';
import { useSelector } from 'react-redux';
import NotFound from './NotFound';

const ProductResults = () => {
  const isLoading = useSelector(loadSearch);
  const products = useSelector(selectSearch);

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
              {products.map((product) => (
                <li key={product.id} className={cl.searchResultItem}>
                  <a href="#">
                    <img src={product.urlImg} alt={product.name} />
                  </a>
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
