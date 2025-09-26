import ValidationErrorMessage from '@components/admin/ValidationErrorMessage/ValidationErrorMessage';
import { Input } from '@components/form-components';
import cl from './index.module.scss';

const ContactsForm = ({ register, errors }) => {
  return (
    <>
      <div className={cl.socialNetworks}>
        <h2>Соціальні мережі</h2>
        <Input
          labelText="Telegram:"
          name="telegram"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
        <Input
          labelText="Instagram:"
          name="instagram"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
        <Input
          labelText="Email:"
          name="email"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
      </div>
      <div className={cl.phoneNumbers}>
        <h2>Номери телефону</h2>
        <Input
          labelText="Основний номер*:"
          name="main_phone_number"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
        <Input
          labelText="Додатковий номер:"
          name="additional_phone_number"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
      </div>
      <div className={cl.workSchedule}>
        <h2>Графік роботи</h2>
        <Input
          labelText="Пн-Пт:"
          name="work_schedule_weekdays"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
        <Input
          labelText="Сб-Нд:"
          name="work_schedule_weekends"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
      </div>
      <div className={cl.documentsLinks}>
        <h2>Посилання на документи</h2>
        <Input
          labelText="Договір оферти:"
          name="offer_agreement_policy"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="link"
        />
        <Input
          labelText="Обмін та повернення:"
          name="exchange_and_return_policy"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="link"
        />
        <Input
          labelText="Оплата та доставка:"
          name="paymant_and_delivery_policy"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="link"
        />
      </div>

      {Object.keys(errors).length > 0 && (
        <div className={cl.errors}>
          {Object.entries(errors).map(
            ([fieldName, error]) =>
              error.message && <ValidationErrorMessage key={fieldName}>{error.message}</ValidationErrorMessage>
          )}
        </div>
      )}
    </>
  );
};
export default ContactsForm;
