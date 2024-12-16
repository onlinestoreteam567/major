import * as yup from 'yup';

export const assignmentSchema = yup.object({
  normal: yup.boolean(),
  colored: yup.boolean(),
  thin: yup.boolean(),
  damaged: yup.boolean(),
  growth: yup.boolean(),
  cleansing: yup.boolean(),
});
