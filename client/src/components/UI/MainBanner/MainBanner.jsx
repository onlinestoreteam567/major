import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.scss";

const MainBanner = () => {
  let sliderRef = useRef(null);

  const settings = {
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
        <div className={`${styles.slide} ${styles.firstSlide}`}></div>
        <div className={`${styles.slide} ${styles.secondSlide}`}></div>
        <div className={`${styles.slide} ${styles.thirdSlide}`}></div>
      </Slider>
    </div>
  );
};

export default MainBanner;
