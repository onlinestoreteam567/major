import * as yup from 'yup';

export const imageUploadSchema = yup.object({
  upload_image: yup.mixed().test('is-not-undefined', "Фото обов'язкове", (value) => value !== undefined),
});
