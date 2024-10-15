import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const PhoneNumberInput = ({ inputsValue, setInputsValue }) => {
  const Ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused) {
      const firstUnderscoreIndex = Ref.current.value.indexOf('_');
      if (firstUnderscoreIndex !== -1) {
        // Set the cursor position to one character after the first underscore
        Ref.current.setSelectionRange(firstUnderscoreIndex + 1, firstUnderscoreIndex + 1);
      }
    }
  }, [isFocused, inputsValue.phone]);

  const handleInputPhoneNumberChange = (e) => {
    const phoneNumberValue = e.target.value;
    const cleanedPhoneNumber = phoneNumberValue.replace('_', '');

    // Allow only digits, parentheses, spaces, the plus sign, and underscores
    const isValidNumber = /^[\d ()+_]*$/.test(phoneNumberValue);

    if (isValidNumber) {
      setInputsValue({ ...inputsValue, phone: cleanedPhoneNumber });
    }
  };

  const handleNumberFocus = () => {
    setIsFocused(true);
  };

  const handleNumberBlur = () => {
    setIsFocused(false);
  };

  const handleInputPhoneNumberClick = (e) => {
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

  const handleMouseDown = (e) => {
    if (document.activeElement !== e.target) {
      // If the input is not already focused, allow the focus to happen
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
      required
      onChange={handleInputPhoneNumberChange}
      onFocus={handleNumberFocus}
      onBlur={handleNumberBlur}
      onKeyDown={(e) => {
        handleInputPhoneNumberClick(e);
        handleKeyDown(e);
      }}
      autoComplete="tel"
      ref={Ref}
      onMouseDown={handleMouseDown}
    />
  );
};

export default PhoneNumberInput;

PhoneNumberInput.propTypes = {
  inputsValue: PropTypes.objectOf(PropTypes.string).isRequired,
  setInputsValue: PropTypes.func.isRequired,
};
