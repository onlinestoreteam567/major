import cl from './index.module.scss';
import LabelHit from './LabelHit';
import LabelNew from './LabelNew';
import LabelSale from './LabelSale';
import oil_1 from '@assets/png/thin/thin_oil_0502.webp';
import oil_2 from '@assets/png/thin/thin_oil_1091.webp';
import oil_3 from '@assets/png/thin/thin_oil_3346.webp';
import oil_4 from '@assets/png/thin/thin_all_0872.webp';
import { useState } from 'react';

export default function ImgDesk({ card }) {
  const [bigImage, setBigImage] = useState(oil_1);

  const handleImageClick = (image) => {
    setBigImage(image);
  };

  return (
    <div className={cl.wrapImgDeskCard}>
      <div>
        {card.is_best_seller ? <LabelHit /> : ''}
        {card.is_new ? <LabelNew /> : ''}
        {card.is_sale ? <LabelSale card={card} /> : ''}
        <img src={bigImage} alt={card.name} />
      </div>
      <div className={cl.wrapSmallImg}>
        <img
          src={oil_1}
          alt={card.name}
          onClick={() => handleImageClick(oil_1)}
          className={bigImage === oil_1 ? cl.selected : ''}
        />
        <img
          src={oil_2}
          alt={card.name}
          onClick={() => handleImageClick(oil_2)}
          className={bigImage === oil_2 ? cl.selected : ''}
        />
        <img
          src={oil_3}
          alt={card.name}
          onClick={() => handleImageClick(oil_3)}
          className={bigImage === oil_3 ? cl.selected : ''}
        />
        <img
          src={oil_4}
          alt={card.name}
          onClick={() => handleImageClick(oil_4)}
          className={bigImage === oil_4 ? cl.selected : ''}
        />
      </div>
    </div>
  );
}
