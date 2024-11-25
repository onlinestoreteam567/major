import * as yup from 'yup';

export const checkoutSchema = yup.object({
  fullName: yup.string().min(5, 'Full name must be at least 5 characters long').required('Full name is required'),
  address: yup.string().min(10, 'Address must be at least 10 characters long').required('Address is required'),
  city: yup.string().required('City is required'),
  postalCode: yup
    .string()
    .matches(/^\d{5}$/, 'Postal code must be exactly 5 digits')
    .required('Postal code is required'),
  phoneNumber: yup
    .string()
    .matches(/^\+?\d{10,15}$/, 'Phone number must be valid')
    .required('Phone number is required'),
  paymentMethod: yup
    .string()
    .oneOf(['credit_card', 'paypal', 'bank_transfer'], 'Invalid payment method')
    .required('Payment method is required'),
});
