import cl from './index.module.scss';
import commentsData from './data';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import CommentCard from '@components/UI/CommentCard/CommentCard';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { commentsSettings } from '@components/constants/settingSlider';
import ArrowLeft from '@assets/svg/Icons/ArrowLeft';
import ArrowRight from '@assets/svg/Icons/ArrowRight';

const Comments = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [index, setIndex] = useState(1);
  const sliderRef = useRef(null);
  const slidesData = commentsData;
  const total = slidesData.length;

  useEffect(() => {
    if (!slidesData) return;
    setSlidesToShow(total < 4 ? total : 4);
  }, [slidesData, total]);

  const settings = {
    ...commentsSettings,
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

  const { getTranslation } = useTranslationNamespace('common');

  return (
    <section className={cl.comments}>
      <Heading type="h2">{getTranslation('reviewsAboutProducts')}</Heading>
      <div className={`slider-container ${cl.wrapSlider}`}>
        <Slider ref={sliderRef} {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className={cl.slider}>
              <CommentCard cardData={slide} />
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
    </section>
  );
};

export default Comments;
