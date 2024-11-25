import { useForm } from 'react-hook-form';
import { useState } from 'react';
import PhoneNumberInput from '@components/UI/PhoneNumberInput/PhoneNumberInput';

const MyComponent = () => {
  const [inputsValue, setInputsValue] = useState({ phone: '+38 (0__)  __ __ ___' });
  const { register, handleSubmit, errors } = useForm();

  console.log('errors:', errors);

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Full Name:
        <input type="text" {...register('fullName')} />
        {errors && errors.fullName && <div style={{ color: 'red' }}>{errors.fullName.message}</div>}
      </label>
      <label>
        Phone Number:
        <PhoneNumberInput inputsValue={inputsValue} setInputsValue={setInputsValue} />
      </label>
      <label>
        Question:
        <textarea {...register('question')} />
        {errors && errors.question && <div style={{ color: 'red' }}>{errors.question.message}</div>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyComponent;
