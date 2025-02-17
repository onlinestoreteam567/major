import { createPortal } from 'react-dom';
import LabelHit from '../Labels/LabelHit';
import LabelNew from '../Labels/LabelNew';
import LabelSale from '../Labels/LabelSale';
import cl from './index.module.scss';
import { useState } from 'react';
import Overlay from '@components/UI/Overlay/Overlay';
import SliderImgs from './SliderImgs';

export default function ImgDesk({ card }) {
  const images = card.images || [];

  const [isShow, setIsShow] = useState(false);
  const [bigImage, setBigImage] = useState(images[0].image);

  const openModal = () => {
    setIsShow(true);
  };
  const closeModal = () => {
    setIsShow(false);
  };
  console.log(images[3].image);
  return (
    <div className={cl.wrapImgDeskCard}>
      <div className={cl.wrapImgCase}>
        {card.is_best_seller && <LabelHit />}
        {card.is_new && <LabelNew />}
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
      <button type="button" onClick={openModal} className={cl.btnMore}>
        <img src="/svg/more.svg" />
      </button>
      {isShow &&
        createPortal(
          <Overlay>
            <SliderImgs onClose={closeModal} card={card} />
          </Overlay>,
          document.body
        )}
    </div>
  );
}
