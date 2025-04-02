import * as yup from 'yup';

export const bannerSchema = yup.object({
  product_id: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Вибір товару обовязковий')
    .positive('Помилка: число повинно бути більше нуля')
    .integer('Помилка: число повинно бути цілим числом'),

  background_image: yup
    .mixed() // mixed дозволяє буrдь-який тип даних
    .test('is-not-undefined', "Фон обов'язковий", (value) => value !== undefined),

  image: yup.mixed().test('is-not-undefined', "Зображення обов'язкове", (value) => value !== undefined),
});
