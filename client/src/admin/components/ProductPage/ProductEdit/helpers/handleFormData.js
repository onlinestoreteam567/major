const handleFormData = (values) => {
  const formData = new FormData();

  // Handle images if any
  if (values.upload_images && values.upload_images.length > 0) {
    values.upload_images.forEach((file) => {
      formData.append(`upload_images`, file);
    });
  }

  // Append all form data except images
  Object.keys(values).forEach((key) => {
    if (key !== 'upload_images') {
      let value = values[key];
      if (Array.isArray(value)) {
        value.forEach((val) => formData.append(key, val));
      } else {
        formData.append(key, value);
      }
    }
  });

  return formData;
};

export default handleFormData;
