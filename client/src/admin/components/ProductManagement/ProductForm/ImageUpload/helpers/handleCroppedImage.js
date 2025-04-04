const handleCroppedImage = (
  onChange,
  cropperRef,
  croppedImages,
  setCroppedImages,
  setImage,
  originalFile,
  setOriginalFile
) => {
  if (cropperRef.current?.cropper && originalFile) {
    const fileType = originalFile.type; // e.g., image/webp
    const fileExtension = fileType.split('/')[1]; // webp, jpeg, etc.

    cropperRef.current.cropper.getCroppedCanvas().toBlob(
      (blob) => {
        if (blob) {
          const croppedFile = new File([blob], `cropped-image-${croppedImages.length + 1}.${fileExtension}`, {
            type: fileType,
          });

          const updatedImages = [...croppedImages, croppedFile];
          setCroppedImages(updatedImages);
          onChange(updatedImages);
          setImage(null);
          setOriginalFile(null);
        }
      },
      fileType,
      0.95 // optional quality for lossy formats like webp/jpeg
    );
  }
};

export default handleCroppedImage;
