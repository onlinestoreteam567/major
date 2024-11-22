import * as yup from 'yup';

export const productSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Product name must be at least 3 characters long')
    .max(100, 'Product name cannot exceed 100 characters')
    .required('Product name is required'),
  description: yup
    .string()
    .min(20, 'Description must be at least 20 characters long')
    .max(1000, 'Description cannot exceed 1000 characters')
    .required('Description is required'),
  price: yup.number().positive('Price must be greater than zero').required('Price is required'),
  stock: yup
    .number()
    .integer('Stock must be an integer')
    .min(0, 'Stock cannot be negative')
    .required('Stock is required'),
  category: yup.string().required('Category is required'),
  images: yup
    .array()
    .of(yup.string().url('Each image must be a valid URL'))
    .min(1, 'At least one image is required')
    .required('Images are required'),
});
