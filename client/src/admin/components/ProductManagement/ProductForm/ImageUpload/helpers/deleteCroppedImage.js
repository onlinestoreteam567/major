const deleteCroppedImage = (index, onChange, croppedImages, setCroppedImages) => {
  console.log(`index ${index}`);
  console.log(onChange);
  console.log(croppedImages);
  console.log(setCroppedImages);

  const updated = [...croppedImages];
  updated.splice(index, 1);
  setCroppedImages(updated);
  onChange(updated);
};

export default deleteCroppedImage;
