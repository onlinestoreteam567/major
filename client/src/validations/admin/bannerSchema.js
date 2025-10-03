import * as yup from 'yup';

export const bannerSchema = yup.object({
  image: yup.mixed().test('is-not-undefined', "Фото товару обов'язкове", (value) => value !== undefined),
  background_image: yup.mixed().test('is-not-undefined', "Фон обов'язковий", (value) => value !== undefined),

  left: yup.string().required('Вибір розташування обовязковий'),

  product_id: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Вибір товару обовязковий')
    .positive('Помилка: число повинно бути більше нуля')
    .integer('Помилка: число повинно бути цілим числом'),
});
