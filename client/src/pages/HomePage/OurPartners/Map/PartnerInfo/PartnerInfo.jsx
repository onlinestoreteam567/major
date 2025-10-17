import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
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
        <Heading type="h3">{getTranslation('workingHours')}:</Heading>
        <Heading type="h4">Пн - Пт: {informationAboutPartner.work_schedule_weekdays}</Heading>
        <Heading type="h4">Сб - Нд: {informationAboutPartner.work_schedule_weekends}</Heading>
      </section>
      <section>
        <Heading type="h3">{getTranslation('address')}:</Heading>
        <Heading type="h4">{informationAboutPartner.addres}</Heading>
      </section>
      <a className={cl.googleMapLink}
        href={informationAboutPartner.google_maps_link}
        rel="nofollow"
        target="_blank"
        aria-label={getTranslation('ariaLabelOpenGoogleMap')}
      >
        <Heading type="h3">{getTranslation('openGoogleMap')}</Heading>
      </a>
    </aside>
  );
};

export default PartnerInfo;
