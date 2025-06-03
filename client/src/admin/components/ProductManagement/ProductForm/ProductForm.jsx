import { Input, TextareaProduct } from '@components/form-components';
import CheckBox from '@components/form-components/Checkbox/Checkbox';
import CategorySelect from './CategorySelect';
import TypeSelect from './TypeSelect';
import ImageUpload from './ImageUpload/ImageUpload';

const ProductForm = ({ register, errors, control }) => {
  return (
    <>
      <Input labelText="Article:" name="article" register={register} errors={errors} />
      <CheckBox labelText="В наявності" name="available" register={register} />
      <CheckBox labelText="Хіт продажу" name="is_best_seller" register={register} />
      <CheckBox labelText="Новинка" name="is_new" register={register} />
      <Input labelText="Product Name (UK):" name="product_name_uk" register={register} errors={errors} />
      <Input labelText="Product Name (EN):" name="product_name_en" register={register} errors={errors} />
      <Input type="number" labelText="Price:" name="price" register={register} errors={errors} />
      <Input type="number" labelText="Discount:" name="discount" register={register} errors={errors} />
      <Input type="number" labelText="Volume (ml):" name="volume_ml" register={register} errors={errors} />
      <TextareaProduct name="description_uk" labelText="Опис (укр):" errors={errors} register={register}/>
      <TextareaProduct name="description_en" labelText="Опис (англ):" errors={errors} register={register}/>
      <TextareaProduct name="ingredients" labelText="Інгредієнти:" errors={errors} register={register}/>
      <TextareaProduct name="application_uk" labelText="Застосування (укр):" errors={errors} register={register}/>
      <TextareaProduct name="application_en" labelText="Застосування (англ):" errors={errors} register={register} />
      <CategorySelect control={control} errors={errors} />
      <TypeSelect control={control} errors={errors} />
      <ImageUpload control={control} name="upload_images" errors={errors} />
    </>
  );
};
export default ProductForm;
