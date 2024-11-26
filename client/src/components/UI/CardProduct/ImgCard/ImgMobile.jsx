import LabelHit from '../Labels/LabelHit';
import LabelNew from '../Labels/LabelNew';
import LabelSale from '../Labels/LabelSale';
import cl from './index.module.scss';
import { useEffect, useState } from 'react';

export default function ImgMobile({ card }) {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);

  const images = card.upload_images;

  const handleDotClick = (i) => {
    setActive(false);
    setTimeout(() => {
      setIndex(i);
      setActive(true);
    }, 500); // Время должно совпадать с transition в CSS
  };

  const addDefaultImg = (ev) => {
    ev.target.src = '/images/default_img1.svg';
  };

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className={cl.wrapImgMobCard}>
      <div>
        {card.is_best_seller ? <LabelHit /> : ''}
        {card.is_new ? <LabelNew /> : ''}
        {card.is_sale ? <LabelSale card={card} /> : ''}
        <img src={images[index]} alt={card.name} onError={addDefaultImg} className={active ? 'active' : ''} />
      </div>

      <div className={cl.wrapDots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${cl.dot} ${i === index ? cl.active : ''}`}
            onClick={() => handleDotClick(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
