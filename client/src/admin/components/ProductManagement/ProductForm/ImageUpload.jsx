import { useState, createRef } from 'react';
import { Controller } from 'react-hook-form';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const ImageUpload = ({ control, name }) => {
  const [image, setImage] = useState(null); // Current selected image for cropping
  const [croppedImages, setCroppedImages] = useState([]); // Array of cropped images
  const cropperRef = createRef();

  // Handle file selection
  const onFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to array
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result); // Load first image for cropping
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

          // Update state with new cropped image
          const updatedImages = [...croppedImages, croppedFile];
          setCroppedImages(updatedImages);

          // Pass the updated array to react-hook-form
          onChange(updatedImages);

          // Reset image to allow selection of the next one
          setImage(null);
        }
      }, 'image/png');
    }
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

          {/* Show cropper only if an image is selected */}
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
                Crop & Add
              </button>
            </div>
          )}

          {/* Show all cropped images */}
          <div>
            {croppedImages.map((img, index) => (
              <img
                key={index}
                src={URL.createObjectURL(img)}
                alt={`Cropped ${index + 1}`}
                style={{ width: '100px', marginRight: '10px' }}
              />
            ))}
          </div>
        </div>
      )}
    />
  );
};

export default ImageUpload;
