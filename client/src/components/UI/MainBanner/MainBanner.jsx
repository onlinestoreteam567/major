import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl from "./index.module.scss";

const MainBanner = () => {
  let sliderRef = useRef(null);

  const settings = {
    fade: true,
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  return (
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className={`${cl.slide} ${cl.firstSlide}`}></div>
        <div className={`${cl.slide} ${cl.secondSlide}`}></div>
        <div className={`${cl.slide} ${cl.thirdSlide}`}></div>
      </Slider>
    </div>
  );
};

export default MainBanner;
