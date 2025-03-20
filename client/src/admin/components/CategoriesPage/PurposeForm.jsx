import {
  errorCreatePurposeCategory,
  loadCreatePurposeCategory,
  responseCreatePurposeCategory,
} from '../../redux/selectors';
import { createPurposeCategory } from '../../redux/service';
import { categorySchema } from '../../validations/categorySchema';
import { Input } from '@components/form-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const PurposeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(categorySchema),
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(loadCreatePurposeCategory);
  const response = useSelector(responseCreatePurposeCategory);
  const errorPost = useSelector(errorCreatePurposeCategory);

  const onSubmit = (values) => {
    const formData = new FormData();

    if (values.upload_image && values.upload_image.length > 0) {
      values.upload_image.forEach((file) => {
        formData.append(`upload_image`, file);
      });
    }

    Object.keys(values).forEach((key) => {
      if (key !== 'upload_image') {
        let value = values[key];

        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val));
        } else {
          formData.append(key, value);
        }
      }
    });

    dispatch(createPurposeCategory(formData));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      <Input labelText="Назва категорії (uk):" name="category_name_uk" register={register} errors={errors} />
      <Input labelText="Назва категорії (en):" name="category_name_en" register={register} errors={errors} />
      <Controller
        control={control}
        name="upload_image"
        render={({ field: { value, onChange, ...field } }) => (
          <label>
            Picture
            <input
              {...field}
              multiple
              type="file"
              id="upload_image"
              onChange={(event) => {
                const files = Array.from(event.target.files);
                onChange(files);
              }}
            />
          </label>
        )}
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Створення категорії за призначенням...' : 'Створити категорію за призначенням'}
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
export default PurposeForm;
