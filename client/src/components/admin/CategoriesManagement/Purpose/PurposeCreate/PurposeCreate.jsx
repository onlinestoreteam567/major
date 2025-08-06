import ErrorText from '@components/admin/ErrorText/ErrorText';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPurposeCategory } from '@redux/admin/purpose/service';
import {
  errorCreatePurposeCategory,
  loadCreatePurposeCategory,
  responseCreatePurposeCategory,
} from '@redux/admin/selectors';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import { categorySchema } from '@validations/admin/categorySchema';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PurposeForm from '../PurposeForm';
import cl from './index.module.scss';
import { useEffect } from 'react';
import { clearCreatePurposeState } from '@redux/admin/purpose/createPurposeCategorySlice';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import { useNavigate } from 'react-router-dom';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';

const PurposeCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(categorySchema),
    mode: 'onSubmit',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(loadCreatePurposeCategory);
  const response = useSelector(responseCreatePurposeCategory);
  const errorPost = useSelector(errorCreatePurposeCategory);

  useEffect(() => {
    if (response) {
      dispatch(
        setAdminMessage({
          message: 'Категорія успішно створена',
          onClear: () => dispatch(clearCreatePurposeState()),
        })
      );
      navigate('/admin/categories');
    }
  }, [response]);

  const onSubmit = (values) => {
    let formData = new FormData();
    formData = handleImageUpload(formData, values, 'image');
    appendFormData(formData, values, ['image']);

    dispatch(createPurposeCategory(formData));
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.purposeCreate}>
        <PurposeForm register={register} errors={errors} control={control} />

        <AdminFormActions
          to="/admin/categories"
          isLoading={isLoading}
          errors={errors}
          shortText={'Створити'}
          longText={'Створити категорію'}
        />

        {errorPost && <ErrorText error={errorPost}></ErrorText>}
      </form>
    </>
  );
};
export default PurposeCreate;
