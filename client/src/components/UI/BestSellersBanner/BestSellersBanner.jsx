import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl from "./index.module.scss";
import leftArrow from "../../../assets/svg/banners/arrowLeft.svg";
import rightArrow from "../../../assets/svg/banners/arrowRight.svg";
import BestSellerCard from "./BestSellerCard";
import firstSlideImage from "../../../assets/png/banners/bestSellersBanner/1.png";
import secondSlideImage from "../../../assets/png/banners/bestSellersBanner/2.png";
import thirdSlideImage from "../../../assets/png/banners/bestSellersBanner/3.png";
import fourthSlideImage from "../../../assets/png/banners/bestSellersBanner/4.png";

//* Щоб не було багу, завжди має бути 20 елементів.

const BestSellersBanner = () => {
  console.log(firstSlideImage);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    // Enable keyboard arrow navigation
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <div className="slider-container">
      <div style={{ textAlign: "end" }}>
        <button className={`button ${cl.arrow}`} onClick={previous}>
          <img src={leftArrow} alt="Button for previous slide" />
        </button>
        <button className={`button ${cl.arrow}`} onClick={next}>
          <img src={rightArrow} alt="Button for next slide" />
        </button>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <BestSellerCard
          cardData={{
            img: {
              src: firstSlideImage,
              alt: "First best seller image",
            },
            title: "title",
            price: "123",
            mlQuantity: "555",
            feedbackAmount: "1",
          }}
        ></BestSellerCard>
        <BestSellerCard
          cardData={{
            img: {
              src: secondSlideImage,
              alt: "First best seller image",
            },
            title: "title",
            price: "123",
            mlQuantity: "555",
            feedbackAmount: "1",
          }}
        ></BestSellerCard>
        <BestSellerCard
          cardData={{
            img: {
              src: thirdSlideImage,
              alt: "First best seller image",
            },
            title: "title",
            price: "123",
            mlQuantity: "555",
            feedbackAmount: "1",
          }}
        ></BestSellerCard>
        <BestSellerCard
          cardData={{
            img: {
              src: fourthSlideImage,
              alt: "First best seller image",
            },
            title: "title",
            price: "123",
            mlQuantity: "555",
            feedbackAmount: "5",
          }}
        ></BestSellerCard>
        {/* next 16 cards here */}
      </Slider>
    </div>
  );
};

export default BestSellersBanner;
