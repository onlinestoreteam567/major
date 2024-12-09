import cl from './index.module.scss';
import reviewsList from './reviewsList.json';
import ReviewsCard from './ReviewsCard';
import ArrowLeft from '@assets/svg/Icons/ArrowLeft';
import ArrowRight from '@assets/svg/Icons/ArrowRight';
import Heading from '../Texts/Heading/Heading';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { oneElement } from '@components/constants/settingSlider';

export default function ListReviewsCard() {
  const [index, setIndex] = useState(1);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
    setIndex((prevIndex) => prevIndex + 1);
  };
  const previous = () => {
    sliderRef.current.slickPrev();
    setIndex((prevIndex) => prevIndex - 1);
  };

  const total = reviewsList.length;
  const slidesData = reviewsList;

  return (
    <div className={cl.wrapListReviewsCard}>
      <div className={cl.wrapTitle}>
        <Heading type="h2">Відгуки про товар</Heading>
        <Heading type="h2">Флюїд шовк для тонкого волосся</Heading>
      </div>
      <div className={`slider-container ${cl.wrapSlider}`}>
        <Slider ref={sliderRef} {...oneElement}>
          {slidesData.map((slide, index) => (
            <div key={index}>
              <ReviewsCard review={slide} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={cl.wrapReviewBtn}>
        <button type="button" disabled={index === 1} onClick={previous}>
          <ArrowLeft />
        </button>
        <button type="button" disabled={index === total} onClick={next}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
