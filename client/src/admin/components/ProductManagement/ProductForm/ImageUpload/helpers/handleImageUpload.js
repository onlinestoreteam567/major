const handleImageUpload = (event, setImage, setOriginalFile) => {
  const files = Array.from(event.target.files);
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result); // base64 preview
      setOriginalFile(file); // store original file
    };

    reader.readAsDataURL(file);
  }
};

export default handleImageUpload;
