import * as yup from 'yup';

export const needHelpSchema = yup.object().shape({
  fullName: yup.string().trim().required('Full name is required'),

  phone: yup
    .string()
    .trim()
    .notOneOf(['+38 (0__)  __ __ ___'], 'This number is not allowed')
    .required('Phone number is required'),

  question: yup.string().trim().required('Question is required'),
});
