import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import Button from '@UI/Button/Button';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import { useState } from 'react';
const PartnerInfo = ({ informationAboutPartner, setInformationAboutPartner }) => {
  const [isHiddenAnimation, setIsHiddenAnimation] = useState();

  const { getTranslation } = useTranslationNamespace('ourPartners');

  const handleClose = () => handleCloseWithDelay(setIsHiddenAnimation, setInformationAboutPartner);

  return (
    <aside className={`${cl.partnerInfo} ${isHiddenAnimation ? cl.hiddenAnimation : ''}`} onMouseLeave={handleClose}>
      <Heading type="h2">{informationAboutPartner.name}</Heading>
      <section className={cl.workScheduleSection}>
        <Heading type="h3">{getTranslation('workingHours')}</Heading>
        <Heading type="h4">{informationAboutPartner.workScheduleWeekdays}</Heading>
        <Heading type="h4">{informationAboutPartner.workScheduleWeekends}</Heading>
      </section>
      <section>
        <Heading type="h3">{getTranslation('address')}</Heading>
        <br />
        <Heading type="h4">{informationAboutPartner.address}</Heading>
      </section>
      <Button variant="secondary">
        <a href={informationAboutPartner.googleMapAddress} rel="nofollow" target="_blank">
          <Heading type="h3">{getTranslation('openGoogleMap')}</Heading>
        </a>
      </Button>
    </aside>
  );
};

export default PartnerInfo;
