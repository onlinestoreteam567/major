import { Input } from '@components/form-components';
import CategorySelect from './CategorySelect/CategorySelect';
import TypeSelect from './TypeSelect/TypeSelect';
import ImageUpload from './ImageUpload/ImageUpload';
import ResponsiveTextareas from '@components/form-components/ResponsiveTextareas/ResponsiveTextareas';
import AdminCheckBox from '@components/form-components/Checkbox/AdminCheckbox/Checkbox';

const ProductForm = ({ register, errors, control }) => {
  return (
    <>
      <ImageUpload control={control} name="upload_images" errors={errors} />
      <Input
        placeholder="example"
        labelText="Назва (UA):"
        name="product_name_uk"
        register={register}
        errors={errors}
        variant="admin"
      />
      <Input
        placeholder="example"
        labelText="Назва (ENG):"
        name="product_name_en"
        register={register}
        errors={errors}
        variant="admin"
      />
      <Input
        placeholder="example"
        labelText="Артикул:"
        name="article"
        register={register}
        errors={errors}
        variant="admin"
      />

      <AdminCheckBox labelText="В наявності" name="available" register={register} />
      <AdminCheckBox labelText="Новинка" name="is_new" register={register} />
      <AdminCheckBox labelText="Хіт продажу" name="is_best_seller" register={register} />
      <Input
        placeholder="0"
        type="number"
        labelText="Об’єм(ml):"
        name="volume_ml"
        register={register}
        errors={errors}
        variant="admin"
      />
      <Input
        placeholder="0"
        variant="admin"
        type="number"
        labelText="Ціна (грн):"
        name="price"
        register={register}
        errors={errors}
      />
      <Input
        placeholder="0"
        variant="admin"
        type="number"
        labelText="Знижка(%):"
        name="discount"
        register={register}
        errors={errors}
      />
      <Input
        placeholder="0"
        variant="admin"
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
