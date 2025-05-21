import { Input } from '@components/form-components';

const PartnersForm = ({ register, errors }) => {
  return (
    <>
      <Input labelText="name_uk" name="name_uk" register={register} errors={errors} />
      <Input labelText="name_en" name="name_en" register={register} errors={errors} />
      <Input labelText="addres_uk" name="addres_uk" register={register} errors={errors} />
      <Input labelText="addres_en" name="addres_en" register={register} errors={errors} />
      <Input labelText="work_schedule_weekdays" name="work_schedule_weekdays" register={register} errors={errors} />
      <Input labelText="work_schedule_weekends" name="work_schedule_weekends" register={register} errors={errors} />
      <Input labelText="google_maps_link" name="google_maps_link" register={register} errors={errors} />
      <Input labelText="longitude" name="longitude" register={register} errors={errors} />
      <Input labelText="latitude" name="latitude" register={register} errors={errors} />
    </>
  );
};
export default PartnersForm;
