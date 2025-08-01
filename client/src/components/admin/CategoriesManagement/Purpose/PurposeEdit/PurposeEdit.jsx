import ErrorText from '@components/admin/ErrorText/ErrorText';
import LoadingButton from '@components/admin/LoadingButton/LoadingButton';
import ReturnButton from '@components/admin/ReturnButton/ReturnButton';
import SuccessMessage from '@components/admin/SuccessMessage/SuccessMessage';
import Spinner from '@components/helpers/Spinner/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import useIdFromUrl from '@hooks/useId';
import { editPurpose, getPurposeCategoryById } from '@redux/admin/purpose/service';
import {
  errorPurposeEdit,
  loadPurposeById,
  loadPurposeEdit,
  responsePurposeById,
  responsePurposeEdit,
} from '@redux/admin/selectors';
import appendFormData from '@utils/appendFormData';
import handleImageUpload from '@utils/handleImageUpload';
import setFormValues from '@utils/setFormValue';
import { categorySchema } from '@validations/admin/categorySchema';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PurposeForm from '../PurposeForm';
import cl from './index.module.scss';
import { clearEditPurposeState } from '@redux/admin/purpose/purposeEditSlice';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import { useNavigate } from 'react-router-dom';

const formValues = ['category_name_uk', 'category_name_en', 'image'];

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorEdit = useSelector(errorPurposeEdit);
  const isLoadingEdit = useSelector(loadPurposeEdit);
  const responseEdit = useSelector(responsePurposeEdit);
  const isLoadingGet = useSelector(loadPurposeById);
  const responseGet = useSelector(responsePurposeById);

  useEffect(() => {
    if (responseEdit) {
      dispatch(
        setAdminMessage({
          message: 'Категорія успішно відредагована',
          onClear: () => dispatch(clearEditPurposeState()),
        })
      );
      navigate('/admin/categories');
    }
  }, [responseEdit]);

  useEffect(() => {
    dispatch(getPurposeCategoryById(id));
  }, [dispatch, id]);

  useEffect(() => {
    responseGet && setFormValues(setValue, responseGet, formValues);
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
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.purposeEdit}>
        <PurposeForm register={register} errors={errors} control={control} />
        <div className={cl.btnWrapper}>
          <ReturnButton to="/admin/categories" />
          <LoadingButton
            disabled={Object.keys(errors).length > 0}
            isLoading={isLoadingEdit}
            shortText="Зберегти"
            longText="Зберегти категорію"
          />
        </div>
        {errorEdit && <ErrorText error={errorEdit}></ErrorText>}
        {responseEdit && <SuccessMessage>Категорія за призначенням успішно відредагована</SuccessMessage>}
      </form>
    </>
  );
};
export default PurposeEdit;
