import Spinner from '@components/helpers/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import useIdFromUrl from '@hooks/useId';
import appendFormData from '@utils/appendFormData';
import setFormValues from '@utils/setFormValue';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  errorPurposeEdit,
  loadPurposeById,
  loadPurposeEdit,
  responsePurposeById,
  responsePurposeEdit,
} from '../../../../redux/selectors';
import { editPurpose, getPurposeCategoryById } from '../../../../redux/service';
import { categorySchema } from '../../../../validations/categorySchema';
import ErrorText from '../../../ErrorText/ErrorText';
import LoadingButton from '../../../LoadingButton/LoadingButton';
import SuccessMessage from '../../../SuccessMessage/SuccessMessage';
import UploadedImage from '../../../UploadedImage/UploadedImage';
import PurposeForm from '../PurposeForm';
import cl from './index.module.scss';
import handleImageUpload from '@utils/handleImageUpload';

const formValues = ['category_name_uk', 'category_name_en'];

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

  const id = useIdFromUrl();
  const dispatch = useDispatch();
  const errorEdit = useSelector(errorPurposeEdit);
  const isLoadingEdit = useSelector(loadPurposeEdit);
  const responseEdit = useSelector(responsePurposeEdit);
  const isLoadingGet = useSelector(loadPurposeById);
  const responseGet = useSelector(responsePurposeById);

  useEffect(() => {
    dispatch(getPurposeCategoryById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (responseGet) setFormValues(setValue, responseGet, formValues);
  }, [responseGet, setValue]);

  const onSubmit = (values) => {
    let formData = new FormData();
    formData = handleImageUpload(formData, values, 'image');
    appendFormData(formData, values, ['image']);

    dispatch(editPurpose({ formData, id }));
  };

  return isLoadingGet ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.purposeEdit}>
      <PurposeForm register={register} errors={errors} control={control} />
      {responseGet && responseGet.image && <UploadedImage image={responseGet.image} />}
      <LoadingButton
        isLoading={isLoadingEdit}
        loadingText="Редагування категорії за призначенням..."
        defaultText="Редагувати категорію за призначенням"
      />
      {errorEdit && <ErrorText error={errorEdit}></ErrorText>}
      {responseEdit && <SuccessMessage>Категорія за призначенням успішно відредагована</SuccessMessage>}
    </form>
  );
};
export default PurposeEdit;
