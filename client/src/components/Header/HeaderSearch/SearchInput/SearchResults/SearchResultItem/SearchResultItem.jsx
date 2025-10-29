import useTranslationNamespace from '@hooks/useTranslationNamespace';
import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import { useImageError } from '@hooks/useImageError';

const SearchResultItem = ({ product, handleCloseInput }) => {
  const { getTranslation } = useTranslationNamespace('search');
  const [imageSrc, handleError] = useImageError(product.images[0].image);

  return (
    <li key={product.id} className={cl.searchResultItem}>
      <Link
        to={`/catalog/${product.id}`}
        aria-label={`${getTranslation('ariaLabelProduct')} ${product.name}`}
        onClick={handleCloseInput}
      >
        <img src={imageSrc} alt={product.name} onError={handleError} />

        <section className={cl.searchResultInfo}>
          <p className={cl.productName}>{product.name}</p>
          <p className={cl.productPrice}>
            {product.price} <img src="/svg/hryvnia.svg" alt="Hryvnia symbol" className={cl.hryvniaSymbol} />
          </p>
        </section>
      </Link>
    </li>
  );
};
export default SearchResultItem;
