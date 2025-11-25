import { useState } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@components/UI/Texts/Heading/Heading';
import Button from '@components/UI/Button/Button';
import Map from './Map/Map';
import PartnerInfo from './Map/PartnerInfo/PartnerInfo';
import CooperationPopUp from '@pages/CooperationPage/CooperationOffer/CooperationPopUp/CooperationPopUp';

const OurPartners = ({ isShowButton }) => {
  const { getTranslation } = useTranslationNamespace('ourPartners');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isShowCooperationPopUp, setIsShowCooperationPopUp] = useState();

  return (
    <section className={cl.ourPartners}>
      <div className={cl.headingWrapper}>
        <Heading type="h2">{getTranslation('ourPartners')}</Heading>
        {selectedPartner && (
          <PartnerInfo informationAboutPartner={selectedPartner} setInformationAboutPartner={setSelectedPartner} />
        )}
      </div>
      <Map onPartnerClick={setSelectedPartner} />
      {isShowButton && (
        <div className={cl.buttonWrapper}>
          <Button onClick={() => setIsShowCooperationPopUp(true)} ariaLabel={getTranslation('becomePartner')}>
            {getTranslation('becomePartner')}
          </Button>
        </div>
      )}

      {isShowCooperationPopUp && <CooperationPopUp setIsShowCooperationPopUp={setIsShowCooperationPopUp} />}
    </section>
  );
};

export default OurPartners;
