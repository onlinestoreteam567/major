const handlePointClick = (
  className,
  partnerInteractionState,
  setPartnerInteractionState,
  setInformationAboutPartner,
  partnerData
) => {
  if (partnerInteractionState.clickLocked) return;
  setPartnerInteractionState((prevState) => ({ ...prevState, clickLocked: true }));
  const partner = partnerData.find((p) => p.className === className);

  if (partner) {
    if (className === partnerInteractionState.activePartner) {
      setPartnerInteractionState((prevState) => ({ ...prevState, closeAnimation: true }));
      setTimeout(() => {
        setPartnerInteractionState((prevState) => ({
          ...prevState,
          showInformationAboutPartner: false,
          clickLocked: false,
          activePartner: null,
        }));
      }, 275);
    } else {
      setPartnerInteractionState((prevState) => ({
        ...prevState,
        closeAnimation: false,
        activePartner: className,
      }));
      setInformationAboutPartner(partner);
      setPartnerInteractionState((prevState) => ({
        ...prevState,
        showInformationAboutPartner: true,
      }));
      setTimeout(() => {
        setPartnerInteractionState((prevState) => ({ ...prevState, clickLocked: false }));
      }, 275);
    }
  }
};

export default handlePointClick;
