import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const PhoneNumberInput = ({ inputsValue, setInputsValue }) => {
  const input = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused) {
      const firstUnderscoreIndex = input.current.value.indexOf('_');
      if (firstUnderscoreIndex !== -1) {
        // Set the cursor position to one character after the first underscore
        input.current.setSelectionRange(firstUnderscoreIndex + 1, firstUnderscoreIndex + 1);
      }
    }
  }, [isFocused, inputsValue.phone]);

  const handleInputChange = (e) => {
    const phoneNumberValue = e.target.value;

    // Remove all non-digit characters (excluding underscores) to count only the digits
    const digitsOnly = phoneNumberValue.replace(/[^\d]/g, '');
    // Limit the number of digits
    if (digitsOnly.length > 12) {
      return;
    }

    const cleanedPhoneNumber = phoneNumberValue.replace('_', '');

    // Allow only digits, parentheses, spaces, the plus sign, and underscores
    const isValidNumber = /^[\d ()+_]*$/.test(phoneNumberValue);

    if (isValidNumber) {
      setInputsValue({ ...inputsValue, phone: cleanedPhoneNumber });
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputDelete = (e) => {
    const keyboardButton = e.key;

    // Replace last digit with underscore
    const cleanedPhoneNumber = inputsValue.phone.replace(/\d(?=[^0-9]*$)/, '_');

    if (keyboardButton === 'Backspace') {
      e.preventDefault();

      if (inputsValue.phone === '+38 (0__)  __ __ ___') {
        return;
      }

      setInputsValue({ ...inputsValue, phone: cleanedPhoneNumber });
    }
  };

  const handleInputCursorPosition = (e) => {
    if (document.activeElement !== e.target) {
      // If the input is not already focused, allow the focus
      return;
    }
    e.preventDefault(); // Prevent cursor positioning with mouse if already focused
  };

  const handleKeyDown = (e) => {
    // Prevent cursor movement using arrow keys or other non-character keys
    const forbiddenKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];

    if (forbiddenKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <input
      id="phone"
      type="text"
      placeholder="+38 (0__) __ __ ___"
      value={inputsValue.phone}
      autoComplete="tel"
      ref={input}
      onChange={handleInputChange}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onKeyDown={(e) => {
        handleInputDelete(e);
        handleKeyDown(e);
      }}
      onMouseDown={handleInputCursorPosition}
      required
    />
  );
};

export default PhoneNumberInput;

PhoneNumberInput.propTypes = {
  inputsValue: PropTypes.objectOf(PropTypes.string).isRequired,
  setInputsValue: PropTypes.func.isRequired,
};
