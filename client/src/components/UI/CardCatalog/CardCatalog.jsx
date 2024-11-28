import Button from '../Button/Button';
import ProductRating from '../CardProduct/Rating/ProductRating';
import ImgCardCatalog from './ImgCardCatalog';
import cl from './index.module.scss';
import PriceCardCatalog from './PriceCardCatalog';
import TitleCardCatalog from './TitleCardCatalog';

export default function CardCatalog({ card }) {
  console.log(card);

  return (
    <div className={cl.wrapCardCatalog}>
      <ImgCardCatalog card={card} />
      <div className={cl.wrapInfo}>
        <TitleCardCatalog card={card} />
        <div>
          <ProductRating />
          <PriceCardCatalog card={card} />
        </div>
        <Button>Додати до кошику</Button>
      </div>
    </div>
  );
}
