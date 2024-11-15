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
    <section className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {slideData.map((slide, index) => (
          <Slide key={index} labelText={slide.labelText} title={slide.title} slideClassName={slide.slideClassName} />
        ))}
      </Slider>
    </section>
  );
};

export default MainBanner;
