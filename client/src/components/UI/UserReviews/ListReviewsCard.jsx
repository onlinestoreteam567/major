import cl from './index.module.scss';
import ReviewsCard from './ReviewsCard';
import ArrowLeft from '@assets/svg/ArrowLeft';
import ArrowRight from '@assets/svg/ArrowRight';
import Heading from '../Texts/Heading/Heading';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { oneElement } from '@components/constants/settingSlider';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import EmptyPage from '@components/helpers/EmptyPage';

export default function ListReviewsCard({ card }) {
  const [index, setIndex] = useState(1);
  const { getTranslation } = useTranslationNamespace('common');

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
    setIndex((prevIndex) => prevIndex + 1);
  };
  const previous = () => {
    sliderRef.current.slickPrev();
    setIndex((prevIndex) => prevIndex - 1);
  };

  const total = card.reviews.length || 0;
  const slidesData = card.reviews || [];

  const showArr = Array.isArray(slidesData) && slidesData.length !== 0;

  return (
    <>
      {card ? (
        <div className={cl.wrapListReviewsCard}>
          <div className={cl.wrapTitle}>
            <Heading type="h2">{getTranslation('productReviews')}</Heading>
            <Heading type="h2">{card.name}</Heading>
          </div>
          <div className={cl.wrapReviewBtn}>
            <button type="button" disabled={index === 1} onClick={previous}>
              <ArrowLeft />
            </button>
            <button type="button" disabled={index === total} onClick={next}>
              <ArrowRight />
            </button>
          </div>
          <div className={`slider-container ${cl.wrapSlider}`}>
            {showArr ? (
              <Slider ref={sliderRef} {...oneElement}>
                {slidesData.map((slide, index) => (
                  <div key={index}>
                    <ReviewsCard review={slide} />
                  </div>
                ))}
              </Slider>
            ) : (
              <EmptyPage message={getTranslation('reviewsAreMissing')} />
            )}
          </div>
        </div>
      ) : (
        <EmptyPage message={getTranslation('reviewsAreMissing')} />
      )}
    </>
  );
}
