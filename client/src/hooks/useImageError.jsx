import { useState } from 'react';

// A custom hook to handle image loading errors and set a placeholder.
export function useImageError(initialSrc) {
  const placeholderImage = '/images/placeholder.webp';
  // If initialSrc is null or undefined, use the placeholderImage.
  const [imageSrc, setImageSrc] = useState(initialSrc || placeholderImage);

  const handleError = () => {
    setImageSrc(placeholderImage);
  };

  return [imageSrc, handleError];
}
