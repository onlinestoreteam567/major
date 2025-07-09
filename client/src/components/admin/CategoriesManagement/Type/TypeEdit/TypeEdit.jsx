import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import Spinner from '@components/helpers/Spinner/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import useIdFromUrl from '@hooks/useId';
import { errorTypeById, loadTypeById, loadTypeEdit, responseTypeById, responseTypeEdit } from '@redux/admin/selectors';
import { editType, getTypeCategoryById } from '@redux/admin/type/service';
import setFormValues from '@utils/setFormValue';
import { typeSchema } from '@validations/admin/typeSchema';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TypeForm from '../TypeForm';
import cl from './index.module.scss';
import useTimedMessage from '@hooks/admin/useTimedMessage';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';
import { clearEditTypeState } from '@redux/admin/type/typeEditSlice';

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

  const id = useIdFromUrl();
  const dispatch = useDispatch();
  const errorEdit = useSelector(errorTypeById);
  const isLoadingEdit = useSelector(loadTypeEdit);
  const responseEdit = useSelector(responseTypeEdit);
  const isLoadingGet = useSelector(loadTypeById);
  const responseGet = useSelector(responseTypeById);
  const [successEditMessage, showSuccessEditMessage] = useTimedMessage(3000, () => dispatch(clearEditTypeState()));

  useEffect(() => {
    dispatch(getTypeCategoryById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (responseEdit) showSuccessEditMessage('Категорія успішно відредагована');
  }, [responseEdit]);

  useEffect(() => {
    responseGet && setFormValues(setValue, responseGet, formValues);
  }, [responseGet, setValue]);

  const onSubmit = (formData) => dispatch(editType({ formData, id }));

  return (
    <>
      <ReturnButton />
      {isLoadingGet ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={cl.typeEdit}>
          <TypeForm register={register} errors={errors} />
          <LoadingButton
            isLoading={isLoadingEdit}
            loadingText="Редагування категорії за типом..."
            defaultText="Редагувати категорію за типом"
          />
          {errorEdit && <ErrorText error={errorEdit} />}
          {responseEdit && <SuccessMessage>Категорія за типом успішно відредагована!</SuccessMessage>}
        </form>
      )}
      {successEditMessage && <AdminMessage>{successEditMessage}</AdminMessage>}
    </>
  );
};
export default TypeEdit;
