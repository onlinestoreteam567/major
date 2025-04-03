import * as yup from 'yup';

export const needHelpSchema = yup.object().shape({
  user_name: yup.string().trim().required('Full name is required'),

  review_text: yup.string().trim().required('Question is required'),
});
