import { useState } from 'react';
import cl from './index.module.scss';
import MapWithPoints from './MapWithPoints';
import InformationAboutPartner from './InformationAboutPartner';
import partnerData from './partnerData';

const OurPartners = () => {
  const [partnerInteractionState, setPartnerInteractionState] = useState({
    showInformationAboutPartner: false,
    closeAnimation: true,
    clickLocked: false,
    activePartner: null,
  });

  const [informationAboutPartner, setInformationAboutPartner] = useState({
    title: '',
    workSchedule: '',
    workSchedule1: '',
    adress: '',
    googleMapAdress: '',
  });

  const handlePointClick = (className) => {
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
        }, 500);
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
        }, 500);
      }
    }
  };

  return (
    <section className={`${cl.ourPartnersWrapper} ${partnerInteractionState.closeAnimation ? cl.closeAnimation : ''}`}>
      <h2>Наші партнери</h2>
      <MapWithPoints partnerData={partnerData} onPointClick={handlePointClick} />
      {partnerInteractionState.showInformationAboutPartner && (
        <InformationAboutPartner
          setPartnerInteractionState={setPartnerInteractionState}
          informationAboutPartner={informationAboutPartner}
        />
      )}
      <button>Стати партнером</button>
    </section>
  );
};

export default OurPartners;
