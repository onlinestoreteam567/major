import 'cropperjs/dist/cropper.css';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import CropperContainerWrapper from './CropperContainerWrapper/CropperContainerWrapper';
import handleImageUpload from './helpers/handleImageUpload';
import ImagesSlider from './ImagesSlider/ImagesSlider';
import cl from './index.module.scss';

const AdminCropperImage = ({
  control,
  name,
  errors,
  labelText = 'Додати фото',
  resetImagesTrigger,
  setMessageText,
  uploadedImages,
  setValue,
  getValues,
}) => {
  const [image, setImage] = useState(null);
  const [originalFile, setOriginalFile] = useState(null);
  const [croppedImages, setCroppedImages] = useState([]);
  const [images, setImages] = useState([...(uploadedImages ?? []), ...(croppedImages ?? [])]);

  useEffect(() => {
    if (resetImagesTrigger) {
      setImage(null);
      setOriginalFile(null);
      setCroppedImages([]);
      setImages([]);
    }
  }, [resetImagesTrigger]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <div className={cl.imageUploadWrapper}>
          {image ? (
            <CropperContainerWrapper
              image={image}
              setImage={setImage}
              setMessageText={setMessageText}
              onChange={onChange}
              croppedImages={croppedImages}
              setCroppedImages={setCroppedImages}
              originalFile={originalFile}
              setOriginalFile={setOriginalFile}
              images={images}
              setImages={setImages}
            />
          ) : (
            <div className={cl.imagesContainer}>
              {images.length > 0 ? (
                <ImagesSlider
                  images={images}
                  setImages={setImages}
                  onChange={onChange}
                  setValue={setValue}
                  getValues={getValues}
                />
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

export default AdminCropperImage;
