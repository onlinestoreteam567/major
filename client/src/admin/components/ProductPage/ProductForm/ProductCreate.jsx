import { createProduct } from '../../../redux/service';
import { useDispatch, useSelector } from 'react-redux';
import { errorCreateProduct, loadCreateProduct, responseCreateProduct } from '../../../redux/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Textarea } from '@components/form-components';
import { productSchema } from '../../../validations/productSchema';
import CheckBox from '@components/form-components/Checkbox/Checkbox';
import CategorySelect from './CategorySelect';
import TypeSelect from './TypeSelect';
import ImageUpload from './ImageUpload';
import ErrorText from '../../ErrorText/ErrorText';

const ProductCreate = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: 'onSubmit',
  });

  const isLoading = useSelector(loadCreateProduct);
  const response = useSelector(responseCreateProduct);
  const errorPost = useSelector(errorCreateProduct);

  const onSubmit = (values) => {
    const formData = new FormData();

    // Handle file uploads if any
    if (values.upload_images && values.upload_images.length > 0) {
      values.upload_images.forEach((file) => {
        formData.append(`upload_images`, file);
      });
    }

    // Append other form data
    Object.keys(values).forEach((key) => {
      if (key !== 'upload_images') {
        let value = values[key];
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val));
        } else {
          formData.append(key, value);
        }
      }
    });

    // Dispatch create product action
    dispatch(createProduct(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
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
      <Textarea labelText="Application (EN):" name="application_en" register={register} errors={errors} />
      <CategorySelect control={control} errors={errors} />
      <TypeSelect control={control} errors={errors} />
      <ImageUpload control={control} />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Product'}
      </button>

      {errorPost && <ErrorText error={errorPost}></ErrorText>}

      {/* Success response */}
      {response && <p style={{ color: 'green' }}>Product added successfully!</p>}
    </form>
  );
};

export default ProductCreate;
