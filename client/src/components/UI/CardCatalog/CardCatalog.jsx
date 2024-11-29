import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ProductRating from '../CardProduct/Rating/ProductRating';
import ImgCardCatalog from './ImgCardCatalog';
import cl from './index.module.scss';
import PriceCardCatalog from './PriceCardCatalog';
import TitleCardCatalog from './TitleCardCatalog';

export default function CardCatalog({ card }) {
  const id = card.id;
  return (
    <div className={cl.wrapCardCatalog}>
      <Link to={`/catalog/${id}`}>
        <ImgCardCatalog card={card} />
      </Link>
      <div className={cl.wrapInfo}>
        <TitleCardCatalog card={card} />
        <div>
          <ProductRating />
          <PriceCardCatalog card={card} />
        </div>
        <Button variant="secondary">Додати до кошику</Button>
      </div>
    </div>
  );
}
