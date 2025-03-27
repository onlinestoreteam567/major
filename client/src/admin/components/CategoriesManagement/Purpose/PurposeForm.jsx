import { Input } from '@components/form-components';
import ImageUpload from '../../ProductManagement/ProductForm/ImageUpload/ImageUpload';

const PurposeForm = ({ register, errors, control }) => {
  return (
    <>
      <Input labelText="Назва категорії (uk):" name="category_name_uk" register={register} errors={errors} />
      <Input labelText="Назва категорії (en):" name="category_name_en" register={register} errors={errors} />
      <ImageUpload control={control} name="image" />
    </>
  );
};
export default PurposeForm;
