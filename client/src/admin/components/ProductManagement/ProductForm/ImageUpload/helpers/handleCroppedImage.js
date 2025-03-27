const handleCroppedImage = (onChange, cropperRef, croppedImages, setCroppedImages, setImage) => {
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

export default handleCroppedImage;
