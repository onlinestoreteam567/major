import ValidationErrorMessage from '@components/admin/ValidationErrorMessage/ValidationErrorMessage';
import { Input, PhoneNumberInput } from '@components/form-components';
import cl from './index.module.scss';

const ContactsForm = ({ register, errors, setValue }) => {
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
        <PhoneNumberInput
          setValue={setValue}
          register="main_phone_number"
          name="main_phone_number"
          labelText="Основний номер*:"
          placeholder="example"
          errors={errors}
        />
        <PhoneNumberInput
          setValue={setValue}
          register="secondary_phone_number"
          name="secondary_phone_number"
          labelText="Додатковий номер:"
          placeholder="example"
          errors={errors}
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
          name="work_schedule_weekend"
          register={register}
          errors={errors}
          variant="admin"
          placeholder="example"
        />
      </div>
      <Input
        labelText="Рік сайту:"
        name="copyright"
        register={register}
        errors={errors}
        variant="admin"
        placeholder="example"
      />
      <Input
        labelText="Політика конфіденційності:"
        name="privacy_policy_url"
        register={register}
        errors={errors}
        variant="admin"
        placeholder="example"
      />
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
