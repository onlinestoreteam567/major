let lastDeleteTime = 0;

export function handleInputDelete(e, inputsValue, setInputsValue) {
  if (e.key === 'Backspace') {
    const currentTime = Date.now();

    // If the delete action happens too quickly after the last one, prevent it
    if (currentTime - lastDeleteTime < 50) {
      e.preventDefault();
      return;
    }

    // Update last delete time
    lastDeleteTime = currentTime;

    e.preventDefault();

    if (inputsValue === '+38 (0__)  __ __ ___') {
      return;
    }

    // Replace the last digit with an underscore
    const cleanedPhoneNumber = inputsValue.replace(/\d(?=[^0-9]*$)/, '_');
    setInputsValue(cleanedPhoneNumber);
  }
}
