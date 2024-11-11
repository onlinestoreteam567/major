const handleInputNameChange = (e) => {
  const nameValue = e.target.value;
  // Check if nameValue is does not starting with a space and does not contain numbers
  const isValidName = nameValue !== ' ' && !/\d/.test(nameValue);
  if (isValidName) {
    setInputsValue({ ...inputsValue, name: nameValue });
  }
};

export default handleInputNameChange;
