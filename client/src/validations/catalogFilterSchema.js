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
  shampoo: yup.boolean(),
  conditioner: yup.boolean(),
  balm: yup.boolean(),
  serum: yup.boolean(),
  cream: yup.boolean(),
  oil: yup.boolean(),
  mask: yup.boolean(),
});
