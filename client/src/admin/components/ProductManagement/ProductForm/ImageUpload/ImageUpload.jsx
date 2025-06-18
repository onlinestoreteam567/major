import { useState, createRef, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import cl from './index.module.scss';
import handleImageUpload from './helpers/handleImageUpload';
import handleCroppedImage from './helpers/handleCroppedImage';
import Button from '@components/UI/Button/Button';
import ImagesSlider from './ImagesSlider/ImagesSlider';

const ImageUpload = ({ control, name, errors, labelText = 'Додати фото', resetTrigger, setMessageText }) => {
  const [image, setImage] = useState(null);
  const [originalFile, setOriginalFile] = useState(null);
  const [croppedImages, setCroppedImages] = useState([]);
  const cropperRef = createRef();

  useEffect(() => {
    setImage(null);
    setOriginalFile(null);
    setCroppedImages([]);
  }, [resetTrigger]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <div className={cl.imageUploadWrapper}>
          {image ? (
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
                      setOriginalFile
                    );
                  }}
                >
                  Додати
                </Button>
              </div>
            </div>
          ) : (
            <div className={cl.imagesContainer}>
              {croppedImages.length > 0 ? (
                <ImagesSlider croppedImages={croppedImages} setCroppedImages={setCroppedImages} onChange={onChange} />
              ) : (
                <img
                  className={`${cl.image} ${errors && errors[name] && cl.error}`}
                  src="/images/admin/product/imagePlaceholder.webp"
                />
              )}
            </div>
          )}
          <label htmlFor={name}>
            <span>{labelText}</span>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageUpload(event, setImage, setOriginalFile)}
              id={name}
              name={name}
            />
          </label>
        </div>
      )}
    />
  );
};

export default ImageUpload;
