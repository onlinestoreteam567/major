const deleteCroppedImage = (index, onChange, croppedImages, setCroppedImages) => {
  const updated = [...croppedImages];
  updated.splice(index, 1);
  setCroppedImages(updated);
  onChange(updated); // update form state
};

export default deleteCroppedImage;
