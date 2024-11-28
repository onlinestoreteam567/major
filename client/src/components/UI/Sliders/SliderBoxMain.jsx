import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import CardCatalog from '../CardCatalog/CardCatalog';
import ArrowLeft from '@components/Icons/ArrowLeft';
import ArrowRight from '@components/Icons/ArrowRight';

const SliderBoxMain = ({ slidesData, settings }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
    console.log('NEXT');
  };
  const previous = () => {
    sliderRef.slickPrev();
    console.log('PREV');
  };
  console.log(slidesData);
  console.log(settings);
  return (
    <div className={`slider-container ${cl.wrapSlider}`}>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        // ref={sliderRef}
        {...settings}
        className={`slider-container ${cl.boxSlider}`}
      >
        {slidesData.map((slide, index) => (
          <CardCatalog key={index} card={slide} />
        ))}
      </Slider>
      <div className={cl.btnSlider}>
        <button onClick={previous}>
          <ArrowLeft />
        </button>
        <button onClick={next}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SliderBoxMain;
