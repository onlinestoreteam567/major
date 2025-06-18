const handleCroppedImage = (
  onChange,
  cropperRef,
  croppedImages,
  setCroppedImages,
  setImage,
  originalFile,
  setOriginalFile,
  setImages
) => {
  if (cropperRef.current?.cropper && originalFile) {
    const fileType = originalFile.type;
    const fileExtension = fileType.split('/')[1];

    cropperRef.current.cropper.getCroppedCanvas().toBlob(
      (blob) => {
        if (blob) {
          const croppedFile = new File([blob], `cropped-image-${croppedImages.length + 1}.${fileExtension}`, {
            type: fileType,
          });

          const updatedImages = [...croppedImages, croppedFile];
          setCroppedImages(updatedImages);
          setImages((prev) => [...prev, ...updatedImages]);
          onChange(updatedImages);
          setImage(null);
          setOriginalFile(null);
        }
      },
      fileType,
      0.95
    );
  }
};

export default handleCroppedImage;
