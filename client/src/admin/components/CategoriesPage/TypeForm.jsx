import { typeSchema } from '../../validations/typeSchema';
import { errorCreateTypeCategory, loadCreateTypeCategory, responseCreateTypeCategory } from '../../redux/selectors';
import { createTypeCategory } from '../../redux/service';
import { Input } from '@components/form-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const TypeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(typeSchema),
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(loadCreateTypeCategory);
  const response = useSelector(responseCreateTypeCategory);
  const errorPost = useSelector(errorCreateTypeCategory);

  const onSubmit = (values) => {
    const formData = new FormData();
    dispatch(createTypeCategory(formData));

    Object.keys(values).forEach((key) => {
      let value = values[key];

      if (Array.isArray(value)) {
        value.forEach((val) => formData.append(key, val));
      } else {
        formData.append(key, value);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      <Input labelText="Назва категорії (uk):" name="type_name_uk" register={register} errors={errors} />
      <Input labelText="Назва категорії (en):" name="type_name_en" register={register} errors={errors} />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Створення категорії за типом...' : 'Створити категорію за типом'}
      </button>
      {errorPost &&
        Object.keys(errorPost).map((key) => (
          <div key={key} style={{ color: 'red' }}>
            <strong>{key}:</strong>
            <ul>
              {Array.isArray(errorPost[key]) ? (
                errorPost[key].map((message, index) => <li key={index}>{message}</li>)
              ) : (
                <li>{errorPost[key]}</li>
              )}
            </ul>
          </div>
        ))}

      {response && <p style={{ color: 'green' }}>Product added successfully!</p>}
    </form>
  );
};
export default TypeForm;
