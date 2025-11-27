import cl from './index.module.scss';
import { useState } from 'react';
import SliderImgs from '../SliderImgs';
import CardLabels from '../CardLabels';
import { useImageError } from '@hooks/useImageError';

export default function ImgDesk({ card }) {
  const placeholderImage = '/images/placeholder.webp';
  const images = card.images?.length ? card.images : [{ image: placeholderImage, id: 'placeholder' }];

  const [isShow, setIsShow] = useState(false);
  const [bigImage, setBigImage] = useState(images[0].image);
  const [bigImageSrc, handleBigImageError] = useImageError(bigImage);

  const openModal = () => setIsShow(true);
  const closeModal = () => setIsShow(false);

  return (
    <div className={cl.imgDesk}>
      <div className={cl.wrapImgCase}>
        <CardLabels card={card} />
        <img src={bigImageSrc} alt={card.name || 'Placeholder'} className={cl.imgBig} onError={handleBigImageError} />
      </div>
      <ul className={cl.wrapSmallImg}>
        {images.map((img, i) => (
          <li
            key={img.id}
            onClick={() => {
              setBigImage(images[i].image);
            }}
            className={cl.wrapImg}
          >
            <Img src={img.image} cardName={card.name} bigImage={bigImage} selectedImage={images[i].image} />
          </li>
        ))}
      </ul>
      <button type="button" onClick={openModal} className={cl.btnMore}>
        <img src="/svg/more.svg" alt="Open gallery" />
      </button>
      {isShow && <SliderImgs closeModal={closeModal} card={card} />}
    </div>
  );
}

const Img = ({ src, cardName, bigImage, selectedImage }) => {
  const [imageSrc, handleError] = useImageError(src);
  return (
    <img
      src={imageSrc}
      alt={cardName || 'Placeholder'}
      onError={handleError}
      className={bigImage === selectedImage ? cl.selected : ''}
    />
  );
};
