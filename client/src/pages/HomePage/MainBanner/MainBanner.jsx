import Slider from 'react-slick';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings.js';
import Slide from './Slide/Slide.jsx';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';
import { loadBanner, selectBanner } from '@redux/selectors.js';
import Spinner from '@components/helpers/Spinner.jsx';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel/ButtonAriaLabel.jsx';

const MainBanner = () => {
  const sliderRef = useRef(null);
  const slideData = useSelector(selectBanner);
  const isLoading = useSelector(loadBanner);
  const [clickDelay, setClickDelay] = useState(false);
  const timer = useRef(null);

  const clickWithDelay = () => {
    setClickDelay(true);
    timer.current = setTimeout(() => {
      setClickDelay(false);
    }, 300);
  };

  const next = () => {
    if (clickDelay) return;
    clickWithDelay();
    sliderRef.current.slickNext();
  };

  const previous = () => {
    if (clickDelay) return;
    clickWithDelay();
    sliderRef.current.slickPrev();
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={`slider-container ${cl.mainBanner}`}>
      <ButtonAriaLabel al="previous" onClick={previous} />
      <Slider ref={sliderRef} {...settings}>
        {slideData.map((slide, index) => (
          <Slide key={index} slide={slide} />
        ))}
      </Slider>
      <ButtonAriaLabel al="next" onClick={next} />
    </div>
  );
};

export default MainBanner;
