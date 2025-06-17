import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings.js';
import deleteCroppedImage from '../helpers/deleteCroppedImage';
import cl from './index.module.scss';
import ArrowImages from '@assets/svg/Admin/Arrow/ArrowImages.jsx';

const ImagesSlider = ({ onChange, croppedImages, setCroppedImages }) => {
  const sliderRef = useRef(null);

  return (
    <div className={`slider-container admin-slider-container ${cl.imagesSlider} `}>
      <div className={cl.btnSlider}>
        <button type="button" className={`${cl.arrow} ${cl.arrowPrev}`} onClick={() => sliderRef.current.slickPrev()}>
          <ArrowImages />
        </button>
        <button type="button" className={`${cl.arrow} ${cl.arrowNext}`} onClick={() => sliderRef.current.slickNext()}>
          <ArrowImages />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {croppedImages.map((img, index) => (
          <div key={index}>
            <img className={cl.image} src={URL.createObjectURL(img)} alt={`Cropped ${index + 1}`} />
            <button
              className={cl.deleteButton}
              type="button"
              onClick={() => deleteCroppedImage(index, onChange, croppedImages, setCroppedImages)}
            >
              <img src="/svg/admin/delete.svg" />
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImagesSlider;
