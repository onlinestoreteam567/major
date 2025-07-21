import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { ContactInformationInput } from '../ContactInformationInput/ContactInformationInput';
import { PhoneNumberInput } from '@components/form-components';
import Button from '@components/UI/Button/Button';

const ContactInformation = ({ activeStep, setActiveStep, register, setValue, errors }) => {
  return (
    <div className={cl.contactInformation}>
      <div className={cl.contactInformationHeader}>
        <Heading type="h3">1. Особисті дані</Heading>
        {activeStep !== 1 && <button onClick={() => setActiveStep(1)}>Редагувати</button>}
      </div>
      {activeStep === 1 && (
        <>
          <Paragraph type="body2">Введіть дані, щоб продовжити</Paragraph>
          <div>
            <ContactInformationInput
              name="name"
              register={register}
              placeholder="Ім’я"
              labelText="Ім'я*:"
              errors={errors}
            />
            <ContactInformationInput
              name="surname"
              register={register}
              labelText="Прізвище*:"
              placeholder="Прізвище"
              errors={errors}
            />
            <PhoneNumberInput
              setValue={setValue}
              variant="popUp"
              register="phone"
              name="phone"
              labelText="Номер телефону*:"
              placeholder="+38 (097) 123 45 67"
              errors={errors}
            />
            <div>
              <ContactInformationInput
                name="telegram"
                register={register}
                labelText="Ім’я користувача в Telegram "
                placeholder="@user_name"
                errors={errors}
              />
              <p>Якщо хочете отримати підтвердження про замовлення в Telegram </p>
            </div>
          </div>
          <Button onClick={() => setActiveStep(2)}>Продовжити</Button>
        </>
      )}
    </div>
  );
};
export default ContactInformation;
