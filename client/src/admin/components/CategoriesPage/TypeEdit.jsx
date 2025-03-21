import Spinner from '@components/helpers/Spinner';
import { errorTypeById, loadTypeById, loadTypeEdit, responseTypeById, responseTypeEdit } from '../../redux/selectors';
import { editType, getTypeCategoryById } from '../../redux/service';
import { Input } from '@components/form-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { typeSchema } from '../../validations/typeSchema';
import useIdFromUrl from '@hooks/useId';

const TypeEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(typeSchema),
    mode: 'onSubmit',
  });

  const id = useIdFromUrl();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getTypeCategoryById(id));
    }
  }, [dispatch, id]);

  const errorEdit = useSelector(errorTypeById);
  const isLoadingEdit = useSelector(loadTypeEdit);
  const responseEdit = useSelector(responseTypeEdit);

  const isLoadingGet = useSelector(loadTypeById);
  const responseGet = useSelector(responseTypeById);

  useEffect(() => {
    if (id && responseGet) {
      setValue('type_name_uk', responseGet.name);
    }
  }, [responseGet, id, setValue]);

  const onSubmit = (formData) => {
    console.log(formData);
    dispatch(editType({ formData, id }));
  };

  return isLoadingGet ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      <Input labelText="Назва категорії (uk):" name="type_name_uk" register={register} errors={errors} />
      <Input labelText="Назва категорії (en):" name="type_name_en" register={register} errors={errors} />

      <button type="submit" disabled={isLoadingEdit}>
        {isLoadingEdit ? 'Редагування категорії за типом...' : 'Редагувати категорію за типом'}
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
export default TypeEdit;
