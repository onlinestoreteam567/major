import LabelHit from '../Labels/LabelHit';
import LabelNew from '../Labels/LabelNew';
import LabelSale from '../Labels/LabelSale';
import cl from './index.module.scss';
import { useState } from 'react';

export default function ImgDesk({ card }) {
  const [bigImage, setBigImage] = useState(card.upload_images[0]);

  const handleImageClick = (image) => {
    setBigImage(image);
  };

  const images = card.upload_images;
  // const addDefaultImg = (ev) => {
  //   ev.target.src = '/images/default_img1.svg';
  // };

  return (
    <div className={cl.wrapImgDeskCard}>
      <div className={cl.wrapImgCase}>
        {card.is_best_seller ? <LabelHit /> : ''}
        {card.is_new ? <LabelNew /> : ''}
        {card.is_sale ? <LabelSale card={card} /> : ''}
        <img src={bigImage} alt={card.name} className={cl.imgBig} />
      </div>
      <ul className={cl.wrapSmallImg}>
        {images.map((img, i) => (
          <li key={i}>
            <img
              src={card.upload_images[i]}
              alt={card.name}
              // onError={addDefaultImg}
              onClick={() => handleImageClick(card.upload_images[i])}
              className={bigImage === card.upload_images[i] ? cl.selected : ''}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
