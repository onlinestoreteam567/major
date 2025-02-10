// import { y } from "dist/assets/index-I5lXbvpP";
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PhoneInput from '@components/form-components/Input/PhoneNumberInput/PhoneInput';

const schema = yup.object({
  phone: yup.string().required("поле обов'язкове"),
});

export default function ReviewForm() {
  const {
    // register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, value } }) => (
          <PhoneInput label="Номер телефону" onChange={onChange} name="phone" value={value} errors={errors} />
        )}
      />
      <input type="submit" />
    </form>
  );
}
