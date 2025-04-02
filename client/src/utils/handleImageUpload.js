const handleImageUpload = (formData, values, fieldName) => {
  if (values[fieldName] && values[fieldName].length > 0) {
    values[fieldName].forEach((file) => {
      formData.append(fieldName, file);
    });
  }
  return formData;
};

export default handleImageUpload;
