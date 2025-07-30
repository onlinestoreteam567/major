import * as yup from 'yup';

export const checkoutSchema = yup.object({
  name: yup.string().required('required'),
  surname: yup.string().required('required'),
  phone: yup
    .string()
    .trim()
    .notOneOf(['+38 (0__)  __ __ ___'], 'required')
    .required('required')
    .test('no-dash', 'enterFullNumber', (value) => !value?.includes('_')),
  telegram: yup.string(),

  settlement: yup.string().required('required'),
  warehouse: yup.string().required('required'),
  comment: yup.string().max(500, 'maximum500Characters'),
  checkbox: yup.boolean().default(false).oneOf([true], 'youMustAgreeToTheProcessingOfPersonalData').default(true),
});
