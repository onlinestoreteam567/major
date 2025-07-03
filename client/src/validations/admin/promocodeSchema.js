import * as yup from 'yup';

export const promocodeSchema = yup.object({
  code: yup.string().trim().required(`Назва промокоду обов'язкова`).max(50, 'Максимальна довжина 50 символів'),
  discount_percent: yup
    .mixed()
    .test('is-valid-number', "Знижка обов'язкова", (value) => {
      if (!value) return false;
      const num = Number(value);
      return !isNaN(num);
    })
    .test('is-in-range', 'Знижка повинна бути від 0 до 100', (value) => {
      if (!value) return false;
      const num = Number(value);
      return num >= 0 && num <= 100;
    }),

  started_at: yup
    .mixed()
    .test('is-valid-date', "Дата початку обов'язкова", (value) => {
      if (!value) return false;
      const date = new Date(value);
      return !isNaN(date.getTime());
    })
    .test('is-before-expires', 'Дата початку не може бути пізніше дати закінчення', function (value) {
      if (!value || !this.parent.expires_at) return true;
      return new Date(value) <= new Date(this.parent.expires_at);
    }),

  expires_at: yup
    .mixed()
    .test('is-valid-date', "Дата закінчення обов'язкова", (value) => {
      if (!value) return false;
      const date = new Date(value);
      return !isNaN(date.getTime());
    })
    .test('is-after-started', 'Дата закінчення не може бути раніше дати початку', function (value) {
      if (!value || !this.parent.started_at) return true;
      return new Date(value) >= new Date(this.parent.started_at);
    }),
});
