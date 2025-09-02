import { Link } from 'react-router-dom';
import ProductRating from '../../../pages/ProductPage/Card/ProductDetails/Rating/ProductRating';
import cl from './index.module.scss';
import ProductCardPrice from './ProductCardPrice/ProductCardPrice';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonAddToCart from '@components/UI/Button/ButtonAddToCart';
import ProductCardImage from './ProductCardImage/ProductCardImage';
import ProductCardTitle from './ProductCardTitle/ProductCardTitle';

export default function ProductCard({ card }) {
  const { getTranslation } = useTranslationNamespace('card');
  const id = card.id;
  const translation = `${getTranslation('ariaLabelCard')} ${card.name}`;

  return (
    <div className={cl.wrapCardCatalog}>
      <Link to={`/catalog/${id}`} aria-label={translation}>
        <ProductCardImage card={card} />
      </Link>
      <div className={cl.wrapInfo}>
        <Link to={`/catalog/${id}`} aria-label={translation}>
          <ProductCardTitle card={card} />
        </Link>
        <div>
          <ProductRating card={card} />
          <ProductCardPrice card={card} />
        </div>
        <ButtonAddToCart card={card} />
      </div>
    </div>
  );
}
