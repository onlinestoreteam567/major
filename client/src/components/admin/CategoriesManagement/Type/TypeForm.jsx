import ValidationErrorMessage from '@components/admin/ValidationErrorMessage/ValidationErrorMessage';
import { Input } from '@components/form-components';
import cl from './index.module.scss';

const TypeForm = ({ register, errors }) => {
  return (
    <>
      <div className={cl.typeFormInputs}>
        <Input
          labelText="Назва (UA):"
          name="type_name_uk"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
        <Input
          labelText="Назва (ENG):"
          name="type_name_en"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
      </div>
      {Object.keys(errors).length > 0 && (
        <ValidationErrorMessage>
          Неможливо створити категорію — перевірте правильність введення даних.
        </ValidationErrorMessage>
      )}
    </>
  );
};
export default TypeForm;
