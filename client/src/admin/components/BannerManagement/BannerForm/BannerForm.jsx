import CheckBox from '@components/form-components/Checkbox/Checkbox';
import ImageUpload from '../../ProductManagement/ProductForm/ImageUpload/ImageUpload';
import ProductSelect from '../BannerCreate/ProductSelect/ProductSelect';

const BannerForm = ({ register, errors, control }) => {
  return (
    <>
      <CheckBox labelText="Лівий" name="left" register={register} />
      <ProductSelect control={control} errors={errors} />
      <ImageUpload control={control} name="image" />
      <ImageUpload control={control} name="background_image" />
    </>
  );
};
export default BannerForm;
