import ArrowLeft from '@components/Icons/ArrowLeft';
import LabelHit from '../Labels/LabelHit';
import LabelNew from '../Labels/LabelNew';
import LabelSale from '../Labels/LabelSale';
import cl from './index.module.scss';
import { useState } from 'react';
import ArrowRight from '@components/Icons/ArrowRight';

export default function ImgMobile({ card }) {
  const [index, setIndex] = useState(1);

  const onChangeValue = (value) => {
    setIndex((prevIndex) => prevIndex + value);
  };

  const images = card ? card.upload_images : ['/images/default_img.svg'];
  const total = images.length;
  const showImg = images[index - 1];

  return (
    <div className={cl.wrapImgMobCard}>
      <div>
        {card.is_best_seller ? <LabelHit /> : ''}
        {card.is_new ? <LabelNew /> : ''}
        {card.is_sale ? <LabelSale card={card} /> : ''}
        <img src={showImg} alt={card.name} />
      </div>
      <div className={cl.wrapImgBtn}>
        <button type="button" disabled={index === 1} onClick={() => onChangeValue(-1)}>
          <ArrowLeft />
        </button>
        <button type="button" disabled={index === total} onClick={() => onChangeValue(+1)}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
