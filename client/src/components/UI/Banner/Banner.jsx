import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import settings from './settings';
import Arrows from './Arrows';

const Banner = ({ slidesData }) => {
  const sliderRef = useRef(null);

  return (
    <div className={`slider-container ${cl.bannerWrapper}`}>
      <Arrows arrow={'previous'} sliderRef={sliderRef} />
      <Slider ref={sliderRef} {...settings}>
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
      <Arrows arrow={'next'} sliderRef={sliderRef} />
    </div>
  );
};

export default Banner;
