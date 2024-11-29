export function handleInputDelete(e, inputsValue, setInputsValue) {
  const keyboardButton = e.key;

  // Replace last digit with underscore
  const cleanedPhoneNumber = inputsValue.replace(/\d(?=[^0-9]*$)/, '_');

  if (keyboardButton === 'Backspace') {
    e.preventDefault();

    if (inputsValue === '+38 (0__)  __ __ ___') {
      return;
    }

    setInputsValue(cleanedPhoneNumber);
  }
}
