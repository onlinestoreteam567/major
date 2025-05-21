import * as yup from 'yup';

export const partnerSchema = yup.object({
  name_uk: yup.string().required("Назва (укр) обов'язкова"),
  name_en: yup.string().required("Назва (англ) обов'язкова"),
  addres_uk: yup.string().required("Адреса (укр) обов'язкова"),
  addres_en: yup.string().required("Адреса (англ) обов'язкова"),
  work_schedule_weekdays: yup.string().required("Графік роботи у будні обов'язковий"),
  work_schedule_weekends: yup.string().required("Графік роботи у вихідні обов'язковий"),
  google_maps_link: yup
    .string()
    .url('Посилання на Google Maps має бути дійсною URL-адресою')
    .required("Посилання на Google Maps обов'язкове"),
  longitude: yup.number().typeError('Довгота має бути числом').required("Довгота обов'язкова"),
  latitude: yup.number().typeError('Широта має бути числом').required("Широта обов'язкова"),
});
