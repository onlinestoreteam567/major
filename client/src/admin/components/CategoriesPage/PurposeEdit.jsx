import Spinner from '@components/helpers/Spinner';
import {
  errorPurposeEdit,
  loadPurposeById,
  loadPurposeEdit,
  responsePurposeById,
  responsePurposeEdit,
} from '../../redux/selectors';
import { editPurpose, getPurposeCategoryById } from '../../redux/service';
import { categorySchema } from '../../validations/categorySchema';
import { Input } from '@components/form-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const PurposeEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(categorySchema),
    mode: 'onSubmit',
  });

  const location = useLocation();
  const id = location.pathname.split('/').pop();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getPurposeCategoryById(id));
    }
  }, [dispatch, id]);

  const errorEdit = useSelector(errorPurposeEdit);
  const isLoadingEdit = useSelector(loadPurposeEdit);
  const responseEdit = useSelector(responsePurposeEdit);

  const isLoadingGet = useSelector(loadPurposeById);
  const responseGet = useSelector(responsePurposeById);

  useEffect(() => {
    if (id && responseGet) {
      setValue('category_name_uk', responseGet.name);
    }
  }, [responseGet, id, setValue]);

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

    console.log(formData);

    dispatch(editPurpose({ formData, id }));
  };
  return isLoadingGet ? (
    <Spinner />
  ) : (
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

      <button type="submit" disabled={isLoadingEdit}>
        {isLoadingEdit ? 'Редагування категорії за призначенням...' : 'Редагувати категорію за призначенням'}
      </button>
      {errorEdit &&
        Object.keys(errorEdit).map((key) => (
          <div key={key} style={{ color: 'red' }}>
            <strong>{key}:</strong>
            <ul>
              {Array.isArray(errorEdit[key]) ? (
                errorEdit[key].map((message, index) => <li key={index}>{message}</li>)
              ) : (
                <li>{errorEdit[key]}</li>
              )}
            </ul>
          </div>
        ))}

      {responseEdit && <p style={{ color: 'green' }}>Product added successfully!</p>}
    </form>
  );
};
export default PurposeEdit;
