import { useState } from 'react';
import cl from './index.module.scss';
import MapWithPoints from './MapWithPoints';
import InformationAboutPartner from './InformationAboutPartner';
import partnerData from './partnerData';
import handlePointClick from './handlePointClick';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';

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

  const { getTranslation } = useTranslationNamespace('ourPartners');

  return (
    <section className={`${cl.ourPartnersWrapper} ${partnerInteractionState.closeAnimation ? cl.closeAnimation : ''}`}>
      <h2>{getTranslation('ourPartners')}</h2>
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
      <div>
        <Button>{getTranslation('becomePartner')}</Button>
      </div>
    </section>
  );
};

export default OurPartners;
