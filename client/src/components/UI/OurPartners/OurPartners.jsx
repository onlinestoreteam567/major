import { useState } from 'react';
import cl from './index.module.scss';
import MapWithPoints from './MapWithPoints';
import InformationAboutPartner from './InformationAboutPartner';
import partnerData from './partnerData';
import handlePointClick from './handlePointClick';

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

  return (
    <section className={`${cl.ourPartnersWrapper} ${partnerInteractionState.closeAnimation ? cl.closeAnimation : ''}`}>
      <h2>Наші партнери</h2>
      <MapWithPoints
        partnerData={partnerData}
        onPointClick={(className) =>
          handlePointClick(
            className,
            partnerInteractionState,
            setPartnerInteractionState,
            setInformationAboutPartner,
            partnerData
          )
        }
      />
      {partnerInteractionState.showInformationAboutPartner && (
        <InformationAboutPartner
          setPartnerInteractionState={setPartnerInteractionState}
          informationAboutPartner={informationAboutPartner}
        />
      )}
      <button className={cl.becomePartnerButton}>Стати партнером</button>
    </section>
  );
};

export default OurPartners;
