import ArrowLeft from '@assets/svg/ArrowLeft';
import cl from './index.module.scss';
import { useRef, useState } from 'react';
import ArrowRight from '@assets/svg/ArrowRight';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { oneElement } from '@components/constants/settingSlider';
import LabelHit from '../Labels/LabelHit';
import LabelNew from '../Labels/LabelNew';
import LabelSale from '../Labels/LabelSale';

export default function ImgMobile({ card }) {
  // console.log(card);
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

  const slidesData = card.images;
  const total = slidesData.length;

  const imageLinks = slidesData.reduce((acc, item) => {
    acc.push(item.image);
    return acc;
  }, []);

  return (
    <div className={`slider-container ${cl.wrapSliderMob}`}>
      <Slider ref={sliderRef} {...oneElement}>
        {imageLinks.map((slide, index) => (
          <div key={index} className={cl.wrapImgMobCard}>
            {card.is_best_seller ? <LabelHit /> : ''}
            {card.is_new ? <LabelNew /> : ''}
            {card.is_discount ? <LabelSale card={card} /> : ''}
            <img src={slide} alt={card.name} />
          </div>
        ))}
      </Slider>
      <div className={cl.wrapImgBtn}>
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

// const imgs = [
//   { id: 1, image: 'https://res.cloudinary.com/ds0ib7qvu/image/upload/lkrivokb7gvghptrpgbo' },

//   { id: 2, image: 'https://res.cloudinary.com/ds0ib7qvu/image/upload/l9mxskesoudboh3sb8uk' },

//   { id: 3, image: 'https://res.cloudinary.com/ds0ib7qvu/image/upload/pdfgfclttctxmxj4kmxu' },

//   { id: 4, image: 'https://res.cloudinary.com/ds0ib7qvu/image/upload/nmxbn8k2qwyqlwwbbitf' },

//   { id: 5, image: 'https://res.cloudinary.com/ds0ib7qvu/image/upload/bbdf5ea5s0hjlottr1ea' },
// ];
// {id: 1, image: 'https://res.cloudinary.com/ds0ib7qvu/image/upload/lkrivokb7gvghptrpgbo'},

// {id: 2, image: 'https://res.cloudinary.com/ds0ib7qvu/image/upload/l9mxskesoudboh3sb8uk'},

// {id: 3, image: 'https://res.cloudinary.com/ds0ib7qvu/image/upload/pdfgfclttctxmxj4kmxu'},

// {id: 4, image: 'https://res.cloudinary.com/ds0ib7qvu/image/upload/nmxbn8k2qwyqlwwbbitf'},

// {id: 5, image: 'https://res.cloudinary.com/ds0ib7qvu/image/upload/bbdf5ea5s0hjlottr1ea'},
