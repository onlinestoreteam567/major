import { forwardRef, useEffect, useRef, useState } from 'react';
import cl from '../index.module.scss';
import { handleInputCursorPosition, handleInputChange, handleKeyDown, handleInputDelete } from './eventHandlers';
import Heading from '@components/UI/Texts/Heading/Heading';

export const PhoneNumberInput = forwardRef(
  ({ name, labelText, setValue, variant, errors, placeholder, ...props }, ref) => {
    const [inputsValue, setInputsValue] = useState('');
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (typeof ref === 'function') {
        ref(inputRef.current);
      }

      setValue('phone', inputsValue);

      if (isFocused) {
        if (!inputsValue) {
          setInputsValue('+38 (0__)  __ __ ___');
        }
        const firstUnderscoreIndex = inputRef.current.value.indexOf('_');
        if (firstUnderscoreIndex !== -1) {
          // Set the cursor position to one character after the first underscore
          inputRef.current.setSelectionRange(firstUnderscoreIndex + 1, firstUnderscoreIndex + 1);
        }
      }

      return () => {
        if (typeof ref === 'function') {
          ref(null);
        }
      };
    }, [isFocused, inputsValue, setValue, ref]);

    const handleInputFocus = () => setIsFocused(true);
    const handleInputBlur = () => setIsFocused(false);

    return (
      <>
        <label htmlFor={name}>
          <Heading type="h4">{labelText}</Heading>

          <input
            {...props}
            id={name}
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
            placeholder={placeholder}
          />
        </label>
        {errors && errors[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
      </>
    );
  }
);

PhoneNumberInput.displayName = 'PhoneNumberInput';
