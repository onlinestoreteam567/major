import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton/AddToCardButton';
import ProductRating from '../../../../ProductPage/Card/ProductDetails/Rating/ProductRating';
import ImgCardCatalog from './Image/Image';
import cl from './index.module.scss';
import PriceCardCatalog from './Price/Price';
import TitleCardCatalog from './Title/Title';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function Card({ card }) {
  const { getTranslation } = useTranslationNamespace('card');
  const id = card.id;
  const translation = `${getTranslation('ariaLabelCard')} ${card.name}`;

  return (
    <div className={cl.wrapCardCatalog}>
      <Link to={`/catalog/${id}`} aria-label={translation}>
        <ImgCardCatalog card={card} />
      </Link>
      <div className={cl.wrapInfo}>
        <Link to={`/catalog/${id}`} aria-label={translation}>
          <TitleCardCatalog card={card} />
        </Link>
        <div>
          <ProductRating card={card} />
          <PriceCardCatalog card={card} />
        </div>
        <AddToCartButton card={card} />
      </div>
    </div>
  );
}
