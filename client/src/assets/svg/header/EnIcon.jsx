import PropTypes from 'prop-types';
import { changeLanguage } from '@utils/changeLanguage';

const EnIcon = ({ fillColor, setIsLanguageDefault }) => {
  const handleLanguageChangeOnClick = () => {
    setIsLanguageDefault(true);
    changeLanguage('ua');
  };

  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleLanguageChangeOnClick}
    >
      <path
        d="M0.0980001 15V0.419999H6.218V2.292H2.762V6.486H5.48V8.34H2.762V13.164H6.254V15H0.0980001ZM9.23722 15V0.419999H11.0912L14.6372 8.736V0.419999H16.8332V15H15.0692L11.5052 6.288V15H9.23722Z"
        fill={fillColor}
      />
    </svg>
  );
};

EnIcon.propTypes = {
  fillColor: PropTypes.string.isRequired,
  setIsLanguageDefault: PropTypes.func.isRequired,
};
export default EnIcon;
