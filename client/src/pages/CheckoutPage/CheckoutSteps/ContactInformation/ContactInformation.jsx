import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { ContactInformationInput } from '../ContactInformationInput/ContactInformationInput';
import { PhoneNumberInput } from '@components/form-components';
import Button from '@components/UI/Button/Button';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const ContactInformation = ({ activeStep, setActiveStep, register, setValue, errors, trigger, getValues }) => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  return (
    <div className={cl.contactInformation}>
      <div className={cl.contactInformationHeader}>
        <Heading type="h3">1. {getTranslation('personalData')}</Heading>
        {activeStep !== 1 && <button onClick={() => setActiveStep(1)}>{getTranslation('edit')}</button>}
      </div>
      {activeStep === 1 ? (
        <>
          <Paragraph type="body2">{getTranslation('enterYourDataToContinue')}</Paragraph>
          <div>
            <ContactInformationInput
              name="name"
              register={register}
              placeholder={getTranslation('name')}
              labelText={`${getTranslation('name')}*`}
              errors={errors}
            />
            <ContactInformationInput
              name="surname"
              register={register}
              placeholder={getTranslation('surname')}
              labelText={`${getTranslation('surname')}*`}
              errors={errors}
            />
            <PhoneNumberInput
              setValue={setValue}
              variant="popUp"
              register="phone"
              name="phone"
              placeholder="+38 (097) 123 45 67"
              labelText={`${getTranslation('phone')}*`}
              errors={errors}
              getValues={getValues}
              nameSpace="checkoutPage"
            />
            <div>
              <ContactInformationInput
                name="telegram"
                register={register}
                labelText={getTranslation('telegram')}
                placeholder="@user_name"
                errors={errors}
              />
              <p>{getTranslation('telegramParagraph')}</p>
            </div>
          </div>
          <Button
            onClick={async () => {
              const isStepValid = await trigger(['name', 'surname', 'phone', 'telegram']);
              if (isStepValid) {
                setActiveStep(2);
              }
            }}
          >
            {getTranslation('continue')}
          </Button>
        </>
      ) : (
        <div>
          <Paragraph type="body2">
            {getValues().name} {getValues().surname} <br /> {getValues().phone}
          </Paragraph>
        </div>
      )}
    </div>
  );
};
export default ContactInformation;
