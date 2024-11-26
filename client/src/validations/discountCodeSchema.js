import * as yup from 'yup';

export const discountCodeSchema = yup.object({
  code: yup.string().length(8, 'Discount code must be exactly 8 characters').required('Discount code is required'),
});
