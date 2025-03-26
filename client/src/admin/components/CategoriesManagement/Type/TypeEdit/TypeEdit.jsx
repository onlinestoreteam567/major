import Spinner from '@components/helpers/Spinner';
import {
  errorTypeById,
  loadTypeById,
  loadTypeEdit,
  responseTypeById,
  responseTypeEdit,
} from '../../../../redux/selectors';
import { editType, getTypeCategoryById } from '../../../../redux/service';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { typeSchema } from '../../../../validations/typeSchema';
import useIdFromUrl from '@hooks/useId';
import SuccessMessage from '../../../SuccessMessage/SuccessMessage';
import ErrorText from '../../../ErrorText/ErrorText';
import LoadingButton from '../../../LoadingButton/LoadingButton';
import TypeForm from '../TypeForm';
import cl from './index.module.scss';

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
    if (id) dispatch(getTypeCategoryById(id));
  }, [dispatch, id]);

  const errorEdit = useSelector(errorTypeById);
  const isLoadingEdit = useSelector(loadTypeEdit);
  const responseEdit = useSelector(responseTypeEdit);
  const isLoadingGet = useSelector(loadTypeById);
  const responseGet = useSelector(responseTypeById);

  useEffect(() => {
    if (id && responseGet) {
      setValue('type_name_uk', responseGet.name);
      // setValue('type_name_en', responseGet.name);
    }
  }, [responseGet, id, setValue]);

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
