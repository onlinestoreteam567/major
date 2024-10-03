import PropTypes from "prop-types";

const InformationAboutPartner = ({
  setShowInformationAboutPartner,
  informationAboutPartner,
  setCloseAnimation,
}) => {
  const handleCloseInput = () => {
    clearTimeout();
    setCloseAnimation(true);
    setTimeout(() => {
      setShowInformationAboutPartner(false);
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
        <a href={informationAboutPartner.googleMapAddress}>
          Відкрити Google Map
        </a>
      </button>
    </aside>
  );
};

InformationAboutPartner.propTypes = {
  setShowInformationAboutPartner: PropTypes.func.isRequired,
  setHiddenInformationAboutPartner: PropTypes.func.isRequired,
  hiddenInformationAboutPartner: PropTypes.bool.isRequired,
  informationAboutPartner: PropTypes.shape({
    title: PropTypes.string.isRequired,
    workSchedule: PropTypes.string.isRequired,
    workSchedule1: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    googleMapAddress: PropTypes.string.isRequired,
  }),
};
export default InformationAboutPartner;
