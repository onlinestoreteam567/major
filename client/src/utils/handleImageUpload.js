const handleImageUpload = (formData, values, fieldName) => {
  const fieldValue = values[fieldName];

  if (fieldValue instanceof File || (Array.isArray(fieldValue) && fieldValue.every((file) => file instanceof File))) {
    if (Array.isArray(fieldValue)) {
      fieldValue.forEach((file) => {
        formData.append(fieldName, file);
      });
    } else {
      formData.append(fieldName, fieldValue);
    }
  }

  return formData;
};

export default handleImageUpload;
