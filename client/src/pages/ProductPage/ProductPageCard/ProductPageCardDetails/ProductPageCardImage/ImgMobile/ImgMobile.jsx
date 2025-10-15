import cl from './index.module.scss';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderImgs from '../SliderImgs';
import CardLabels from '../CardLabels';
import { useImageError } from '@hooks/useImageError';

const MobileCardImage = ({ src, alt, card }) => {
  const [imageSrc, handleError] = useImageError(src);

  return (
    <div className={cl.wrapImgMobCard}>
      <CardLabels card={card} />
      <img fetchpriority="high" src={imageSrc} alt={alt} onError={handleError} />
    </div>
  );
};

export default function ImgMobile({ card }) {
  const placeholderImage = '/images/placeholder.webp';

  const isOnlyPlaceholder =
    !card.images?.length || (card.images.length === 1 && card.images[0].image === placeholderImage);

  let images = isOnlyPlaceholder ? [] : card.images;

  const [isShow, setIsShow] = useState(false);
  const openModal = () => setIsShow(true);
  const closeModal = () => setIsShow(false);

  let sliderRef = useRef(null);

  const oneElement = {
    accessibility: true,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false,
    swipe: true,
    appendDots: (dots) => (
      <div style={{ margin: '-36px 0' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className={`slider-container ${cl.imgMobile}`}>
      {images.length > 1 && (
        <>
          <Slider ref={sliderRef} {...oneElement}>
            {images.map((slide) => (
              <MobileCardImage key={slide.id} src={slide.image} alt={card.name || 'Image'} card={card} />
            ))}
          </Slider>
          <button type="button" onClick={openModal} className={cl.btnMore}>
            <img src="/svg/more.svg" alt="Open gallery" />
          </button>
        </>
      )}

      {images.length === 1 && <MobileCardImage src={images[0].image} alt={card.name || 'Image'} card={card} />}

      {!images.length && (
        <div className={cl.wrapImgMobCard}>
          <img src={placeholderImage} alt="Placeholder" />
        </div>
      )}

      {isShow && <SliderImgs card={card} closeModal={closeModal} />}
    </div>
  );
}
