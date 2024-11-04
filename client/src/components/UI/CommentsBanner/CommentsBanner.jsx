import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import leftArrow from '../../../assets/svg/banners/arrowLeft.svg';
import rightArrow from '../../../assets/svg/banners/arrowRight.svg';
import CommentCard from './CommentCard';
import settings from './settings';
import commentsData from './data';

// Comments banner component
const CommentsBanner = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="slider-container">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Відгуки про наші засоби</h2>
      </div>
      <div style={{ textAlign: 'end', marginTop: '30px' }}>
        <button className={`button ${cl.arrow}`} onClick={previous}>
          <img src={leftArrow} alt="Previous comment" />
        </button>
        <button className={`button ${cl.arrow}`} onClick={next}>
          <img src={rightArrow} alt="Next comment" />
        </button>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {commentsData.map((comment, index) => (
          <CommentCard key={index} commentData={comment} />
        ))}
      </Slider>
    </div>
  );
};

export default CommentsBanner;
