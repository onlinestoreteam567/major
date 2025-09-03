import { useEffect, useState } from 'react';

const useShippingLogic = (activeStep, shippingMethod, getValues, setActiveStep) => {
  const [isShowEditButton, setIsShowEditButton] = useState(false);
  const [isShowShippingInfo, setIsShowShippingInfo] = useState(false);

  useEffect(() => {
    if (activeStep !== 2) {
      const isNovaPostReady = shippingMethod === 'novaPost' && getValues().settlement && getValues().warehouse;
      const isSelfPickupReady = shippingMethod === 'selfPickup';
      setIsShowEditButton(isNovaPostReady || isSelfPickupReady);
    } else {
      setIsShowEditButton(false);
    }
  }, [activeStep, shippingMethod, getValues]);

  useEffect(() => {
    if (activeStep !== 2) {
      const isNovaPostInfoReady = shippingMethod === 'novaPost' && getValues().settlement && getValues().warehouse;
      const isSelfPickupInfoReady = shippingMethod === 'selfPickup';
      setIsShowShippingInfo(isNovaPostInfoReady || isSelfPickupInfoReady);
    }
  }, [activeStep, shippingMethod, getValues]);

  const handleEditClick = () => {
    setActiveStep(2);
    setIsShowEditButton(false);
  };

  return { isShowEditButton, isShowShippingInfo, handleEditClick };
};

export default useShippingLogic;
