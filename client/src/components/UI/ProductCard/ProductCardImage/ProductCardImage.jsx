import LabelHit from '../../Labels/LabelHit';
import LabelNew from '../../Labels/LabelNew';
import LabelSale from '../../Labels/LabelSale';
import cl from './index.module.scss';
import { useImageError } from '@hooks/useImageError';

export default function ProductCardImage({ card }) {
  const hasImages = card.images && card.images.length > 0;
  const initialImage = hasImages ? card.images[0].image : null;
  const [imageSrc, handleError] = useImageError(initialImage);

  return (
    <div className={`${cl.productCardImage} ${!card.available ? cl['disabled-overlay'] : ''}`}>
      {card.is_best_seller && <LabelHit />}
      {card.is_new && <LabelNew />}
      {card.is_discount && <LabelSale card={card} />}
      <img src={imageSrc} alt={card.name || 'Placeholder'} onError={handleError} />
    </div>
  );
}
