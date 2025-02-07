import ArrowLeft from '@assets/svg/ArrowLeft';
import cl from './index.module.scss';
import { useRef, useState } from 'react';
import ArrowRight from '@assets/svg/ArrowRight';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { oneElement } from '@components/constants/settingSlider';
import LabelHit from '../Labels/LabelHit';
import LabelNew from '../Labels/LabelNew';
import LabelSale from '../Labels/LabelSale';

export default function ImgMobile({ card }) {
  const [index, setIndex] = useState(1);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
    setIndex((prevIndex) => Math.min(prevIndex + 1, card.images.length));
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    setIndex((prevIndex) => Math.max(prevIndex - 1, 1));
  };

  const total = card.images.length;

  return (
    <div className={`slider-container ${cl.wrapSlider}`}>
      <Slider ref={sliderRef} {...oneElement}>
        {card.images.map((slide) => (
          <div key={slide.id} className={cl.wrapImgMobCard}>
            {card.is_best_seller && <LabelHit />}
            {card.is_new && <LabelNew />}
            {card.is_discount && <LabelSale card={card} />}
            <img src={slide.image} alt={card.name} />
          </div>
        ))}
      </Slider>
      <div className={cl.wrapImgBtn}>
        <button type="button" disabled={index === 1} onClick={previous}>
          <ArrowLeft />
        </button>
        <button type="button" disabled={index === total} onClick={next}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
