import { useState, createRef } from 'react';
import { Controller } from 'react-hook-form';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import cl from './index.module.scss';
import handleImageUpload from './helpers/handleImageUpload';
import handleCroppedImage from './helpers/handleCroppedImage';
import deleteCroppedImage from './helpers/deleteCroppedImage';

const ImageUpload = ({ control, name, errors, labelText = 'Додати фото' }) => {
  const [image, setImage] = useState(null);
  const [originalFile, setOriginalFile] = useState(null);
  const [croppedImages, setCroppedImages] = useState([]);
  const cropperRef = createRef();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <div className={cl.inputWrapper}>
          {image ? (
            <div>
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
              <button
                type="button"
                onClick={() =>
                  handleCroppedImage(
                    onChange,
                    cropperRef,
                    croppedImages,
                    setCroppedImages,
                    setImage,
                    originalFile,
                    setOriginalFile
                  )
                }
              >
                Обрізати & Додати
              </button>
            </div>
          ) : (
            <img src="/images/admin/product/imagePlaceholder.webp" />
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

          <div className={cl.croppedImageContainer}>
            {croppedImages.map((img, index) => (
              <div key={index}>
                <img src={URL.createObjectURL(img)} alt={`Cropped ${index + 1}`} />
                <button
                  type="button"
                  onClick={() => deleteCroppedImage(index, onChange, croppedImages, setCroppedImages)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {errors && errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
        </div>
      )}
    />
  );
};

export default ImageUpload;
