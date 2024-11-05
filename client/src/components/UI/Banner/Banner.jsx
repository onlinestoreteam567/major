import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import ProductCard from '@UI/ProductCard/ProductCard';
import defaultSettings from './defaultSettings';
import commentsSettings from './commentsSettings';
import Arrows from './Arrows';
import CommentCard from '@UI/CommentCard/CommentCard';

const Banner = ({ slidesData, type = 'default' }) => {
  const sliderRef = useRef(null);
  console.log(slidesData);

  return (
    <div className={`slider-container ${cl.bannerWrapper}`}>
      <Arrows arrow={'previous'} sliderRef={sliderRef} />
      {type === 'default' && (
        <Slider ref={sliderRef} {...defaultSettings}>
          {slidesData.map((slide, index) => (
            <ProductCard
              key={index}
              cardData={{
                img: { src: slide.imgSrc, alt: slide.imgAlt },
                title: slide.title,
                price: '123',
                mlQuantity: '555',
                feedbackAmount: slide.feedbackAmount,
                stars: slide.stars,
                label: slide.label,
                percent: slide.percent,
              }}
            />
          ))}
        </Slider>
      )}

      {type === 'comments' && (
        <Slider ref={sliderRef} {...commentsSettings}>
          {slidesData.map((slide, index) => (
            <CommentCard
              key={index}
              cardData={{
                productTitle: slide.productTitle,
                rating: slide.rating,
                userComment: slide.userComment,
                userName: slide.userName,
                date: slide.date,
                link: slide.link,
              }}
            />
          ))}
        </Slider>
      )}
      <Arrows arrow={'next'} sliderRef={sliderRef} />
    </div>
  );
};

export default Banner;
