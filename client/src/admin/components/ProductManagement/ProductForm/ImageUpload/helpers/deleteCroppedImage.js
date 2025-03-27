const deleteCroppedImage = (index, onChange, croppedImages, setCroppedImages) => {
  const updatedImages = croppedImages.filter((_, i) => i !== index);
  setCroppedImages(updatedImages);
  onChange(updatedImages);
};

export default deleteCroppedImage;
