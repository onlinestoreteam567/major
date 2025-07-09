import ImageUpload from '@components/admin/ImageUpload/ImageUpload';
import ValidationErrorMessage from '@components/admin/ValidationErrorMessage/ValidationErrorMessage';
import { Input } from '@components/form-components';
import cl from './index.module.scss';

const PurposeForm = ({ register, errors, control }) => {
  return (
    <>
      <ImageUpload labelText="Додати фото" name="image" control={control} errors={errors} />
      <div className={cl.inputsContainer}>
        <Input
          labelText="Назва (UA):"
          name="category_name_uk"
          register={register}
          errors={errors}
          placeholder="example"
          variant="admin"
        />
        <Input
          labelText="Назва (ENG):"
          name="category_name_en"
          register={register}
          errors={errors}
          placeholder="example"
          variant="admin"
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
export default PurposeForm;
