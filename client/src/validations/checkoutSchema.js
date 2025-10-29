import * as yup from 'yup';

export const checkoutSchema = yup.object({
  name: yup.string().required('required'),
  last_name: yup.string().required('required'),
  phone: yup
    .string()
    .trim()
    .notOneOf(['+38 (0__)  __ __ ___'], 'required')
    .required('required')
    .test('no-dash', 'enterFullNumber', (value) => !value?.includes('_')),
  telegram_name: yup
    .string()
    .nullable()
    .notRequired()
    .test('is-valid-telegram', 'telegramError', (value) => !value || value.startsWith('@')),

  delivery_method: yup.string().oneOf(['nova_poshta', 'pickup'], 'selectDeliveryMethod').default('nova_poshta'),
  settlement: yup.string().required('required'),
  warehouse: yup.string().required('required'),
  comment: yup.string().max(500, 'maximum500Characters'),
  payment_option: yup.string().oneOf(['partial', 'full'], 'selectPaymentOption').required('selectPaymentOption'),
  checkbox: yup.boolean().default(false).oneOf([true], 'youMustAgreeToTheProcessingOfPersonalData').default(true),
});
