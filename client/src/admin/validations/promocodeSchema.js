import * as yup from 'yup';

export const promocodeSchema = yup.object({
  code: yup.string().trim().required(`Назва промокоду обов'язкова`).max(50, 'Максимальна довжина 50 символів'),
  discount_percent: yup
    .number()
    .min(0, "Знижка не може бути від'ємною")
    .max(100, 'Знижка не може бути більше ніж 100%')
    .required("Знижка обов'язкова"),
  expires_at: yup
    .date()
    .required("Дата закінчення обов'язкова")
    .min(new Date(), 'Дата закінчення не може бути раніше сьогодні'),
});
