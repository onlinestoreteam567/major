import { useEffect, useRef, useState } from 'react';
import cl from './index.module.scss';

const PhoneNumberInput = ({ setValue }) => {
  const [inputsValue, setInputsValue] = useState('+38 (0__)  __ __ ___');
  const input = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setValue('phone', inputsValue);
  }, [inputsValue, setValue]);
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
      setInputsValue(cleanedPhoneNumber);
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
    const cleanedPhoneNumber = inputsValue.replace(/\d(?=[^0-9]*$)/, '_');

    if (keyboardButton === 'Backspace') {
      e.preventDefault();

      if (inputsValue === '+38 (0__)  __ __ ___') {
        return;
      }

      setInputsValue(cleanedPhoneNumber);
    }
  };

  const handleInputCursorPosition = (e) => {
    // Prevent user selection when input is not focused
    if (!isFocused) {
      e.preventDefault();
      input.current.focus();
    }

    if (document.activeElement !== e.target) {
      // If the input is not already focused, allow the focus
      return;
    }
    e.preventDefault(); // Prevent cursor positioning with mouse if already focused
  };

  // Prevent cursor movement using arrow keys or other non-character keys
  const notForbiddenKeys = ['Backspace', 'Tab', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  const handleKeyDown = (e) => {
    if (!notForbiddenKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (isFocused) {
      const firstUnderscoreIndex = input.current.value.indexOf('_');
      if (firstUnderscoreIndex !== -1) {
        // Set the cursor position to one character after the first underscore
        input.current.setSelectionRange(firstUnderscoreIndex + 1, firstUnderscoreIndex + 1);
      }
    }
  }, [isFocused, inputsValue]);

  return (
    <input
      id="phone"
      type="text"
      placeholder={inputsValue}
      value={inputsValue}
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
      className={cl.input}
    />
  );
};

export default PhoneNumberInput;
