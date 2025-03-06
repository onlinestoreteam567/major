import * as yup from 'yup';

export const productSchema = yup.object({
  article: yup
    .string()
    .required(`Артикул обов'язковий`)
    .min(3, 'Артикул повинен мати щонайменше 3 символи')
    .max(20, 'Артикул повинен мати не більше 20 символів')
    .trim(),

  available: yup.boolean(),

  product_name_uk: yup.string().required('Назва продукту (укр) обов’язкова'),
  product_name_en: yup.string().required('Назва продукту (англ) обов’язкова'),

  price: yup
    .number()
    .required('Ціна обов’язкова')
    .min(0, 'Ціна не може бути від’ємною')
    .max(Number.MAX_SAFE_INTEGER, 'Завелике значення'),

  discount: yup.number().min(0, 'Знижка не може бути від’ємною').max(100, 'Знижка не може бути більше ніж 100%'),

  description_uk: yup.string().required('Опис (укр) обов’язковий'),
  description_en: yup.string().required('Опис (англ) обов’язковий'),

  volume_ml: yup
    .number()
    .required('Об’єм обов’язковий')
    .min(0, 'Об’єм не може бути від’ємним')
    .max(Number.MAX_SAFE_INTEGER, 'Завелике значення'),

  upload_images: yup
    .array()
    // .of(yup.string().url('Зображення повинно бути у форматі URL'))
    .required('Потрібно завантажити хоча б одне зображення')
    .min(1, 'Потрібно завантажити хоча б одне зображення'),

  purpose_category: yup
    .array()
    .of(yup.number().integer().min(0, 'Невірна категорія'))
    .required('Категорія призначення обов’язкова'),

  type_category: yup.number().integer().required('Тип категорії обов’язковий'),

  is_new: yup.boolean(),
  is_best_seller: yup.boolean(),

  ingredients: yup.string().required('Інгредієнти обов’язкові'),
  application_uk: yup.string().required('Застосування (укр) обов’язкове'),
  application_en: yup.string().required('Застосування (англ) обов’язкове'),
});
