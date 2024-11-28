// MyComponent.js
import { useForm } from 'react-hook-form';
import Input from './Input';
import { useImperativeHandle, useRef } from 'react';

export default function MyComponent() {
  const { register, handleSubmit } = useForm();
  const { ref, ...rest } = register('firstName');
  const onSubmit = (data) => console.log(data);
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => inputRef.current);

  const onClick = () => {
    inputRef.current.clear();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input ref={inputRef} {...rest} name="firstName" />
      <button type="button" onClick={onClick}>
        clear
      </button>
      <button>Submit</button>
    </form>
  );
}
