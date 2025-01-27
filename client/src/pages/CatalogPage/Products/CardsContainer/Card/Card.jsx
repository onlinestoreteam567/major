import { Link } from 'react-router-dom';
import Button from '../../../../../components/UI/Button/Button';
import ProductRating from '../../../../../components/UI/CardProduct/Rating/ProductRating';
import ImgCardCatalog from './Image/Image';
import cl from './index.module.scss';
import PriceCardCatalog from './Price/Price';
import TitleCardCatalog from './Title/Title';

export default function Card({ card }) {
  console.log(card);

  const id = card.id;
  return (
    <div className={cl.wrapCardCatalog}>
      <Link to={`/catalog/${id}`}>
        <ImgCardCatalog card={card} />
      </Link>
      <div className={cl.wrapInfo}>
        <TitleCardCatalog card={card} />
        <div>
          <ProductRating card={card} />
          <PriceCardCatalog card={card} />
        </div>
        <Button variant="secondary">Додати до кошику</Button>
      </div>
    </div>
  );
}
