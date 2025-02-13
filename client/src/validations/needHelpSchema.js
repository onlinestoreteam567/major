import * as yup from 'yup';

export const needHelpSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .min(5, 'Full name must be at least 5 characters long')
    .required('Full name is required'),

  phone: yup.string().trim(),

  question: yup
    .string()
    .trim()
    .min(10, 'Question must be at least 10 characters long')
    .required('Question is required'),
});
