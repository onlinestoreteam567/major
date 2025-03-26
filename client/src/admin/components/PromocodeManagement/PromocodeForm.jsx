import { Input } from '@components/form-components';

const PromocodeForm = ({ register, errors }) => {
  return (
    <>
      <Input labelText="Промокод:" name="code" register={register} errors={errors} />
      <Input type="number" labelText="Знижка:" name="discount_percent" register={register} errors={errors} />
      <Input type="date" labelText="Термін дії до:" name="expires_at" register={register} errors={errors} />
    </>
  );
};
export default PromocodeForm;
