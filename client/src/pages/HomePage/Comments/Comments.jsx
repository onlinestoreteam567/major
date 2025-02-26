import cl from './index.module.scss';
import commentsData from './data';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import CommentCard from '@components/UI/CommentCard/CommentCard';
import Slider from 'react-slick';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { commentsSettings } from '@components/constants/settingSlider';
import ArrowLeft from '@assets/svg/ArrowLeft';
import ArrowRight from '@assets/svg/ArrowRight';
import useScreenSizes from '@hooks/useScreenSizes';

let screenSizeTotal;

const Comments = () => {
  const [index, setIndex] = useState(1);
  const { tablet, deskmin, deskmax } = useScreenSizes();

  const sliderRef = useRef(null);
  const slidesData = commentsData;
  const total = slidesData.length;

  switch (true) {
    case tablet:
      screenSizeTotal = total - 1;
      break;
    case deskmin:
      screenSizeTotal = total - 2;
      break;
    case deskmax:
      screenSizeTotal = total - 2;
      break;
    default:
      screenSizeTotal = total;
      break;
  }

  const settings = {
    ...commentsSettings,
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

  const { getTranslation } = useTranslationNamespace('common');

  return (
    <section className={cl.comments}>
      <Heading type="h2">{getTranslation('reviewsAboutProducts')}</Heading>
      <div className={cl.btnSlider}>
        <button disabled={index === 1} onClick={previous}>
          <ArrowLeft />
        </button>
        <button disabled={index === screenSizeTotal} onClick={next}>
          <ArrowRight />
        </button>
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
