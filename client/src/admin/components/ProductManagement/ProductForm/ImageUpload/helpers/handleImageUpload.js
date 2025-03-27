const handleImageUpload = (event, setImage) => {
  const files = Array.from(event.target.files);
  if (files.length > 0) {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(files[0]);
  }
};

export default handleImageUpload;
