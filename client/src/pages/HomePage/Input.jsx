// Input.js
import React, { useImperativeHandle, useRef } from 'react';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.value = '';
      inputRef.current.focus();
    },
  }));

  return <input {...props} ref={inputRef} />;
}, 'Input');

Input.displayName = 'Input';
export default Input;
