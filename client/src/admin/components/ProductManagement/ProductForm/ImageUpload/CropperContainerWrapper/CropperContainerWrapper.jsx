import { Cropper } from 'react-cropper';
import cl from '../index.module.scss';
import { createRef } from 'react';
import Button from '@components/UI/Button/Button';
import handleCroppedImage from '../helpers/handleCroppedImage';

const CropperContainerWrapper = ({
  image,
  setImage,
  setMessageText,
  onChange,
  croppedImages,
  setCroppedImages,
  originalFile,
  setOriginalFile,
  images,
  setImages,
}) => {
  const cropperRef = createRef();

  return (
    <div className={cl.cropperContainerWrapper}>
      <h2>Обріжте фото</h2>
      <Cropper
        className={cl.cropperContainer}
        ref={cropperRef}
        zoomTo={0.5}
        initialAspectRatio={1}
        aspectRatio={1}
        preview=".img-preview"
        src={image}
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        guides={true}
      />
      <div className={cl.buttonsWrapper}>
        <Button variant="secondary" type="button" onClick={() => setImage(null)}>
          Відміна
        </Button>
        <Button
          type="button"
          onClick={() => {
            setMessageText();
            handleCroppedImage(
              onChange,
              cropperRef,
              croppedImages,
              setCroppedImages,
              setImage,
              originalFile,
              setOriginalFile,
              images,
              setImages
            );
          }}
        >
          Додати
        </Button>
      </div>
    </div>
  );
};
export default CropperContainerWrapper;
