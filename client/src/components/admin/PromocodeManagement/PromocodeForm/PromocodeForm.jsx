import { Input } from '@components/form-components';
import { InputDate } from '@components/form-components/InputDate/InputDate';
import cl from './index.module.scss';
import ValidationErrorMessage from '@components/admin/ValidationErrorMessage/ValidationErrorMessage';

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
        <InputDate
          placeholder="10.06.2024"
          variant="admin"
          type="date"
          labelText="Початок дії:"
          name="started_at"
          register={register}
          errors={errors}
        />
        <InputDate
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
        {(errors.code || errors.started_at || errors.expires_at || errors.discount_percent) && (
          <ValidationErrorMessage>Усі поля обовʼязкові для заповнення</ValidationErrorMessage>
        )}
      </div>
    </>
  );
};

export default PromocodeForm;
