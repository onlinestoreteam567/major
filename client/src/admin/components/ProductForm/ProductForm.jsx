import { createProduct } from '../../redux/service';
import { useDispatch, useSelector } from 'react-redux';
import { errorCreateProduct, loadCteateProduct, responseCreateProduct } from '../../redux/selectors';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@components/form-components';
import { productSchema } from '../../validations/productSchema';
import CheckBox from '@components/form-components/Checkbox/Checkbox';

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: 'onChange',
    defaultValues: {
      article: '10',
      available: true,
      product_name_uk: '10',
      product_name_en: '10',

      opt_price: '10',
      dropshipper_price: '10',
      small_opt_price: '10',

      price: '10',
      discount: '10',
      description_uk: '10',
      description_en: '10',
      volume_ml: '10',
      purpose_category: '1',
      type_category: '1',
      is_new: true,
      is_best_seller: true,
      ingredients: '1010',
      application_uk: '10',
      application_en: '10',
    },
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(loadCteateProduct);
  const response = useSelector(responseCreateProduct);
  const errorPost = useSelector(errorCreateProduct);

  const onSubmit = (values) => {
    const formData = new FormData();

    if (values.upload_images && values.upload_images.length > 0) {
      values.upload_images.forEach((file) => {
        formData.append(`upload_images`, file);
      });
    }

    Object.keys(values).forEach((key) => {
      if (key !== 'upload_images') {
        let value = values[key];

        // Transform purpose_category input into an array
        if (key === 'purpose_category' && typeof value === 'string') {
          value = value
            .split(',')
            .map((v) => parseInt(v.trim(), 10))
            .filter(Number.isFinite);
        }

        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val));
        } else {
          formData.append(key, value);
        }
      }
    });

    dispatch(createProduct(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      <Input labelText="Article:" name="article" register={register} errors={errors} />

      <CheckBox labelText="В наявності" name="available" register={register} />

      <CheckBox labelText="Хіт продажу" name="is_best_seller" register={register} />

      <CheckBox labelText="Новинка" name="is_new" register={register} />

      {/* Product Name (UK) Input */}
      <Input labelText="Product Name (UK):" name="product_name_uk" register={register} errors={errors} />

      {/* Product Name (EN) Input */}
      <Input labelText="Product Name (EN):" name="product_name_en" register={register} errors={errors} />

      {/* Price Input */}
      <Input type="number" labelText="Price:" name="price" register={register} errors={errors} />

      {/* Discount Input */}
      <Input type="number" labelText="Discount:" name="discount" register={register} errors={errors} />

      {/* Description (UK) Textarea */}
      <label>
        Description (UK):
        <textarea {...register('description_uk')} />
      </label>
      {errors.description_uk && <p style={{ color: 'red' }}>{errors.description_uk.message}</p>}

      {/* Description (EN) Textarea */}
      <label>
        Description (EN):
        <textarea {...register('description_en')} />
      </label>
      {errors.description_en && <p style={{ color: 'red' }}>{errors.description_en.message}</p>}

      {/* Volume (ml) Input */}
      <Input type="number" labelText="Volume (ml):" name="volume_ml" register={register} errors={errors} />

      {/* Purpose Category Input */}
      <Input labelText="Purpose Category:" name="purpose_category" register={register} errors={errors} />

      {/* Type Category Input */}
      <Input labelText="Type Category:" name="type_category" register={register} errors={errors} />

      {/* Ingredients Textarea */}
      <label>
        Ingredients:
        <textarea {...register('ingredients')} />
      </label>
      {errors.ingredients && <p style={{ color: 'red' }}>{errors.ingredients.message}</p>}

      {/* Application (UK) Textarea */}
      <label>
        Application (UK):
        <textarea {...register('application_uk')} />
      </label>
      {errors.application_uk && <p style={{ color: 'red' }}>{errors.application_uk.message}</p>}

      {/* Application (EN) Textarea */}
      <label>
        Application (EN):
        <textarea {...register('application_en')} />
      </label>
      {errors.application_en && <p style={{ color: 'red' }}>{errors.application_en.message}</p>}

      <Controller
        control={control}
        name="upload_images"
        render={({ field: { value, onChange, ...field } }) => (
          <label>
            Picture
            <input
              {...field}
              multiple
              type="file"
              id="upload_images"
              onChange={(event) => {
                const files = Array.from(event.target.files);
                onChange(files);
              }}
            />
          </label>
        )}
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Product'}
      </button>

      {/* Error Handling */}
      {errorPost &&
        Object.keys(errorPost).map((key) => (
          <div key={key} style={{ color: 'red' }}>
            <strong>{key}:</strong>
            <ul>
              {Array.isArray(errorPost[key]) ? (
                errorPost[key].map((message, index) => <li key={index}>{message}</li>)
              ) : (
                <li>{errorPost[key]}</li>
              )}
            </ul>
          </div>
        ))}

      {/* Response */}
      {response && <p style={{ color: 'green' }}>Product added successfully!</p>}
    </form>
  );
};

export default ProductForm;
