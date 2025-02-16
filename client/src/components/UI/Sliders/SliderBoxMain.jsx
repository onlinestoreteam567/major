import Slider from 'react-slick';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import CardCatalog from '../../../pages/CatalogPage/Products/CardsContainer/Card/Card';
import ArrowLeft from '@assets/svg/ArrowLeft';
import ArrowRight from '@assets/svg/ArrowRight';
import { mainSettings } from '@components/constants/settingSlider';

const SliderBoxMain = ({ slidesData, total }) => {
  // console.log(slidesData);
  // const total = slidesData.length;

  // const [slidesToShow, setSlidesToShow] = useState(4);
  const [index, setIndex] = useState(1);
  let sliderRef = useRef(null);

  // useEffect(() => {
  //   if (!slidesData) return;
  //   setSlidesToShow(total < 4 ? total : 4);
  // }, [slidesData, total]);

  const settings = {
    ...mainSettings,
    // slidesToShow: slidesToShow,
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
      <div className={cl.btnSlider}>
        <button disabled={index === 1} onClick={previous}>
          <ArrowLeft />
        </button>
        <button disabled={index === total} onClick={next}>
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
