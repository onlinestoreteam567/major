import cl from './index.module.scss';
import LabelHit from './LabelHit';
import LabelNew from './LabelNew';
import LabelSale from './LabelSale';
import oil_1 from '@assets/png/thin/thin_oil_0502.webp';
import oil_2 from '@assets/png/thin/thin_oil_1091.webp';
import oil_3 from '@assets/png/thin/thin_oil_3346.webp';
import oil_4 from '@assets/png/thin/thin_all_0872.webp';
import { useState } from 'react';

const images = [oil_1, oil_2, oil_3, oil_4];

export default function ImgMobile({ card }) {
  const [index, setIndex] = useState(0);

  const handleDotClick = (i) => {
    setIndex(i);
  };
  return (
    <div className={cl.wrapImgMobCard}>
      <div>
        {card.is_best_seller ? <LabelHit /> : ''}
        {card.is_new ? <LabelNew /> : ''}
        {card.is_sale ? <LabelSale card={card} /> : ''}
        <img src={images[index]} alt={card.name} />
      </div>

      <div className={cl.wrapDots}>
        {images.map((_, i) => (
          <button key={i} className={`${cl.dot} ${i === index ? cl.active : ''}`} onClick={() => handleDotClick(i)} />
        ))}
      </div>
    </div>
  );
}
