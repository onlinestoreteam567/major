import * as yup from 'yup';

export const checkoutSchema = yup.object({
  name: yup.string().required('Обов’язкове поле для заповнення!'),
  surname: yup.string().required('Обов’язкове поле для заповнення!'),
  phone: yup
    .string()
    .trim()
    .notOneOf(['+38 (0__)  __ __ ___'], 'Обов’язкове поле для заповнення!')
    .required('Обов’язкове поле для заповнення!'),
  telegram: yup.string(),

  settlement: yup.string().required('Обов’язкове поле для заповнення!'),
  warehouse: yup.string().required('Обов’язкове поле для заповнення!'),
  comment: yup.string().max(500, 'Максимальна довжина коментаря 500 символів'),
  checkbox: yup
    .boolean()
    .default(false)
    .oneOf([true], 'Ви повинні погодитися на обробку персональних даних')
    .default(true),
  // address: yup.string().min(10, 'Address must be at least 10 characters long').required('Address is required'),
  // city: yup.string().required('City is required'),
  // postalCode: yup
  //   .string()
  //   .matches(/^\d{5}$/, 'Postal code must be exactly 5 digits')
  //   .required('Postal code is required'),
  // phoneNumber: yup
  //   .string()
  //   .matches(/^\+?\d{10,15}$/, 'Phone number must be valid')
  //   .required('Phone number is required'),
  // paymentMethod: yup
  //   .string()
  //   .oneOf(['credit_card', 'paypal', 'bank_transfer'], 'Invalid payment method')
  //   .required('Payment method is required'),
});
