import { useState } from 'react';
import cl from './index.module.scss';
import InteractiveMap from './InteractiveMap/InteractiveMap';
import partnerData from './partnerData';
import handlePointClick from './handlePointClick';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import Button from '@components/UI/Button/Button';
import PartnerInfo from './PartnerInfo/PartnerInfo';

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
        <PartnerInfo
          setPartnerInteractionState={setPartnerInteractionState}
          informationAboutPartner={informationAboutPartner}
        />
      )}
      <Button>{getTranslation('becomePartner')}</Button>
    </section>
  );
};

export default OurPartners;
