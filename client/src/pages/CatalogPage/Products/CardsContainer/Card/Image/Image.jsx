import LabelHit from '../../../../../../components/UI/CardProduct/Labels/LabelHit';
import LabelNew from '../../../../../../components/UI/CardProduct/Labels/LabelNew';
import LabelSale from '../../../../../../components/UI/CardProduct/Labels/LabelSale';
import cl from './index.module.scss';

export default function Image({ card }) {
  const placeholderImage = '/images/placeholder.webp';
  const hasImages = card.images && card.images.length > 0;
  const imageSrc = hasImages ? card.images[0].image : placeholderImage;

  return (
    <div className={cl.wrapImg}>
      {card.is_best_seller && <LabelHit />}
      {card.is_new && <LabelNew />}
      {card.is_discount && <LabelSale card={card} />}
      <img src={imageSrc} alt={card.name || 'Placeholder'} />
    </div>
  );
}
