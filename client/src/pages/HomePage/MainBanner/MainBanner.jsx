import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings';
import Slide from './Slide';
import slideData from './slideData';

const MainBanner = () => {
  const sliderRef = useRef(null);

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {slideData.map((slide, index) => (
          <Slide key={index} slide={slide} />
        ))}
      </Slider>
    </div>
  );
};

export default MainBanner;
