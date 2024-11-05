import { useState } from 'react';
import cl from './index.module.scss';
import MapWithPoints from './MapWithPoints';
import InformationAboutPartner from './InformationAboutPartner';
import partnerData from './partnerData';
import handlePointClick from './handlePointClick';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';

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

  const { t } = useTranslation();

  return (
    <section className={`${cl.ourPartnersWrapper} ${partnerInteractionState.closeAnimation ? cl.closeAnimation : ''}`}>
      <h2>{t('ourPartners', { ns: 'ourPartners' })}</h2>
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
        <Button>{t('becomePartner', { ns: 'ourPartners' })}</Button>
      </div>
    </section>
  );
};

export default OurPartners;
