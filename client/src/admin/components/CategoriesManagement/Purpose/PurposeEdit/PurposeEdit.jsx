import Spinner from '@components/helpers/Spinner';
import {
  errorPurposeEdit,
  loadPurposeById,
  loadPurposeEdit,
  responsePurposeById,
  responsePurposeEdit,
} from '../../../../redux/selectors';
import { editPurpose, getPurposeCategoryById } from '../../../../redux/service';
import { categorySchema } from '../../../../validations/categorySchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import useIdFromUrl from '@hooks/useId';
import cl from './index.module.scss';
import SuccessMessage from '../../../SuccessMessage/SuccessMessage';
import ErrorText from '../../../ErrorText/ErrorText';
import LoadingButton from '../../../LoadingButton/LoadingButton';
import PurposeForm from '../PurposeForm';
import UploadedImage from '../../../UploadedImage/UploadedImage';

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
      setValue('category_name_uk', responseGet.category_name_uk);
      setValue('category_name_en', responseGet.category_name_en);
    }
  }, [responseGet, id, setValue]);

  const onSubmit = (values) => {
    const formData = new FormData();

    // Handle image if any
    if (values.image && values.image.length > 0) {
      values.image.forEach((file) => {
        formData.append(`image`, file);
      });
    }

    // Append all form data except image
    Object.keys(values).forEach((key) => {
      if (key !== 'image') {
        let value = values[key];
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val));
        } else {
          formData.append(key, value);
        }
      }
    });

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
