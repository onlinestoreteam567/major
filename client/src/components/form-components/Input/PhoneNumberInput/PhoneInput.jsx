import { useState } from 'react';
import cl from '../index.module.scss';
import { handleInputCursorPosition, handleInputChange, handleKeyDown, handleInputDelete } from './eventHandlers';

export default function PhoneInput({ name, label, variant, onChange, value, errors }, ref) {
  const [inputsValue, setInputsValue] = useState('+38 (0__)  __ __ ___');
  // const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  console.log(ref);

  // console.log(ref);
  // ref(inputRef.current);
  // const inputRef = ref;
  // useEffect(() => {
  //   if (typeof ref === 'function') {
  //     ref(inputRef.current);
  //   }

  //   if (isFocused) {
  //     const firstUnderscoreIndex = inputRef.current.value.indexOf('_');
  //     if (firstUnderscoreIndex !== -1) {
  //       // Set the cursor position to one character after the first underscore
  //       inputRef.current.setSelectionRange(firstUnderscoreIndex + 1, firstUnderscoreIndex + 1);
  //     }
  //   }

  //   return () => {
  //     if (typeof ref === 'function') {
  //       ref(null);
  //     }
  //   };
  // }, [isFocused, inputsValue, ref]);

  const handleInputFocus = () => setIsFocused(true);
  const handleInputBlur = () => setIsFocused(false);

  value = inputsValue;
  onChange(value);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder={inputsValue}
        autoComplete="tel"
        onChange={(e) => handleInputChange(e, setInputsValue)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={(e) => {
          handleInputDelete(e, inputsValue, setInputsValue);
          handleKeyDown(e);
        }}
        onMouseDown={(e) => handleInputCursorPosition(e, isFocused, ref)}
        className={`${cl.input} ${cl.phoneNumberInput} ${cl[variant]}`}
      />
      <p className={cl.error}>{errors?.[name]?.message}</p>
    </>
  );
}
