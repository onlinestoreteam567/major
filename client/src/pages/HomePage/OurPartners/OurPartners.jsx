import { useState } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@components/UI/Texts/Heading/Heading';
import Button from '@components/UI/Button/Button';
import Map from './Map/Map';
import PartnerInfo from '@/pages/HomePage/OurPartners/Map/PartnerInfo/PartnerInfo';

const OurPartners = () => {
  const { getTranslation } = useTranslationNamespace('ourPartners');
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <section className={cl.ourPartners}>
      <div className={cl.headingWrapper}>
        <Heading type="h2">{getTranslation('ourPartners')}</Heading>
        {selectedPartner && (
          <PartnerInfo informationAboutPartner={selectedPartner} setInformationAboutPartner={setSelectedPartner} />
        )}
      </div>
      <Map onPartnerClick={setSelectedPartner}/>
      <div className={cl.buttonWrapper}>
        <Button ariaLabel={getTranslation('becomePartner')}>{getTranslation('becomePartner')}</Button>
      </div>
    </section>
  );
};

export default OurPartners;
