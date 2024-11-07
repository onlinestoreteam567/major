import PropTypes from 'prop-types';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@components/UI/Heading/Heading';
const InformationAboutPartner = ({ informationAboutPartner, setPartnerInteractionState }) => {
  const handleUnmountComponent = () => {
    clearTimeout();
    setPartnerInteractionState((prev) => ({ ...prev, closeAnimation: true, activePartner: null }));
    setTimeout(() => {
      setPartnerInteractionState((prev) => ({ ...prev, showInformationAboutPartner: false }));
    }, 500);
  };

  const { getTranslation } = useTranslationNamespace('ourPartners');

  return (
    <aside onMouseLeave={handleUnmountComponent}>
      <h3>{informationAboutPartner.title}</h3>
      <section className={cl.workScheduleSection}>
        <Heading type="h3">{getTranslation('workingHours')}</Heading>
        <p>{informationAboutPartner.workSchedule}</p>
        <p>{informationAboutPartner.workSchedule1}</p>
      </section>
      <section>
        <Heading type="h3">{getTranslation('address')}</Heading>
        <br />
        <p>{informationAboutPartner.address}</p>
      </section>
      <button>
        <a href={informationAboutPartner.googleMapAddress}>{getTranslation('openGoogleMap')}</a>
      </button>
    </aside>
  );
};

InformationAboutPartner.propTypes = {
  setPartnerInteractionState: PropTypes.func.isRequired,
  informationAboutPartner: PropTypes.shape({
    title: PropTypes.string.isRequired,
    workSchedule: PropTypes.string.isRequired,
    workSchedule1: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    googleMapAddress: PropTypes.string.isRequired,
  }),
};
export default InformationAboutPartner;
