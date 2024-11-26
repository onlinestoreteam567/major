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

  const addDefaultImg = (ev) => {
    ev.target.src = '/images/default_img1.svg';
  };

  return (
    <div className={cl.wrapImgDeskCard}>
      <div className={cl.wrapImgCase}>
        {card.is_best_seller ? <LabelHit /> : ''}
        {card.is_new ? <LabelNew /> : ''}
        {card.is_sale ? <LabelSale card={card} /> : ''}
        <img src={bigImage} alt={card.name} onError={addDefaultImg} />
      </div>
      <div className={cl.wrapSmallImg}>
        <img
          src={card.upload_images[0]}
          alt={card.name}
          onError={addDefaultImg}
          onClick={() => handleImageClick(card.upload_images[0])}
          className={bigImage === card.upload_images[0] ? cl.selected : ''}
        />
        <img
          src={card.upload_images[1]}
          alt={card.name}
          onError={addDefaultImg}
          onClick={() => handleImageClick(card.upload_images[1])}
          className={bigImage === card.upload_images[1] ? cl.selected : ''}
        />
        <img
          src={card.upload_images[2]}
          alt={card.name}
          onError={addDefaultImg}
          onClick={() => handleImageClick(card.upload_images[2])}
          className={bigImage === card.upload_images[2] ? cl.selected : ''}
        />
        <img
          src={card.upload_images[3]}
          alt={card.name}
          onError={addDefaultImg}
          onClick={() => handleImageClick(card.upload_images[3])}
          className={bigImage === card.upload_images[3] ? cl.selected : ''}
        />
      </div>
    </div>
  );
}
