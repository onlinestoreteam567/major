import PropTypes from "prop-types";

const UaIcon = ({ fillColor, setIsLanguageDefault }) => {
  const handleLanguageChangeOnClick = () => {
    setIsLanguageDefault(false);
  };

  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleLanguageChangeOnClick}
    >
      <path
        d="M4.094 15.198C3.014 15.198 2.174 15 1.574 14.604C0.974 14.208 0.56 13.644 0.332 12.912C0.104 12.18 -0.00999994 11.304 -0.00999994 10.284V0.419999H2.582V10.59C2.582 11.046 2.612 11.478 2.672 11.886C2.732 12.282 2.87 12.606 3.086 12.858C3.314 13.098 3.65 13.218 4.094 13.218C4.562 13.218 4.898 13.098 5.102 12.858C5.318 12.606 5.456 12.282 5.516 11.886C5.588 11.478 5.624 11.046 5.624 10.59V0.419999H8.198V10.284C8.198 11.304 8.084 12.18 7.856 12.912C7.628 13.644 7.214 14.208 6.614 14.604C6.026 15 5.186 15.198 4.094 15.198ZM10.8898 15L13.8058 0.419999H16.6498L19.5658 15H17.0998L16.5238 11.634H13.9858L13.3918 15H10.8898ZM14.2558 9.942H16.2358L15.2458 3.822L14.2558 9.942Z"
        fill={fillColor}
      />
    </svg>
  );
};

UaIcon.propTypes = {
  fillColor: PropTypes.string.isRequired,
  setIsLanguageDefault: PropTypes.func.isRequired,
};
export default UaIcon;
