import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import CardCatalog from '../CardCatalog/CardCatalog';
import ArrowLeft from '@assets/svg/ArrowLeft';
import ArrowRight from '@assets/svg/ArrowRight';
import { mainSettings } from '@components/constants/settingSlider';
// import { useLocation } from 'react-router-dom';
// import useScreenSizes from '@hooks/useScreenSizes';

const SliderBoxMain = ({ slidesData }) => {
  // const { pathname } = useLocation();
  // const { deskmax } = useScreenSizes();
  // const isHidden = pathname === '/' && deskmax === true;
  // const { mobile, deskmax } = useScreenSizes();

  // const isColorBtn = mobile === true || deskmax === true;
  // const isHidden = deskmax === true;
  // console.log(isColorBtn);
  // console.log(isHidden);
  const total = slidesData.length;

  const [slidesToShow, setSlidesToShow] = useState(4);
  const [index, setIndex] = useState(1);
  let sliderRef = useRef(null);

  useEffect(() => {
    if (!slidesData) return;
    setSlidesToShow(total < 4 ? total : 4);
  }, [slidesData, total]);

  const settings = {
    ...mainSettings,
    slidesToShow: slidesToShow,
  };

  const next = () => {
    sliderRef.current.slickNext();
    setIndex((prevIndex) => prevIndex + 1);
  };
  const previous = () => {
    sliderRef.current.slickPrev();
    setIndex((prevIndex) => prevIndex - 1);
  };

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
