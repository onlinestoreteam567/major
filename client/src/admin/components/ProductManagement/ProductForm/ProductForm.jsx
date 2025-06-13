import { Input } from '@components/form-components';
import CheckBox from '@components/form-components/Checkbox/Checkbox';
import CategorySelect from './CategorySelect';
import TypeSelect from './TypeSelect';
import ImageUpload from './ImageUpload/ImageUpload';
import ResponsiveTextareas from '@components/form-components/ResponsiveTextareas/ResponsiveTextareas';

const ProductForm = ({ register, errors, control }) => {
  return (
    <>
      <ImageUpload control={control} name="upload_images" errors={errors} />
      <Input labelText="Назва (UA):" name="product_name_uk" register={register} errors={errors} />
      <Input labelText="Назва (ENG):" name="product_name_en" register={register} errors={errors} />
      <Input labelText="Артикул:" name="article" register={register} errors={errors} />
      <Input type="number" labelText="Об’єм(ml):" name="volume_ml" register={register} errors={errors} />
      <CheckBox labelText="В наявності" name="available" register={register} />
      <CheckBox labelText="Новинка" name="is_new" register={register} />
      <CheckBox labelText="Хіт продажу" name="is_best_seller" register={register} />
      <Input type="number" labelText="Ціна (грн):" name="price" register={register} errors={errors} />
      <Input type="number" labelText="Знижка(%):" name="discount" register={register} errors={errors} />
      <Input
        type="number"
        labelText="Ціна зі знижкою:"
        name="discounted_price"
        register={register}
        errors={errors}
        readOnly
      />
      <CategorySelect control={control} errors={errors} />
      <TypeSelect control={control} errors={errors} />

      <ResponsiveTextareas register={register} errors={errors} />
    </>
  );
};
export default ProductForm;
