import { createProduct } from '../../redux/service';
import { useDispatch, useSelector } from 'react-redux';
import { errorCreateProduct, loadCteateProduct, responseCreateProduct } from '../../redux/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@components/form-components';
import { productSchema } from '../../validations/productSchema';

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    const formattedValues = {
      ...values,
      purpose_category:
        typeof values.purpose_category === 'string'
          ? values.purpose_category.split(',').map(Number)
          : Array.isArray(values.purpose_category)
            ? values.purpose_category
            : [],
    };

    dispatch(createProduct(formattedValues));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      {/* Article Input */}
      <Input labelText="Article:" name="article" register={register} />
      {errors.article && <p style={{ color: 'red' }}>{errors.article.message}</p>}

      {/* Available Checkbox */}
      <label>
        В наявності
        <input type="checkbox" {...register('available')} />
      </label>

      {/* Hit Checkbox */}
      <label>
        Хіт продажу
        <input type="checkbox" {...register('is_best_seller')} />
      </label>

      <label>
        Новинка
        <input type="checkbox" {...register('is_new')} />
      </label>

      {/* Product Name (UK) Input */}
      <Input labelText="Product Name (UK):" name="product_name_uk" register={register} errors={errors} />

      {/* Product Name (EN) Input */}
      <Input labelText="Product Name (EN):" name="product_name_en" register={register} />
      {errors.product_name_en && <p style={{ color: 'red' }}>{errors.product_name_en.message}</p>}

      {/* Price Input */}
      <Input labelText="Price:" name="price" register={register} />
      {errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}

      {/* Discount Input */}
      <Input labelText="Discount:" name="discount" register={register} />
      {errors.discount && <p style={{ color: 'red' }}>{errors.discount.message}</p>}

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
      <Input labelText="Volume (ml):" name="volume_ml" register={register} />
      {errors.volume_ml && <p style={{ color: 'red' }}>{errors.volume_ml.message}</p>}

      {/* Purpose Category Input */}
      <Input labelText="Purpose Category:" name="purpose_category" register={register} />
      {errors.purpose_category && <p style={{ color: 'red' }}>{errors.purpose_category.message}</p>}

      {/* Type Category Input */}
      <Input labelText="Type Category:" name="type_category" register={register} />
      {errors.type_category && <p style={{ color: 'red' }}>{errors.type_category.message}</p>}

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

      <label>
        Picture
        <input type="file" {...register('upload_images')} />
      </label>

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
