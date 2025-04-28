import Heading from '@components/UI/Texts/Heading/Heading';
import LabelHit from '../Labels/LabelHit';
import LabelNew from '../Labels/LabelNew';
import LabelSale from '../Labels/LabelSale';
import cl from './index.module.scss';
import { useState } from 'react';

export default function SliderImgs({ card }) {
  const images = card.images;

  const [bigImage, setBigImage] = useState(images[0].image);

  return (
    <div className={cl.wrapImgPopUp}>
      <div className={cl.wrapContent}>
        <Heading type="h3">{card.name}</Heading>
        <div className={cl.imgBox}>
          <div className={cl.wrapImgCase}>
            {card.is_best_seller && <LabelHit card={card} />}
            {card.is_new && <LabelNew card={card} />}
            {card.is_discount && <LabelSale card={card} />}
            <img src={bigImage} alt={card.name} className={cl.imgBig} />
          </div>
          <ul className={cl.wrapSmallImg}>
            {card.images.map((img, i) => (
              <li key={img.id} onClick={() => setBigImage(images[i].image)} className={cl.wrapImg}>
                <img src={img.image} alt={card.name} className={bigImage === images[i].image ? cl.selected : ''} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
