import { Input } from '@components/form-components';

const PartnersForm = ({ register, errors }) => {
  return (
    <>
      <Input labelText="Ім'я укр" name="name_uk" register={register} errors={errors} />
      <Input labelText="Ім'я англ" name="name_en" register={register} errors={errors} />
      <Input labelText="Адреса укр" name="addres_uk" register={register} errors={errors} />
      <Input labelText="Адреса англ" name="addres_en" register={register} errors={errors} />
      <Input labelText="Графік роботи у будні дні" name="work_schedule_weekdays" register={register} errors={errors} />
      <Input
        labelText="Графік роботи у суботу та неділю"
        name="work_schedule_weekends"
        register={register}
        errors={errors}
      />
      <Input labelText="Посилання на гугл мап" name="google_maps_link" register={register} errors={errors} />
      <Input labelText="Широта" name="longitude" register={register} errors={errors} />
      <Input labelText="Довгота" name="latitude" register={register} errors={errors} />
    </>
  );
};
export default PartnersForm;
