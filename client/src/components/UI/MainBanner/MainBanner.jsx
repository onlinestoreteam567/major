import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings';
import Slide from './Slide';

const MainBanner = () => {
  const sliderRef = useRef(null);

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        <Slide labelText={'НОВИНКА'} title={'Флюїд-шовк для тонкого волосся'} slideClassName={'firstSlide'} />
        <Slide
          labelText={'ХІТ ПРОДАЖУ'}
          title={'Шампунь-реконструктор для пошкодженого волосся'}
          slideClassName={'secondSlide'}
        />
        <Slide labelText={'НОВИНКА'} title={'Крем-маска для кучерявого волосся'} slideClassName={'thirdSlide'} />
      </Slider>
    </div>
  );
};

export default MainBanner;
