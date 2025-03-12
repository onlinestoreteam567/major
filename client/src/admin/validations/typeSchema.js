import * as yup from 'yup';

export const typeSchema = yup.object({
  type_name_uk: yup.string().required('Назва категорії за призначенням (укр) обов’язкова'),
  type_name_en: yup.string().required('Назва категорії за призначенням (англ) обов’язкова'),

  // upload_images: yup
  // .array()
  // .of(yup.string().url('Зображення повинно бути у форматі URL'))
  // .required('Потрібно завантажити хоча б одне зображення')
  // .min(1, 'Потрібно завантажити хоча б одне зображення'),
});
