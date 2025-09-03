import { useState } from 'react';
import LabelHit from '../../Labels/LabelHit';
import LabelNew from '../../Labels/LabelNew';
import LabelSale from '../../Labels/LabelSale';
import cl from './index.module.scss';

export default function ProductCardImage({ card }) {
  const placeholderImage = '/images/placeholder.webp';
  const hasImages = card.images && card.images.length > 0;
  const [imageSrc, setImageSrc] = useState(hasImages ? card.images[0].image : placeholderImage);

  const handleError = () => setImageSrc(placeholderImage);

  return (
    <div className={`${cl.productCardImage} ${!card.available ? cl['disabled-overlay'] : ''}`}>
      {card.is_best_seller && <LabelHit />}
      {card.is_new && <LabelNew />}
      {card.is_discount && <LabelSale card={card} />}
      <img src={imageSrc} alt={card.name || 'Placeholder'} onError={handleError} />
    </div>
  );
}
