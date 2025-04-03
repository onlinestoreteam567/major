import * as yup from 'yup';

export const categorySchema = yup.object({
  category_name_uk: yup.string().required('Назва категорії за призначенням (укр) обов’язкова'),
  category_name_en: yup.string().required('Назва категорії за призначенням (англ) обов’язкова'),

  image: yup.mixed().test('is-not-undefined', "Зображення обов'язкове", (value) => value !== undefined),
});
