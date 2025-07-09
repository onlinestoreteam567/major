import { Input } from '@components/form-components';
import cl from './index.module.scss';

const PromocodeForm = ({ register, errors }) => {
  return (
    <>
      <div className={cl.wrapperInput}>
        <Input
          placeholder="example"
          labelText="Промокод:"
          name="code"
          register={register}
          errors={errors}
          variant="admin"
        />
        <Input
          placeholder="10.06.2024"
          variant="admin"
          type="date"
          labelText="Початок дії:"
          name="started_at"
          register={register}
          errors={errors}
        />
        <Input
          placeholder="10.06.2024"
          variant="admin"
          type="date"
          labelText="Кінець дії:"
          name="expires_at"
          register={register}
          errors={errors}
        />
        <Input
          placeholder="example"
          variant="admin"
          type="number"
          labelText="Знижка:"
          name="discount_percent"
          register={register}
          errors={errors}
        />
      </div>
    </>
  );
};

export default PromocodeForm;
