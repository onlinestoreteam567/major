import Button from '../Button/Button';
import Price from '../CardProduct/Price/Price';
import ProductRating from '../CardProduct/Rating/ProductRating';
import Volume from '../CardProduct/Volume/Volume';
import ImgCardCatalog from './ImgCardCatalog';
import cl from './index.module.scss';
import TitleCardCatalog from './TitleCardCatalog';

export default function CardCatalog({ card }) {
  return (
    <div className={cl.wrapCardCatalog}>
      <ImgCardCatalog card={card} />
      <div className={cl.wrapInfo}>
        <TitleCardCatalog card={card} />
        <ProductRating />
        <div className={cl.wrapPrice}>
          <Price card={card} />
          <Volume card={card} />
        </div>
        <Button>Додати до кошику</Button>
      </div>
    </div>
  );
}
