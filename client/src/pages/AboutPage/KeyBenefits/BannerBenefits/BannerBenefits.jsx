import Slider from 'react-slick';
import cl from './index.module.scss';
import { useRef, useState } from 'react';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel';
import { aboutUsSettings } from '@components/constants/settingSlider';
import Heading from '@components/UI/Texts/Heading/Heading';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import keyBenefitsArray from '../keyBenefitsArray';
import ArrowLeft from '@UI/icons/ArrowLeft';
import ArrowRight from '@UI/icons/ArrowRight';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const BannerBenefits = () => {
  let sliderRef = useRef(null);
  const [index, setIndex] = useState(2);
  const { getTranslation } = useTranslationNamespace('aboutPage');
  const settings = {
    ...aboutUsSettings,
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
    setIndex((prevIndex) => prevIndex + 2);
  };
  const previous = () => {
    if (clickDelay) return;
    clickWithDelay();
    sliderRef.current.slickPrev();
    setIndex((prevIndex) => prevIndex - 2);
  };

  return (
    <div className={`slider-container ${cl.bannerBenefits}`}>
      <div className={cl.btnSlider}>
        <ButtonAriaLabel al={'previousProducts'} disabled={index === 2} onClick={previous}>
          <ArrowLeft />
        </ButtonAriaLabel>
        <ButtonAriaLabel al={'nextProducts'} disabled={index === 6} onClick={next}>
          <ArrowRight />
        </ButtonAriaLabel>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {keyBenefitsArray.map((benefit, index) => (
          <div key={index}>
            <div className={cl.benefit}>
              <Heading type="h2">{getTranslation(benefit.title)}</Heading>
              <Paragraph type="body1">{getTranslation(benefit.description)}</Paragraph>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default BannerBenefits;
