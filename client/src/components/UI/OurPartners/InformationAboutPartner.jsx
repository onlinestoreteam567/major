import PropTypes from 'prop-types';

const InformationAboutPartner = ({ informationAboutPartner, setPartnerInteractionState }) => {
  const handleCloseInput = () => {
    clearTimeout();
    setPartnerInteractionState((prev) => ({ ...prev, closeAnimation: true, activePartner: null }));
    setTimeout(() => {
      setPartnerInteractionState((prev) => ({ ...prev, showInformationAboutPartner: true }));
    }, 500);
  };

  return (
    <aside onMouseLeave={handleCloseInput}>
      <h3>{informationAboutPartner.title}</h3>
      <section>
        <h4>Графік роботи:</h4>
        <br />
        <p>{informationAboutPartner.workSchedule}</p>
        <p>{informationAboutPartner.workSchedule1}</p>
      </section>
      <section>
        <h4>Адреса:</h4>
        <br />
        <p>{informationAboutPartner.address}</p>
      </section>
      <button>
        <a href={informationAboutPartner.googleMapAddress}>Відкрити Google Map</a>
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
