import { useEffect, useState } from 'react';
import cl from './index.module.scss';

const ImagePreview = ({ file, uploadedImage, errors, name }) => {
  const [previewUrl, setPreviewUrl] = useState('/images/admin/categoryPlaceholder.webp');

  useEffect(() => {
    if (file instanceof File) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      return () => URL.revokeObjectURL(url);
    }

    if (uploadedImage) {
      setPreviewUrl(uploadedImage);
      return;
    }
  }, [file, uploadedImage]);

  if (!previewUrl) return null;

  return (
    <div className={`${cl.previewImage} ${errors && errors[name] && cl.error}`}>
      <img src={previewUrl} alt="Image Preview" />
    </div>
  );
};

export default ImagePreview;
