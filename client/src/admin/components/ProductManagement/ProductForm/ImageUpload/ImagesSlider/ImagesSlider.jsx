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

const ImagesSlider = ({ onChange, images, setImages, setValue, getValues }) => {
  const sliderRef = useRef(null);
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(null);
  const [messageText, setMessageText] = useState('');

  const handleDeleteFromBackend = (image) => {
    setValue('remove_images', getValues('remove_images') ? [...getValues('remove_images'), image.id] : [image.id]);
    console.log('backend');
  };

  const showDeletePopUp = (index) => setIsShowDeletePopUp(index);
  const closeDeletePopUp = () => setIsShowDeletePopUp(null);
  const handleDelete = (index) => deleteCroppedImage(index, onChange, images, setImages);

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
        {images.map((img, index) => (
          <div key={index}>
            {img instanceof File ? (
              <>
                <img className={cl.image} src={URL.createObjectURL(img)} alt={`Cropped ${index}`} />
                <button className={cl.deleteButton} type="button" onClick={() => showDeletePopUp(index)}>
                  <img src="/svg/admin/delete.svg" alt="Delete" />
                </button>
              </>
            ) : (
              <>
                <img className={cl.image} src={img.image || ''} alt={`Cropped ${index}`} />
                <button
                  className={cl.deleteButton}
                  type="button"
                  onClick={() => {
                    showDeletePopUp(index);
                    handleDeleteFromBackend(img);
                  }}
                >
                  <img src="/svg/admin/delete.svg" alt="Delete" />
                </button>
              </>
            )}
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
