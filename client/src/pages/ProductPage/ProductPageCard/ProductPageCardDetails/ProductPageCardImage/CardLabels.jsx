import LabelHit from '../../../../../components/UI/Labels/LabelHit';
import LabelNew from '../../../../../components/UI/Labels/LabelNew';
import LabelSale from '../../../../../components/UI/Labels/LabelSale';

function CardLabels({ card }) {
  return (
    <>
      {card.is_best_seller && <LabelHit />}
      {card.is_new && <LabelNew />}
      {card.is_discount && <LabelSale card={card} />}
    </>
  );
}

export default CardLabels;
