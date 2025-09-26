import ErrorText from '@components/admin/ErrorText/ErrorText';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorUserCreate, loadUserCreate, selectUserCreate } from '@redux/selectors';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setAdminMessage } from '@redux/admin/adminMessageSlice';
import AdminFormActions from '@components/admin/AdminFormActions/AdminFormActions';
import ManagerForm from '../ManagerForm/ManagerForm';
import { clearUserCreateState } from '@redux/admin/settings/userCreate';
import { userCreate } from '@redux/admin/settings/service';
import { managerSchema } from '@validations/admin/managerSchema';

const ManagerCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(managerSchema),
    mode: 'onSubmit',
  });

  const isLoading = useSelector(loadUserCreate);
  const response = useSelector(selectUserCreate);
  const errorPost = useSelector(errorUserCreate);

  const onSubmit = (values) => dispatch(userCreate(values));

  useEffect(() => {
    if (response) {
      dispatch(
        setAdminMessage({
          message: 'Менеджера успішно створено',
          onClear: () => dispatch(clearUserCreateState()),
        })
      );
      navigate('/admin/settings');
    }
  }, [response]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.managerCreate}>
      <ManagerForm register={register} errors={errors} />
      <AdminFormActions
        to="/admin/settings"
        isLoading={isLoading}
        errors={errors}
        shortText={'Створити'}
        longText={'Створити менеджера'}
      />
      {errorPost && <ErrorText error={errorPost}></ErrorText>}
    </form>
  );
};

export default ManagerCreate;
