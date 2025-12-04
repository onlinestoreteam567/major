import Slider from 'react-slick';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import ArrowLeft from '@components/UI/icons/ArrowLeft';
import ArrowRight from '@components/UI/icons/ArrowRight';
import { aboutUsSettings, mainSettings } from '@components/constants/settingSlider';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import CategoryCard from '@pages/CatalogPage/FilterCategory/CategoryCard/CategoryCard';
import ButtonAriaLabel from '../Button/ButtonAriaLabel';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ProductCard from '../ProductCard/ProductCard';
import Heading from '../Texts/Heading/Heading';
import Paragraph from '../Texts/Paragraph/Paragraph';
let screenSizeTotal;

const SliderBoxMain = ({ slidesData, total, isCatalog, isKeyBenefits }) => {
  const { getTranslation } = useTranslationNamespace('aboutPage');
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

  const settings = isKeyBenefits ? { ...aboutUsSettings } : { ...mainSettings };

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
        <ButtonAriaLabel al={'previousProducts'} disabled={index === 1} onClick={previous}>
          <ArrowLeft />
        </ButtonAriaLabel>
        <ButtonAriaLabel al={'nextProducts'} disabled={index === screenSizeTotal} onClick={next}>
          <ArrowRight />
        </ButtonAriaLabel>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {/* Determine which data structure to map and render */}
        {isKeyBenefits
          ? // Case 1: isKeyBenefits is true
            slidesData.map((slide, index) => (
              <div key={index} className={cl.slider}>
                <div className={cl.benefit}>
                  <Heading type="h2">{getTranslation(slide.title)}</Heading>
                  <Paragraph type="body1">{getTranslation(slide.description)}</Paragraph>
                </div>
              </div>
            ))
          : isCatalog
            ? // Case 2: isKeyBenefits is false, isCatalog is true
              slidesData.map((slide, index) => (
                <div key={index} className={cl.slider}>
                  <CategoryCard item={slide} key={index} />
                </div>
              ))
            : // Case 3: isKeyBenefits is false, isCatalog is false
              slidesData.map((slide, index) => (
                <div key={index} className={cl.slider}>
                  <ProductCard key={index} card={slide} />
                </div>
              ))}
      </Slider>
    </div>
  );
};

export default SliderBoxMain;
