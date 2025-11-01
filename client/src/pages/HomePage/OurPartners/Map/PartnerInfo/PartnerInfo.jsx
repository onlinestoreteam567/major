import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import { useState, useEffect } from 'react';

const PartnerInfo = ({ informationAboutPartner, setInformationAboutPartner }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { getTranslation } = useTranslationNamespace('ourPartners');

  useEffect(() => {
    if (informationAboutPartner) {
      setIsVisible(true);
      setIsClosing(false);
    }
  }, [informationAboutPartner]);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      setInformationAboutPartner(null);
    }, 500);
  };

  if (!informationAboutPartner) return null;

  return (
    <aside
      className={`${cl.partnerInfo} ${isVisible ? cl.visible : ''} ${isClosing ? cl.hiddenAnimation : ''}`}
      onMouseLeave={handleClose}
    >
      <Heading type="h2">{informationAboutPartner.name}</Heading>

      <section className={cl.workScheduleSection}>
        <Heading type="h3">{getTranslation('workingHours')}:</Heading>
        <Heading type="h4">
          {getTranslation('workDays')}: {informationAboutPartner.work_schedule_weekdays}
        </Heading>
        <Heading type="h4">
          {getTranslation('weekendDays')}: {informationAboutPartner.work_schedule_weekends}
        </Heading>
      </section>

      <section className={cl.addressSection}>
        <Heading type="h3">{getTranslation('address')}:</Heading>
        <Heading type="h4">{informationAboutPartner.addres}</Heading>
      </section>

      <a
        className={cl.googleMapLink}
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
