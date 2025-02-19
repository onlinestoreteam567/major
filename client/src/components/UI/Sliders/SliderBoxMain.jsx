import Slider from 'react-slick';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import CardCatalog from '../../../pages/CatalogPage/Products/CardsContainer/Card/Card';
import ArrowLeft from '@assets/svg/ArrowLeft';
import ArrowRight from '@assets/svg/ArrowRight';
import { mainSettings } from '@components/constants/settingSlider';
import useScreenSizes from '@hooks/useScreenSizes';
let screenSizeTotal;

const SliderBoxMain = ({ slidesData, total }) => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const [index, setIndex] = useState(1);
  let sliderRef = useRef(null);

  switch (true) {
    case tablet:
      screenSizeTotal = total - 1;
      break;
    case deskmin:
      screenSizeTotal = total - 2;
      break;
    case deskmax:
      screenSizeTotal = total - 3;
      break;
    default:
      screenSizeTotal = total;
      break;
  }

  const settings = {
    ...mainSettings,
  };

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
    setIndex((prevIndex) => prevIndex + 1);
  };

  const previous = () => {
    if (clickDelay) return;
    clickWithDelay();
    sliderRef.current.slickPrev();
    setIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className={`slider-container ${cl.wrapSlider}`}>
      <div className={cl.btnSlider}>
        <button disabled={index === 1} onClick={previous}>
          <ArrowLeft />
        </button>
        <button disabled={index === screenSizeTotal} onClick={next}>
          <ArrowRight />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className={cl.slider}>
            <CardCatalog key={index} card={slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBoxMain;
