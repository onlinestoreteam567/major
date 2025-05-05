import { useState } from 'react';
import LabelHit from '../../../../../ProductPage/Card/ProductDetails/Labels/LabelHit';
import LabelNew from '../../../../../ProductPage/Card/ProductDetails/Labels/LabelNew';
import LabelSale from '../../../../../ProductPage/Card/ProductDetails/Labels/LabelSale';
import cl from './index.module.scss';

export default function Image({ card }) {
  const placeholderImage = '/images/placeholder.webp';
  const hasImages = card.images && card.images.length > 0;
  const [imageSrc, setImageSrc] = useState(hasImages ? card.images[0].image : placeholderImage);

  const handleError = () => setImageSrc(placeholderImage);

  return (
    <div className={cl.wrapImg}>
      {card.is_best_seller && <LabelHit />}
      {card.is_new && <LabelNew />}
      {card.is_discount && <LabelSale card={card} />}
      <img src={imageSrc} alt={card.name || 'Placeholder'} onError={handleError} />
    </div>
  );
}
