import LabelHit from '../../../../../../components/UI/CardProduct/Labels/LabelHit';
import LabelNew from '../../../../../../components/UI/CardProduct/Labels/LabelNew';
import LabelSale from '../../../../../../components/UI/CardProduct/Labels/LabelSale';
import cl from './index.module.scss';

export default function Image({ card }) {
  return card.images && card.images.length > 0 ? (
    <div className={cl.wrapImg}>
      {card.is_best_seller ? <LabelHit /> : ''}
      {card.is_new ? <LabelNew /> : ''}
      {card.is_discount ? <LabelSale card={card} /> : ''}
      <img src={card.images[0].image} alt="" />
    </div>
  ) : (
    <h1 style={{ textAlign: 'center', color: 'red', fontSize: '20px' }}>
      Дуже класна заглушка яка тут буде якщо фото не прилетить або хтось забуде поставити
    </h1>
  );
}
