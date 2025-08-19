const handleContinueClick = (shippingMethod, trigger, setActiveStep) => async () => {
  if (shippingMethod === 'novaPost') {
    const isStepValid = await trigger(['settlement', 'warehouse', 'comment']);
    if (isStepValid) setActiveStep(3);
  } else {
    const isStepValid = await trigger(['comment']);
    if (isStepValid) setActiveStep(3);
  }
};

export default handleContinueClick;
