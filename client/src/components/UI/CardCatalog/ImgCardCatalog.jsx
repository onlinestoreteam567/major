import LabelHit from '../CardProduct/Labels/LabelHit';
import LabelNew from '../CardProduct/Labels/LabelNew';
import LabelSale from '../CardProduct/Labels/LabelSale';
import cl from './index.module.scss';

export default function ImgCardCatalog({ card }) {
  return (
    <div className={cl.wrapImg}>
      {card.is_best_seller ? <LabelHit /> : ''}
      {card.is_new ? <LabelNew /> : ''}
      {card.is_sale ? <LabelSale card={card} /> : ''}
      <img src={card.upload_images[3]} alt="" />
    </div>
  );
}
