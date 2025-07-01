import { Input } from '@components/form-components';
import ImageUpload from '../../ImageUpload/ImageUpload';
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
    </>
  );
};
export default PurposeForm;
