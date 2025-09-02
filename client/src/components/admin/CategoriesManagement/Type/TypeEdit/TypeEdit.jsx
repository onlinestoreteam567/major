import ErrorText from '@components/admin/ErrorText/ErrorText';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import Spinner from '@UI/Spinner/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import useIdFromUrl from '@hooks/useIdFromUrl';
import { errorTypeById, loadTypeById, loadTypeEdit, responseTypeById, responseTypeEdit } from '@redux/admin/selectors';
import { editType, getTypeCategoryById } from '@redux/admin/type/service';
import setFormValues from '@utils/setFormValue';
import { typeSchema } from '@validations/admin/typeSchema';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TypeForm from '../TypeForm';
import cl from './index.module.scss';
import { clearEditTypeState } from '@redux/admin/type/typeEditSlice';
import { useNavigate } from 'react-router-dom';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';

const formValues = ['type_name_uk', 'type_name_en'];

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

  const navigate = useNavigate();
  const id = useIdFromUrl();
  const dispatch = useDispatch();
  const errorEdit = useSelector(errorTypeById);
  const isLoadingEdit = useSelector(loadTypeEdit);
  const responseEdit = useSelector(responseTypeEdit);
  const isLoadingGet = useSelector(loadTypeById);
  const responseGet = useSelector(responseTypeById);

  useEffect(() => {
    dispatch(getTypeCategoryById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (responseEdit) {
      dispatch(
        setAdminMessage({
          message: 'Категорія успішно відредагована',
          onClear: () => dispatch(clearEditTypeState()),
        })
      );
      navigate('/admin/categories');
    }
  }, [responseEdit]);

  useEffect(() => {
    responseGet && setFormValues(setValue, responseGet, formValues);
  }, [responseGet, setValue]);

  const onSubmit = (formData) => dispatch(editType({ formData, id }));

  return (
    <>
      {isLoadingGet ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={cl.typeEdit}>
          <TypeForm register={register} errors={errors} />

          <AdminFormActions
            to="/admin/categories"
            isLoading={isLoadingEdit}
            errors={errors}
            shortText={'Зберегти'}
            longText={'Зберегти зміни'}
          />

          {errorEdit && <ErrorText error={errorEdit} />}
          {responseEdit && <SuccessMessage>Категорія за типом успішно відредагована!</SuccessMessage>}
        </form>
      )}
    </>
  );
};
export default TypeEdit;
