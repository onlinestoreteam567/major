import * as yup from 'yup';

export const reviewSchema = yup.object({
  rating: yup
    .number()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating cannot exceed 5')
    .required('Rating is required'),
  comment: yup
    .string()
    .min(10, 'Comment must be at least 10 characters long')
    .max(500, 'Comment cannot exceed 500 characters')
    .required('Comment is required'),
});
