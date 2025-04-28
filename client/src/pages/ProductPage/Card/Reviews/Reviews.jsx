import cl from './index.module.scss';
import ReviewsCard from './ReviewsCard/ReviewsCard';
import ArrowLeft from '@assets/svg/ArrowLeft';
import ArrowRight from '@assets/svg/ArrowRight';
import Heading from '../../../../components/UI/Texts/Heading/Heading';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { oneElement } from '@components/constants/settingSlider';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ReviewsNotFound from './ReviewsNotFound/ReviewsNotFound';
import LeaveReview from '../ProductDetails/LeaveReview/LeaveReview';

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
  const isSingleReview = slidesData.length === 1;
  const showArr = Array.isArray(slidesData) && slidesData.length !== 0;

  return (
    <>
      {card ? (
        <div className={cl.reviewsWrapper}>
          {showArr && (
            <div className={cl.wrapTitle}>
              <Heading type="h3">
                {getTranslation('productReviews')} {card.name} <span>{total >= 1 && `(${total})`}</span>
              </Heading>
              <LeaveReview card={card} />
            </div>
          )}

          {isSingleReview ? (
            <>
              <ReviewsCard review={slidesData[0]} />
            </>
          ) : (
            <>
              {showArr ? (
                <>
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
                </>
              ) : (
                <ReviewsNotFound card={card} />
              )}
            </>
          )}
        </div>
      ) : (
        <ReviewsNotFound card={card} />
      )}
    </>
  );
}
