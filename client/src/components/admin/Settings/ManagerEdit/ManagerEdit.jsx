import ErrorText from '@components/admin/ErrorText/ErrorText';
import Spinner from '@UI/Spinner/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import useIdFromUrl from '@hooks/useIdFromUrl';
import { errorUserEdit, loadUserById, loadUserEdit, responseUserById, selectUserEdit } from '@redux/selectors';
import setFormValues from '@utils/setFormValue';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';
import { managerSchema } from '@validations/admin/managerSchema';
import { editUser, userById } from '@redux/admin/settings/service';
import { clearEditUserState } from '@redux/admin/settings/userEdit';
import ManagerForm from '../ManagerForm/ManagerForm';

const formValues = ['email', 'password'];

const ManagerEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(managerSchema),
    mode: 'onSubmit',
  });
  const navigate = useNavigate();
  const id = useIdFromUrl();
  const dispatch = useDispatch();
  const errorEdit = useSelector(errorUserEdit);
  const isLoadingEdit = useSelector(loadUserEdit);
  const responseEdit = useSelector(selectUserEdit);
  const isLoadingGet = useSelector(loadUserById);
  const responseGet = useSelector(responseUserById);

  useEffect(() => {
    dispatch(userById(id));
  }, [dispatch, id]);

  useEffect(() => {
    responseGet && setFormValues(setValue, responseGet, formValues);
  }, [responseGet, setValue]);

  useEffect(() => {
    if (responseEdit) {
      dispatch(
        setAdminMessage({
          message: 'Менеджера успішно відредаговано',
          onClear: () => dispatch(clearEditUserState()),
        })
      );
      navigate('/admin/settings');
    }
  }, [responseEdit]);

  const onSubmit = (formData) => dispatch(editUser({ formData, id }));

  return isLoadingGet ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.managerEdit}>
      <ManagerForm register={register} errors={errors} />
      <AdminFormActions
        to="/admin/settings"
        isLoading={isLoadingEdit}
        errors={errors}
        shortText={'Зберегти'}
        longText={'Зберегти зміни'}
      />
      {errorEdit && <ErrorText error={errorEdit} />}
    </form>
  );
};
export default ManagerEdit;
