import { Input, Textarea } from '@components/form-components';
import CheckBox from '@components/form-components/Checkbox/Checkbox';
import CategorySelect from './CategorySelect';
import TypeSelect from './TypeSelect';
import ImageUpload from './ImageUpload/ImageUpload';
import { Controller } from 'react-hook-form';
import TipTap from '@components/form-components/TipTap/TipTap';

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
      <Textarea labelText="Description (UK):" name="description_uk" register={register} errors={errors} />
      <Textarea labelText="Description (EN):" name="description_en" register={register} errors={errors} />
      <Textarea labelText="Ingredients:" name="ingredients" register={register} errors={errors} />
      <Textarea labelText="Application (UK):" name="application_uk" register={register} errors={errors} />
      {/* <Textarea labelText="Application (EN):" name="application_en" register={register} errors={errors} /> */}
      <Controller
        name="application_en"
        control={control}
        render={({ field }) => <TipTap value={field.value} onChange={field.onChange} />}
      />
      {/* <Tiptap labelText="Application (EN):" name="application_en" control={control} errors={errors} /> */}

      <CategorySelect control={control} errors={errors} />
      <TypeSelect control={control} errors={errors} />
      <ImageUpload control={control} name="upload_images" />
    </>
  );
};
export default ProductForm;
