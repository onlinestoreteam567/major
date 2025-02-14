import LabelHit from '../Labels/LabelHit';
import LabelNew from '../Labels/LabelNew';
import LabelSale from '../Labels/LabelSale';
import cl from './index.module.scss';
import { useState } from 'react';

export default function ImgDesk({ card }) {
  const images = card.images;

  const [bigImage, setBigImage] = useState(images[0].image);

  const handleImageClick = (image) => setBigImage(image);

  return (
    <div className={cl.wrapImgDeskCard}>
      <div className={cl.wrapImgCase}>
        {card.is_best_seller && <LabelHit />}
        {card.is_new && <LabelNew />}
        {card.is_discount && <LabelSale card={card} />}
        <img src={bigImage} alt={card.name} className={cl.imgBig} />
      </div>
      <ul className={cl.wrapSmallImg}>
        {card.images.map((img) => (
          <li key={img.id} onClick={() => handleImageClick(img.image)}>
            <img src={img.image} alt={card.name} className={bigImage === img.image ? cl.selected : ''} />
          </li>
        ))}
      </ul>
    </div>
  );
}
