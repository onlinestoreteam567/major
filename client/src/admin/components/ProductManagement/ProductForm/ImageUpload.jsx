import { useState, createRef } from 'react';
import { Controller } from 'react-hook-form';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const ImageUpload = ({ control, name }) => {
  const [image, setImage] = useState(null);
  const [croppedImages, setCroppedImages] = useState([]);
  const cropperRef = createRef();

  // Handle file input change event
  const onFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  // Crop the image and store it in an array
  const getCroppedImage = (onChange) => {
    if (cropperRef.current?.cropper) {
      cropperRef.current.cropper.getCroppedCanvas().toBlob((blob) => {
        if (blob) {
          const croppedFile = new File([blob], `cropped-image-${croppedImages.length + 1}.png`, {
            type: 'image/png',
          });
          const updatedImages = [...croppedImages, croppedFile];
          setCroppedImages(updatedImages);
          onChange(updatedImages);
          setImage(null);
        }
      }, 'image/png');
    }
  };

  // Delete a cropped image by index
  const deleteCroppedImage = (index, onChange) => {
    const updatedImages = croppedImages.filter((_, i) => i !== index);
    setCroppedImages(updatedImages);
    onChange(updatedImages);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <div>
          <label>
            Фото
            <input type="file" accept="image/*" multiple onChange={onFileChange} />
          </label>

          {image && (
            <div>
              <Cropper
                ref={cropperRef}
                style={{ height: 400, width: '100%' }}
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
              <button type="button" onClick={() => getCroppedImage(onChange)}>
                Обрізати & Додати
              </button>
            </div>
          )}

          {/* Display cropped images with delete button */}
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
            {croppedImages.map((img, index) => (
              <div key={index} style={{ position: 'relative', marginRight: '10px' }}>
                <img
                  src={URL.createObjectURL(img)}
                  alt={`Cropped ${index + 1}`}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }}
                />
                <button onClick={() => deleteCroppedImage(index, onChange)}>Видалити</button>
              </div>
            ))}
          </div>
        </div>
      )}
    />
  );
};

export default ImageUpload;
