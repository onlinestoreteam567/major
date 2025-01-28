import LabelHit from '../Labels/LabelHit';
import LabelNew from '../Labels/LabelNew';
import LabelSale from '../Labels/LabelSale';
import cl from './index.module.scss';
import { useState } from 'react';

export default function ImgDesk({ card }) {
  const [bigImage, setBigImage] = useState(card.images[0]);

  const handleImageClick = (image) => {
    setBigImage(image);
  };

  const images = card.images;
  // const addDefaultImg = (ev) => {
  //   ev.target.src = '/images/default_img1.svg';
  // };

  return (
    <div className={cl.wrapImgDeskCard}>
      <div className={cl.wrapImgCase}>
        {card.is_best_seller ? <LabelHit /> : ''}
        {card.is_new ? <LabelNew /> : ''}
        {card.is_discount ? <LabelSale card={card} /> : ''}
        <img src={bigImage} alt={card.name} className={cl.imgBig} />
      </div>
      <ul className={cl.wrapSmallImg}>
        {images.map((img, i) => (
          <li key={i}>
            <img
              src={card.images[i]}
              alt={card.name}
              // onError={addDefaultImg}
              onClick={() => handleImageClick(card.upload_images[i])}
              className={bigImage === card.images[i].image ? cl.selected : ''}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
