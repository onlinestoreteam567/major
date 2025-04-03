const setFormValues = (setValue, responseGet, keys) => {
  keys.forEach((key) => setValue(key, responseGet[key]));
};

export default setFormValues;
