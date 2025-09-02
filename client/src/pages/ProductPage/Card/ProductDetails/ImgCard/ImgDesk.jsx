import cl from './index.module.scss';
import { useState } from 'react';
import SliderImgs from './SliderImgs';
import CardLabels from './CardLabels';

export default function ImgDesk({ card }) {
  const placeholderImage = '/images/placeholder.webp';
  const images = card.images?.length ? card.images : [{ image: placeholderImage, id: 'placeholder' }];

  const [isShow, setIsShow] = useState(false);
  const [bigImage, setBigImage] = useState(images[0].image || placeholderImage);

  const openModal = () => setIsShow(true);
  const closeModal = () => setIsShow(false);

  // Fallback for the main big image
  const handleBigImageError = () => setBigImage(placeholderImage);

  return (
    <div className={cl.wrapImgDeskCard}>
      <div className={cl.wrapImgCase}>
        <CardLabels card={card} />
        <img src={bigImage} alt={card.name || 'Placeholder'} className={cl.imgBig} onError={handleBigImageError} />
      </div>
      <ul className={cl.wrapSmallImg}>
        {images.map((img, i) => (
          <li key={img.id} onClick={() => setBigImage(images[i].image)} className={cl.wrapImg}>
            <img
              src={img.image}
              alt={card.name || 'Placeholder'}
              onError={(e) => {
                e.currentTarget.src = placeholderImage;
              }}
              className={bigImage === images[i].image ? cl.selected : ''}
            />
          </li>
        ))}
      </ul>
      <button type="button" onClick={openModal} className={cl.btnMore}>
        <img src="/svg/more.svg" alt="Open gallery" />
      </button>
      {isShow && <SliderImgs closeModal={closeModal} card={card} />}
      SliderImgs ?
    </div>
  );
}
