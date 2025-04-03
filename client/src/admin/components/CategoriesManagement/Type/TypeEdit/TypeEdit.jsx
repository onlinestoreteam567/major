import Spinner from '@components/helpers/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import useIdFromUrl from '@hooks/useId';
import setFormValues from '@utils/setFormValue';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  errorTypeById,
  loadTypeById,
  loadTypeEdit,
  responseTypeById,
  responseTypeEdit,
} from '../../../../redux/selectors';
import { editType, getTypeCategoryById } from '../../../../redux/service';
import { typeSchema } from '../../../../validations/typeSchema';
import ErrorText from '../../../ErrorText/ErrorText';
import LoadingButton from '../../../LoadingButton/LoadingButton';
import SuccessMessage from '../../../SuccessMessage/SuccessMessage';
import TypeForm from '../TypeForm';
import cl from './index.module.scss';

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

  useEffect(() => {
    dispatch(getTypeCategoryById(id));
  }, [dispatch, id]);

  useEffect(() => {
    responseGet && setFormValues(setValue, responseGet, formValues);
  }, [responseGet, setValue]);

  const onSubmit = (formData) => dispatch(editType({ formData, id }));

  return isLoadingGet ? (
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
  );
};
export default TypeEdit;
