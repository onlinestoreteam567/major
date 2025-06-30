const deleteCroppedImage = (index, onChange, croppedImages, setCroppedImages) => {
  const updated = [...croppedImages];
  updated.splice(index, 1);
  setCroppedImages(updated);
  onChange(updated);
};

export default deleteCroppedImage;
