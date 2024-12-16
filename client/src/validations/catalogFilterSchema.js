import * as yup from 'yup';

export const catalogFilterSchema = yup.object({
  // assignment
  normal: yup.boolean(),
  colored: yup.boolean(),
  thin: yup.boolean(),
  damaged: yup.boolean(),
  growth: yup.boolean(),
  cleansing: yup.boolean(),

  // category
});
