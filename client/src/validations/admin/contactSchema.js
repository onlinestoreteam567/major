import * as yup from 'yup';

export const contactSchema = yup.object({
  telegram: yup
    .string()
    .required('Посилання на Telegram обов’язкове')
    .test(
      'is-http-or-https',
      'Посилання на Telegram має містити http або https',
      (value) => typeof value === 'string' && /^(http|https):\/\//.test(value)
    ),
  instagram: yup
    .string()
    .required('Посилання на Instagram обов’язкове')
    .test(
      'is-http-or-https',
      'Посилання на Instagram має містити http або https',
      (value) => typeof value === 'string' && /^(http|https):\/\//.test(value)
    ),
  email: yup
    .string()
    .required('Email обов’язковий')
    .test(
      'is-valid-email',
      'Введіть коректний email',
      (value) => typeof value === 'string' && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ),

  main_phone_number: yup
    .string()
    .trim()
    .required('Основний номер обов’язкове поле для заповнення!')
    .matches(/^\+[\d\s()]+$/, 'Номер телефону має починатися з + і містити лише цифри, пробіли та дужки'),

  additional_phone_number: yup
    .string()
    .trim()
    .notRequired()
    .test(
      'is-valid-phone',
      'Номер телефону має починатися з + і містити лише цифри, пробіли та дужки',
      (value) => !value || /^\+[\d\s()]+$/.test(value)
    ),

  work_schedule_weekdays: yup.string().required('Графік роботи в будні дні обов’язковий'),
  work_schedule_weekends: yup.string().required('Графік роботи у вихідні дні обов’язковий'),
  offer_agreement_policy: yup
    .string()
    .required('Посилання на Політику конфіденційності обов’язкове')
    .test(
      'is-http-or-https',
      'Посилання на Політику конфіденційності має містити http або https',
      (value) => typeof value === 'string' && /^(http|https):\/\//.test(value)
    ),
  exchange_and_return_policy: yup
    .string()
    .required('Посилання на Політику конфіденційності обов’язкове')
    .test(
      'is-http-or-https',
      'Посилання на Політику конфіденційності має містити http або https',
      (value) => typeof value === 'string' && /^(http|https):\/\//.test(value)
    ),
  paymant_and_delivery_policy: yup
    .string()
    .required('Посилання на Політику конфіденційності обов’язкове')
    .test(
      'is-http-or-https',
      'Посилання на Політику конфіденційності має містити http або https',
      (value) => typeof value === 'string' && /^(http|https):\/\//.test(value)
    ),
});
