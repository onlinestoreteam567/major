import cl from './index.module.scss';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LabelHit from '../Labels/LabelHit';
import LabelNew from '../Labels/LabelNew';
import LabelSale from '../Labels/LabelSale';
import { createPortal } from 'react-dom';
import SliderImgs from './SliderImgs';
import WrapModal from '@components/UI/WrapModal/WrapModal';

export default function ImgMobile({ card }) {
  const [isShow, setIsShow] = useState(false);

  const openModal = () => {
    setIsShow(true);
  };
  const closeModal = () => {
    setIsShow(false);
  };

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
    lazyLoad: true,
    variableWidth: true,
    draggable: false,
    swipe: true,
    appendDots: (dots) => (
      <div
        style={{
          margin: '-36px 0',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className={`slider-container ${cl.wrapSliderMob}`}>
      <Slider ref={sliderRef} {...oneElement}>
        {card.images.map((slide, i) => (
          <div key={slide.id} className={cl.wrapImgMobCard}>
            {card.is_best_seller && <LabelHit />}
            {card.is_new && <LabelNew />}
            {card.is_discount && <LabelSale card={card} />}
            <img src={card.images[i].image} alt={card.name} />
          </div>
        ))}
      </Slider>
      <button type="button" onClick={openModal} className={cl.btnMore}>
        <img src="/svg/more.svg" />
      </button>
      {isShow &&
        createPortal(
          <WrapModal isShow={isShow} closeModal={closeModal} content={<SliderImgs card={card} />} />,
          document.body
        )}
    </div>
  );
}
