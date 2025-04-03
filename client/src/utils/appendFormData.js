const appendFormData = (formData, values, excludeKeys = []) => {
  Object.keys(values).forEach((key) => {
    if (!excludeKeys.includes(key)) {
      let value = values[key];
      if (Array.isArray(value)) {
        value.forEach((val) => formData.append(key, val));
      } else {
        formData.append(key, value);
      }
    }
  });
};

export default appendFormData;
