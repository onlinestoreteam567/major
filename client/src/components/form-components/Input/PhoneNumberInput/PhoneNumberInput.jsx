import { forwardRef, useEffect, useRef, useState } from 'react';
import cl from '../index.module.scss';
import { handleInputCursorPosition, handleInputChange, handleKeyDown, handleInputDelete } from './eventHandlers';

export const PhoneNumberInput = forwardRef(({ name, labelText, setValue, variant, ...props }, ref) => {
  const [inputsValue, setInputsValue] = useState('+38 (0__)  __ __ ___');
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = () => setIsFocused(true);
  const handleInputBlur = () => setIsFocused(false);

  useEffect(() => {
    if (isFocused) {
      const firstUnderscoreIndex = inputRef.current.value.indexOf('_');
      if (firstUnderscoreIndex !== -1) {
        // Set the cursor position to one character after the first underscore
        inputRef.current.setSelectionRange(firstUnderscoreIndex + 1, firstUnderscoreIndex + 1);
      }
    }
  }, [isFocused, inputsValue]);

  useEffect(() => {
    if (typeof ref === 'function') {
      ref(inputRef.current);
    }
  }, [ref]);

  useEffect(() => {
    setValue('phone', inputsValue);
  }, [inputsValue, setValue]);

  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input
        {...props}
        id={name}
        placeholder={inputsValue}
        value={inputsValue}
        autoComplete="tel"
        ref={inputRef}
        onChange={(e) => handleInputChange(e, setInputsValue)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={(e) => {
          handleInputDelete(e, inputsValue, setInputsValue);
          handleKeyDown(e);
        }}
        onMouseDown={(e) => handleInputCursorPosition(e, isFocused, inputRef)}
        className={`${cl.input} ${cl.phoneNumberInput} ${cl[variant]}`}
      />
    </>
  );
});

PhoneNumberInput.displayName = 'PhoneNumberInput';
