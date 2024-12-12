import LabelHit from '../../../../../../components/UI/CardProduct/Labels/LabelHit';
import LabelNew from '../../../../../../components/UI/CardProduct/Labels/LabelNew';
import LabelSale from '../../../../../../components/UI/CardProduct/Labels/LabelSale';
import cl from './index.module.scss';

export default function Image({ card }) {
  return (
    <div className={cl.wrapImg}>
      {card.is_best_seller ? <LabelHit /> : ''}
      {card.is_new ? <LabelNew /> : ''}
      {card.is_sale ? <LabelSale card={card} /> : ''}
      <img src={card.upload_images[0]} alt="" />
    </div>
  );
}
