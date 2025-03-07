import { createProduct } from '../../redux/service';
import { useDispatch, useSelector } from 'react-redux';
import { errorCreateProduct, loadCteateProduct, responseCreateProduct } from '../../redux/selectors';
import { useForm } from 'react-hook-form';
import { productSchema } from '../../validations/productSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@components/form-components';

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: 'onChange', // Ensures validation runs on change
    defaultValues: {
      article: '10',
      available: true,
      product_name_uk: '10',
      product_name_en: '10',
      price: '10',
      opt_price: '10',
      dropshipper_price: '10',
      small_opt_price: '10',
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

  // Handle form submission
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
        Available:
        <input type="checkbox" {...register('available')} />
      </label>

      {/* Product Name (UK) Input */}
      <label>
        Product Name (UK):
        <input type="text" {...register('product_name_uk')} />
      </label>
      {errors.product_name_uk && <p style={{ color: 'red' }}>{errors.product_name_uk.message}</p>}

      {/* Product Name (EN) Input */}
      <label>
        Product Name (EN):
        <input type="text" {...register('product_name_en')} />
      </label>
      {errors.product_name_en && <p style={{ color: 'red' }}>{errors.product_name_en.message}</p>}

      {/* Price Input */}
      <label>
        Price:
        <input type="number" {...register('price')} />
      </label>
      {errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}

      {/* Opt Price Input */}
      <label>
        Opt Price:
        <input type="number" {...register('opt_price')} />
      </label>
      {errors.opt_price && <p style={{ color: 'red' }}>{errors.opt_price.message}</p>}

      {/* Dropshipper Price Input */}
      <label>
        Dropshipper Price:
        <input type="number" {...register('dropshipper_price')} />
      </label>
      {errors.dropshipper_price && <p style={{ color: 'red' }}>{errors.dropshipper_price.message}</p>}

      {/* Small Opt Price Input */}
      <label>
        Small Opt Price:
        <input type="number" {...register('small_opt_price')} />
      </label>
      {errors.small_opt_price && <p style={{ color: 'red' }}>{errors.small_opt_price.message}</p>}

      {/* Discount Input */}
      <label>
        Discount:
        <input type="number" {...register('discount')} />
      </label>
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
      <label>
        Volume (ml):
        <input type="number" {...register('volume_ml')} />
      </label>
      {errors.volume_ml && <p style={{ color: 'red' }}>{errors.volume_ml.message}</p>}

      {/* Purpose Category Input */}
      <label>
        Purpose Category:
        <input type="text" {...register('purpose_category')} placeholder="Enter categories separated by commas" />
      </label>
      {errors.purpose_category && <p style={{ color: 'red' }}>{errors.purpose_category.message}</p>}

      {/* Type Category Input */}
      <label>
        Type Category:
        <input type="text" {...register('type_category')} />
      </label>
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
