import * as yup from 'yup';

export const cooperationSchema = yup.object().shape({
  fullName: yup.string().trim().required('Full name is required'),

  phone: yup
    .string()
    .trim()
    .notOneOf(['+38 (0__)  __ __ ___'], 'This number is not allowed')
    .required('Phone number is required'),
});
