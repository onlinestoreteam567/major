const MAX_FILE_SIZE_BYTES = 1048576; // 1MB

const handleImageUpload = (event, setImage, setOriginalFile, images, showMessageText) => {
  const files = Array.from(event.target.files);
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();

    if (images.length === 5) {
      showMessageText('Упс — можна завантажити лише до 5 фото');
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      showMessageText('Розмір файлу перевищує 1MB');
      return;
    }

    reader.onload = () => {
      setImage(reader.result);
      setOriginalFile(file);
    };

    reader.readAsDataURL(file);
  }
};

export default handleImageUpload;
