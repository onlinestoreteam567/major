import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import Button from '@UI/Button/Button';
const PartnerInfo = ({ informationAboutPartner, setPartnerInteractionState }) => {
  const handleUnmountComponent = () => {
    clearTimeout();
    setPartnerInteractionState((prev) => ({ ...prev, closeAnimation: true, activePartner: null }));
    setTimeout(() => {
      setPartnerInteractionState((prev) => ({ ...prev, showInformationAboutPartner: false }));
    }, 275);
  };

  const { getTranslation } = useTranslationNamespace('ourPartners');

  return (
    <aside onMouseLeave={handleUnmountComponent} className={cl.partnerInfo}>
      <Heading type="h2">{informationAboutPartner.title}</Heading>
      <section className={cl.workScheduleSection}>
        <Heading type="h3">{getTranslation('workingHours')}</Heading>
        <Heading type="h4">{informationAboutPartner.workSchedule}</Heading>
        <Heading type="h4">{informationAboutPartner.workSchedule1}</Heading>
      </section>
      <section>
        <Heading type="h3">{getTranslation('address')}</Heading>
        <br />
        <Heading type="h4">{informationAboutPartner.address}</Heading>
      </section>
      <Button variant="secondary">
        <a href={informationAboutPartner.googleMapAddress}>
          <Heading type="h3">{getTranslation('openGoogleMap')}</Heading>
        </a>
      </Button>
    </aside>
  );
};

export default PartnerInfo;
