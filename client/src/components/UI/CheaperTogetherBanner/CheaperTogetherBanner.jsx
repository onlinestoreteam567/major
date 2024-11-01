import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cl from './index.module.scss';
import leftArrow from '../../../assets/svg/banners/arrowLeft.svg';
import rightArrow from '../../../assets/svg/banners/arrowRight.svg';
import CheaperTogetherCard from './CheaperTogetherCard';
import firstSlideImage from '../../../assets/png/banners/bestSellersBanner/1.png';
import secondSlideImage from '../../../assets/png/banners/bestSellersBanner/2.png';
import thirdSlideImage from '../../../assets/png/banners/bestSellersBanner/3.png';
import fourthSlideImage from '../../../assets/png/banners/bestSellersBanner/4.png';
import fivethSlideImage from '../../../assets/png/banners/bestSellersBanner/5.png';
import sixthSlideImage from '../../../assets/png/banners/bestSellersBanner/6.png';
import seventhSlideImage from '../../../assets/png/banners/bestSellersBanner/7.png';
import eighthSlideImage from '../../../assets/png/banners/bestSellersBanner/8.png';

const settings = {
  // Enable keyboard arrow navigation
  accessibility: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CheaperTogetherBanner = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  }
 
  

  const slidesData = [
    { imgSrc: firstSlideImage, imgAlt: 'First best seller image', feedbackAmount: '1' },
    { imgSrc: secondSlideImage, imgAlt: 'Second best seller image', feedbackAmount: '1' },
    { imgSrc: thirdSlideImage, imgAlt: 'Third best seller image', feedbackAmount: '1' },
    { imgSrc: fourthSlideImage, imgAlt: 'Fourth best seller image', feedbackAmount: '5' },
    { imgSrc: fivethSlideImage, imgAlt: 'Fiveth best seller image', feedbackAmount: '5' },
    { imgSrc: sixthSlideImage, imgAlt: 'Sixth best seller image', feedbackAmount: '5' },
    { imgSrc: seventhSlideImage, imgAlt: 'Seventh best seller image', feedbackAmount: '5' },
    { imgSrc: eighthSlideImage, imgAlt: 'Eighth best seller image', feedbackAmount: '5' },
  ];

  return (
    
    <div className="slider-container">
      <div style={{textAlign: 'center', marginTop: '150px'}}><h2>Разом дешевше</h2></div>
      <div style={{ textAlign: 'end', marginTop: '70px' }}>
        <button className={`button ${cl.arrow}`} onClick={previous}>
          <img src={leftArrow} alt="Button for previous slide" />
        </button>
        <button className={`button ${cl.arrow}`} onClick={next}>
          <img src={rightArrow} alt="Button for next slide" />
        </button>
      </div>
      <Slider ref={(slider) => { sliderRef = slider; }} {...settings}>
  {slidesData.map((slide, index) => (
    <CheaperTogetherCard
      key={index}
      cardData={{
        img: { src: slide.imgSrc, alt: slide.imgAlt },
        title: 'title',
        price: '123',
        mlQuantity: '555',
        feedbackAmount: slide.feedbackAmount,
      }}
    />
  ))}
</Slider>

    </div>
  );
};

export default CheaperTogetherBanner;
