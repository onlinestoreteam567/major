import { Input } from '@components/form-components';

const TypeForm = ({ register, errors }) => {
  return (
    <>
      <Input labelText="Назва категорії (uk):" name="type_name_uk" register={register} errors={errors} />
      <Input labelText="Назва категорії (en):" name="type_name_en" register={register} errors={errors} />
    </>
  );
};
export default TypeForm;
