import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings.js';
import deleteCroppedImage from '../helpers/deleteCroppedImage';
import cl from './index.module.scss';
import ArrowImages from '@assets/svg/Admin/Arrow/ArrowImages.jsx';
import DeletePopUp from '../../../ProductList/DeletePopUp/DeletePopUp.jsx';
import AdminMessage from '../../../../AdminMessage/AdminMessage.jsx';

const ImagesSlider = ({ onChange, croppedImages, setCroppedImages }) => {
  const sliderRef = useRef(null);
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(null);
  const [messageText, setMessageText] = useState('');

  const showDeletePopUp = (index) => setIsShowDeletePopUp(index);
  const closeDeletePopUp = () => setIsShowDeletePopUp(null);
  const handleDelete = (index) => deleteCroppedImage(index, onChange, croppedImages, setCroppedImages);

  useEffect(() => {
    if (messageText) {
      const timer = setTimeout(() => {
        setMessageText('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [messageText]);

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
            <button className={cl.deleteButton} type="button" onClick={() => showDeletePopUp(index)}>
              <img src="/svg/admin/delete.svg" />
            </button>
          </div>
        ))}
      </Slider>
      {(isShowDeletePopUp === 0 || isShowDeletePopUp) && (
        <DeletePopUp
          closeDeletePopUp={() => closeDeletePopUp()}
          handleDelete={() => handleDelete(isShowDeletePopUp)}
          setDeletedItemName={() => setMessageText('Фото видалено')}
        >
          Ви впевнені, що хочете видалити це фото?
        </DeletePopUp>
      )}
      {messageText && <AdminMessage>{messageText}</AdminMessage>}
    </div>
  );
};

export default ImagesSlider;
