import Heading from '@components/UI/Texts/Heading/Heading';
import LabelHit from '../../../../../components/UI/Labels/LabelHit';
import LabelNew from '../../../../../components/UI/Labels/LabelNew';
import LabelSale from '../../../../../components/UI/Labels/LabelSale';
import cl from './index.module.scss';
import { useState } from 'react';
import Overlay from '@components/UI/Overlay/Overlay';
import { useImageError } from '@hooks/useImageError';

const SliderImage = ({ src, alt, isSelected, onClick }) => {
  const [imageSrc, handleError] = useImageError(src);
  return (
    <img src={imageSrc} alt={alt} onError={handleError} className={isSelected ? cl.selected : ''} onClick={onClick} />
  );
};

export default function SliderImgs({ card, closeModal }) {
  const images = card.images;
  const [bigImage, setBigImage] = useState(images[0].image);
  const [bigImageSrc, handleBigImageError] = useImageError(bigImage);

  return (
    <>
      <Overlay handleClose={closeModal} />
      <div className={cl.sliderImgs}>
        <div className={cl.wrapContent}>
          <Heading type="h3">{card.name}</Heading>
          <div className={cl.imgBox}>
            <div className={cl.wrapImgCase}>
              {card.is_best_seller && <LabelHit card={card} />}
              {card.is_new && <LabelNew card={card} />}
              {card.is_discount && <LabelSale card={card} />}
              <img src={bigImageSrc} alt={card.name} className={cl.imgBig} onError={handleBigImageError} />
            </div>
            <ul className={cl.wrapSmallImg}>
              {card.images.map((img) => (
                <li key={img.id} className={cl.wrapImg}>
                  <SliderImage
                    src={img.image}
                    alt={card.name}
                    isSelected={bigImage === img.image}
                    onClick={() => setBigImage(img.image)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
