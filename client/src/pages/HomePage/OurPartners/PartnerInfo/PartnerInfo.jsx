import PropTypes from 'prop-types';
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
    }, 500);
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

PartnerInfo.propTypes = {
  setPartnerInteractionState: PropTypes.func.isRequired,
  informationAboutPartner: PropTypes.shape({
    title: PropTypes.string.isRequired,
    workSchedule: PropTypes.string.isRequired,
    workSchedule1: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    googleMapAddress: PropTypes.string.isRequired,
  }),
};
export default PartnerInfo;
