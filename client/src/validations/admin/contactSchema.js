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
    .notOneOf(['+38 (0__)  __ __ ___'], 'Введіть номер повністю!')
    .required('Обов’язкове поле для заповнення!')
    .test('no-dash', 'Введіть номер повністю', (value) => !value?.includes('_')),
  secondary_phone_number: yup
    .string()
    .trim()
    .notOneOf(['+38 (0__)  __ __ ___'], 'Введіть номер повністю')
    .test('no-dash', 'Введіть номер повністю', (value) => !value?.includes('_')),
  work_schedule_weekdays: yup.string().required('Графік роботи в будні дні обов’язковий'),
  work_schedule_weekend: yup.string().required('Графік роботи у вихідні дні обов’язковий'),
  copyright: yup.string().required('Рік сайту обов`язковий'),
  privacy_policy_url: yup
    .string()
    .required('Посилання на Політику конфіденційності обов’язкове')
    .test(
      'is-http-or-https',
      'Посилання на Політику конфіденційності має містити http або https',
      (value) => typeof value === 'string' && /^(http|https):\/\//.test(value)
    ),
});
