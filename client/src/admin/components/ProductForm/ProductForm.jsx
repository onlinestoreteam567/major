import { useState } from 'react';
import { createProduct } from '../../redux/service';
import { useDispatch } from 'react-redux';

const ProductForm = () => {
  const [formData, setFormData] = useState({
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
    purpose_category: [1],
    type_category: '1',
    is_new: true,
    is_best_seller: true,
    ingredients: '1010',
    application_uk: '10',
    application_en: '10',
  });
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.split(',').map((item) => item.trim()), // Converts the string to an array
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Validate required fields
    if (
      !formData.description_uk ||
      !formData.description_en ||
      !formData.ingredients ||
      !formData.application_uk ||
      !formData.application_en ||
      !formData.type_category
    ) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Validate integer fields
    const integerFields = ['opt_price', 'dropshipper_price', 'small_opt_price', 'volume_ml'];
    for (let field of integerFields) {
      if (isNaN(formData[field]) || formData[field] === '') {
        setError(`${field} must be a valid number`);
        setLoading(false);
        return;
      }
    }

    dispatch(createProduct(formData));
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      <label>
        Article:
        <input type="text" name="article" value={formData.article} onChange={handleChange} />
      </label>

      <label>
        Available:
        <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
      </label>

      <label>
        Product Name (UK):
        <input type="text" name="product_name_uk" value={formData.product_name_uk} onChange={handleChange} />
      </label>

      <label>
        Product Name (EN):
        <input type="text" name="product_name_en" value={formData.product_name_en} onChange={handleChange} />
      </label>

      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
      </label>

      <label>
        Opt Price:
        <input type="number" name="opt_price" value={formData.opt_price} onChange={handleChange} />
      </label>

      <label>
        Dropshipper Price:
        <input type="number" name="dropshipper_price" value={formData.dropshipper_price} onChange={handleChange} />
      </label>

      <label>
        Small Opt Price:
        <input type="number" name="small_opt_price" value={formData.small_opt_price} onChange={handleChange} />
      </label>

      <label>
        Discount:
        <input type="number" name="discount" value={formData.discount} onChange={handleChange} />
      </label>

      <label>
        Description (UK):
        <textarea name="description_uk" value={formData.description_uk} onChange={handleChange} />
      </label>

      <label>
        Description (EN):
        <textarea name="description_en" value={formData.description_en} onChange={handleChange} />
      </label>

      <label>
        Volume (ml):
        <input type="number" name="volume_ml" value={formData.volume_ml} onChange={handleChange} />
      </label>

      <label>
        Purpose Category:
        <input
          type="text"
          name="purpose_category"
          value={formData.purpose_category.join(', ')} // Display as comma-separated values
          onChange={handleArrayChange}
          placeholder="Enter categories separated by commas"
        />
      </label>

      <label>
        Type Category:
        <input type="text" name="type_category" value={formData.type_category} onChange={handleChange} />
      </label>

      <label>
        Ingredients:
        <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} />
      </label>

      <label>
        Application (UK):
        <textarea name="application_uk" value={formData.application_uk} onChange={handleChange} />
      </label>

      <label>
        Application (EN):
        <textarea name="application_en" value={formData.application_en} onChange={handleChange} />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Product'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};

export default ProductForm;
