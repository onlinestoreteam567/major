import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../redux/selectors';

const ProductForm = () => {
  const auth = useSelector(selectAccessToken);

  const [formData, setFormData] = useState({
    article: '',
    available: true,
    product_name_uk: '',
    product_name_en: '',
    price: '',
    opt_price: '',
    dropshipper_price: '',
    small_opt_price: '',
    discount: '',
    description_uk: '',
    description_en: '',
    volume_ml: '',
    purpose_category: [],
    type_category: '',
    is_new: true,
    is_best_seller: true,
    ingredients: '',
    application_uk: '',
    application_en: '',
  });

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

    // Validate required fields
    if (
      !formData.description_uk ||
      !formData.description_en ||
      !formData.ingredients ||
      !formData.application_uk ||
      !formData.application_en ||
      !formData.type_category
    ) {
      console.error('Please fill in all required fields');
      return;
    }

    // Validate integer fields
    const integerFields = ['opt_price', 'dropshipper_price', 'small_opt_price', 'volume_ml'];
    for (let field of integerFields) {
      if (isNaN(formData[field]) || formData[field] === '') {
        console.error(`${field} must be a valid integer`);
        return;
      }
    }

    // Ensure purpose_category is an array
    if (!Array.isArray(formData.purpose_category)) {
      console.error('purpose_category must be an array');
      return;
    }

    const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;
    const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await axios.post(`${VITE_API_BASE_URL}${PRODUCT_LIST_ENDPOINT}/`, formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth}`,
        },
      });
      console.log('Product created:', response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
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

      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
