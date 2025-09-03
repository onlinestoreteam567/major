import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import CommentCard from './CommentCard/CommentCard';
import Slider from 'react-slick';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { commentsSettings } from '@components/constants/settingSlider';
import ArrowLeft from '@components/UI/icons/ArrowLeft';
import ArrowRight from '@components/UI/icons/ArrowRight';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reviewsGetLatest } from '@redux/reviews/service';
import { selectReviews } from '@redux/selectors';

const Comments = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(reviewsGetLatest());
  }, [dispatch]);

  const [index, setIndex] = useState(1);
  const [clickDelay, setClickDelay] = useState(false);
  const timer = useRef(null);
  const sliderRef = useRef(null);

  const { tablet, deskmin, deskmax } = useScreenSizes();
  const { getTranslation } = useTranslationNamespace('common');

  const slidesData = Array.isArray(reviews) ? [...reviews].reverse().slice(0, 6) : [];
  const total = slidesData.length;

  if (total === 0) return null;

  let screenSizeTotal;
  switch (true) {
    case tablet:
      screenSizeTotal = total - 1;
      break;
    case deskmin:
    case deskmax:
      screenSizeTotal = total - 2;
      break;
    default:
      screenSizeTotal = total;
      break;
  }

  const settings = {
    ...commentsSettings,
    lazyLoad: false,
  };

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
    <section className={cl.comments}>
      <Heading type="h2">{getTranslation('reviewsAboutProducts')}</Heading>
      <div className={cl.btnSlider}>
        <ButtonAriaLabel al="previousReviews" disabled={index === 1} onClick={previous}>
          <ArrowLeft />
        </ButtonAriaLabel>
        <ButtonAriaLabel al="nextReviews" disabled={index === screenSizeTotal} onClick={next}>
          <ArrowRight />
        </ButtonAriaLabel>
      </div>
      <div className={`slider-container ${cl.wrapSlider}`}>
        <Slider ref={sliderRef} {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className={cl.slider}>
              <CommentCard cardData={slide} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Comments;
