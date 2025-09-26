import ValidationErrorMessage from '@components/admin/ValidationErrorMessage/ValidationErrorMessage';
import { Input } from '@components/form-components';
import cl from './index.module.scss';

const ManagerForm = ({ register, errors }) => {
  return (
    <>
      <div className={cl.managerForm}>
        <Input
          labelText="Логін:"
          name="email"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
        <Input
          labelText="Пароль:"
          name="password"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
      </div>
      {Object.keys(errors).length > 0 && (
        <div className={cl.errors}>
          {Object.entries(errors).map(
            ([fieldName, error]) =>
              error.message && <ValidationErrorMessage key={fieldName}>{error.message}</ValidationErrorMessage>
          )}
        </div>
      )}
    </>
  );
};
export default ManagerForm;
