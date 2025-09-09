import { useState, useEffect } from 'react';

// A custom hook to handle image loading errors and set a placeholder.
export function useImageError(initialSrc) {
  const placeholderImage = '/images/placeholder.webp';
  const [imageSrc, setImageSrc] = useState(initialSrc || placeholderImage);

  // Use useEffect to update imageSrc whenever initialSrc changes.
  useEffect(() => {
    setImageSrc(initialSrc || placeholderImage);
  }, [initialSrc]);

  const handleError = () => {
    setImageSrc(placeholderImage);
  };

  return [imageSrc, handleError];
}
