import Slider from 'react-slick';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import CardCatalog from '../CardCatalog/CardCatalog';
import ArrowLeft from '@components/Icons/ArrowLeft';
import ArrowRight from '@components/Icons/ArrowRight';
import './slider.css';

const SliderBoxMain = ({ slidesData, settings }) => {
  const [index, setIndex] = useState(1);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
    setIndex((prevIndex) => prevIndex + 1);
  };
  const previous = () => {
    sliderRef.current.slickPrev();
    setIndex((prevIndex) => prevIndex - 1);
  };
  const total = slidesData.length;

  return (
    <div className={`slider-container ${cl.wrapSlider}`}>
      <Slider ref={sliderRef} {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className={cl.slider}>
            <CardCatalog key={index} card={slide} />
          </div>
        ))}
      </Slider>
      <div className={cl.btnSlider}>
        <button disabled={index === 1} onClick={previous}>
          <ArrowLeft />
        </button>
        <button disabled={index === total} onClick={next}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SliderBoxMain;
