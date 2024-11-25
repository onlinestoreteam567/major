import { useForm } from 'react-hook-form';
import PhoneNumberInput from '@components/UI/PhoneNumberInput/PhoneNumberInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { needHelpSchema } from '@validations/needHelpSchema';

const MyComponent = () => {
  const { register, errors, handleSubmit, setValue } = useForm({
    resolver: yupResolver(needHelpSchema),
  });

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
        <PhoneNumberInput setValue={setValue} />
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
