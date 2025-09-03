import { Input } from '@components/form-components';
import { PromocodeInputDate } from '@components/admin/PromocodeManagement/PromocodeForm/PromocodeInputDate/PromocodeInputDate';
import cl from './index.module.scss';
import ValidationErrorMessage from '@components/admin/ValidationErrorMessage/ValidationErrorMessage';

const PromocodeForm = ({ register, errors, control }) => {
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
        <PromocodeInputDate
          placeholder="10.06.2024"
          labelText="Початок дії:"
          name="started_at"
          errors={errors}
          control={control}
        />
        <PromocodeInputDate
          placeholder="10.06.2024"
          labelText="Кінець дії:"
          name="expires_at"
          errors={errors}
          control={control}
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
