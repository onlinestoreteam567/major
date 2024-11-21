import { useState } from 'react';
import cl from './index.module.scss';
import InteractiveMap from './InteractiveMap/InteractiveMap';
import InformationAboutPartner from './PartnerInfo/PartnerInfo';
import partnerData from './partnerData';
import handlePointClick from './handlePointClick';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';
import Heading from '@components/UI/Heading/Heading';

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
      <Heading type="h2">{getTranslation('ourPartners')}</Heading>
      <InteractiveMap
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
