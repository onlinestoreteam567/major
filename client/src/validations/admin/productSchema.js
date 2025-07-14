import * as yup from 'yup';

export const productSchema = yup.object({
  article: yup.string().required(`Артикул обов'язковий`).max(20, 'Артикул повинен мати не більше 20 символів').trim(),

  product_name_uk: yup.string().required('Назва продукту (укр) обов’язкова'),
  product_name_en: yup.string().required('Назва продукту (англ) обов’язкова'),

  price: yup
    .number()
    .typeError('Будь ласка, напишіть число')
    .required('Ціна обов’язкова')
    .min(0, 'Ціна не може бути від’ємною')
    .max(Number.MAX_SAFE_INTEGER, 'Завелике значення'),

  discount: yup
    .number()
    .typeError('Будь ласка, напишіть число')
    .min(0, 'Знижка не може бути від’ємною')
    .max(100, 'Знижка не може бути більше ніж 100%'),

  volume_ml: yup
    .number()
    .typeError('Будь ласка, напишіть число')
    .required('Об’єм обов’язковий')
    .min(0, 'Об’єм не може бути від’ємним')
    .max(Number.MAX_SAFE_INTEGER, 'Завелике значення'),

  upload_images: yup
    .mixed()
    .test('is-not-undefined', 'Завантажте щонайменше 1 зображення', (value) => value !== undefined),

  purpose_category: yup.number().integer().required('Категорія за призначенням обовязкова'),

  type_category: yup
    .number()
    .typeError('Будь ласка, оберіть категорію за типом')
    .integer('Будь ласка, введіть ціле число')
    .required('Категорія за типом обов’язкова'),

  available: yup.boolean(),
  is_new: yup.boolean(),
  is_best_seller: yup.boolean(),

  description_uk: yup
    .string()
    .test('is-not-empty-p-tag', 'Опис (укр) обов’язковий', (value) => value !== '<p></p>')
    .required('Опис (укр) обов’язковий'),
  description_en: yup
    .string()
    .test('is-not-empty-p-tag', 'Опис (англ) обов’язковий', (value) => value !== '<p></p>')
    .required('Опис (англ) обов’язковий'),

  ingredients: yup
    .string()
    .test('is-not-empty-p-tag', 'Інгредієнти обов’язкові', (value) => value !== '<p></p>')
    .required('Інгредієнти обов’язкові'),

  application_uk: yup
    .string()
    .test('is-not-empty-p-tag', 'Застосування (укр) обов’язкове', (value) => value !== '<p></p>')
    .required('Застосування (укр) обов’язкове'),

  application_en: yup
    .string()
    .test('is-not-empty-p-tag', 'Застосування (англ) обов’язкове', (value) => value !== '<p></p>')
    .required('Застосування (англ) обов’язкове'),
});
