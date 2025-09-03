import Button from '@components/UI/Button/Button';
import Heading from '@components/UI/Texts/Heading/Heading';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useState } from 'react';
import cl from './index.module.scss';
import NovaPost from './NovaPost/NovaPost';
import { ShippingTextArea } from './ShippingTextArea/ShippingTextArea';
import ShippingInfo from './ShippingInfo';
import useShippingLogic from './hooks/useShippingLogic';
import handleContinueClick from './helpers/handleContinueClick';

const Shipping = ({ control, activeStep, setActiveStep, register, errors, trigger, getValues, setValue }) => {
  const [shippingMethod, setShippingMethod] = useState('novaPost');
  const { isShowEditButton, isShowShippingInfo, handleEditClick } = useShippingLogic(
    activeStep,
    shippingMethod,
    getValues,
    setActiveStep
  );
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  return (
    <div className={cl.shipping}>
      <div className={cl.shippingHeader}>
        <Heading type="h3">2. {getTranslation('shipping')}</Heading>
        {isShowEditButton && <button onClick={handleEditClick}>{getTranslation('edit')}</button>}
      </div>

      {activeStep === 2 ? (
        <>
          <div>
            <Paragraph type="body2">{getTranslation('chooseADeliveryMethod')}</Paragraph>
            <p>{getTranslation('availableOnlyOnTheTerritoryOfUkraine')}</p>
          </div>
          <div>
            <button
              className={shippingMethod === 'novaPost' ? cl.active : ''}
              onClick={() => setShippingMethod('novaPost')}
              type="button"
            >
              <Heading type="h4">{getTranslation('novaPost')}</Heading>
            </button>
            <button
              type="button"
              className={shippingMethod === 'selfPickup' ? cl.active : ''}
              onClick={() => setShippingMethod('selfPickup')}
            >
              <Heading type="h4">{getTranslation('selfPickup')}</Heading>
            </button>
          </div>
          <div>
            {shippingMethod === 'novaPost' ? (
              <NovaPost setValue={setValue} control={control} register={register} errors={errors} />
            ) : (
              <Paragraph type="body1">
                {getTranslation('youCanPickItUpAtTheAddress')} <br /> {getTranslation('selfPupAddress')}
              </Paragraph>
            )}
            <ShippingTextArea
              name={'comment'}
              register={register}
              errors={errors}
              labelText={getTranslation(`${'commentToOrder'}:`)}
              placeholder={getTranslation('commentToOrder')}
            />
            <Button onClick={handleContinueClick(shippingMethod, trigger, setActiveStep)}>
              {getTranslation('continue')}
            </Button>
          </div>
        </>
      ) : (
        isShowShippingInfo && <ShippingInfo shippingMethod={shippingMethod} getValues={getValues} />
      )}
    </div>
  );
};
export default Shipping;
