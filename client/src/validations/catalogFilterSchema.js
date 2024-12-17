import * as yup from 'yup';

export const catalogFilterSchema = yup.object({
  // switchs
  newItems: yup.boolean(),
  bestSellers: yup.boolean(),
  discounts: yup.boolean(),

  // assignment
  normal: yup.boolean(),
  colored: yup.boolean(),
  thin: yup.boolean(),
  damaged: yup.boolean(),
  growth: yup.boolean(),
  cleansing: yup.boolean(),

  // range
  priceRange: yup.object({
    min: yup.number().min(0).max(999).required(),
    max: yup.number().min(0).max(999).required(),
  }),

  // category
  shampoo: yup.boolean(),
  conditioner: yup.boolean(),
  balm: yup.boolean(),
  serum: yup.boolean(),
  cream: yup.boolean(),
  oil: yup.boolean(),
  mask: yup.boolean(),
});
