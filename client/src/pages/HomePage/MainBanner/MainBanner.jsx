import Slider from 'react-slick';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings.js';
import Slide from './Slide/Slide.jsx';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';
import { loadBanner, selectBanner } from '@redux/selectors.js';
import Skeleton from '@components/UI/Skeleton/Skeleton.jsx';

const MainBanner = () => {
  const sliderRef = useRef(null);
  const slideData = useSelector(selectBanner);
  const isLoading = true;
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
    <Skeleton heights={{ extraMobile: 620, mobile: 620, tablet: 704, deskmin: 704, deskmax: 704 }} />
  ) : (
    <div className={`slider-container ${cl.mainBanner}`}>
      <button onClick={previous} />
      <Slider ref={sliderRef} {...settings}>
        {slideData.map((slide, index) => (
          <Slide key={index} slide={slide} />
        ))}
      </Slider>
      <button onClick={next} />
    </div>
  );
};

export default MainBanner;
