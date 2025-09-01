import Slider from 'react-slick';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import deleteCroppedImage from '../helpers/deleteCroppedImage.js';
import cl from './index.module.scss';
import ArrowImages from '@assets/svg/Admin/Arrow/ArrowImages.jsx';
import DeletePopUp from '@components/admin/DeletePopUp/DeletePopUp.jsx';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage.jsx';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import { adminCropperSlider } from '@components/constants/settingSlider.js';

const ImagesSlider = ({ onChange, images, setImages, setValue, getValues }) => {
  const sliderRef = useRef(null);
  const [isShowDeletePopUp, setIsShowDeletePopUp] = useState(null);
  const [messageText, showMessageText] = useTimedMessage();

  const handleDeleteFromBackend = (image) =>
    setValue('remove_images', getValues('remove_images') ? [...getValues('remove_images'), image.id] : [image.id]);
  const showDeletePopUp = (index) => setIsShowDeletePopUp(index);
  const closeDeletePopUp = () => setIsShowDeletePopUp(null);

  const handleDelete = (index) => {
    deleteCroppedImage(index, onChange, images, setImages);
    showMessageText('Фото видалено');
  };

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

      <Slider ref={sliderRef} {...adminCropperSlider}>
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
          handleDelete={() => {
            handleDelete(isShowDeletePopUp);
            const currentImage = images[isShowDeletePopUp];
            if (!(currentImage instanceof File)) {
              handleDeleteFromBackend(currentImage);
            }
            closeDeletePopUp();
          }}
        >
          Ви впевнені, що хочете видалити це фото?
        </DeletePopUp>
      )}
      {messageText && <AdminMessage>{messageText}</AdminMessage>}
    </div>
  );
};

export default ImagesSlider;
