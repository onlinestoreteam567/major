import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Burger = ({ onClick, fillColor }) => {
  const { getTranslation } = useTranslationNamespace('header');

  return (
    <button onClick={onClick} type="button" aria-label={getTranslation('ariaLabelBurger')}>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 5H21" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5312 12H21.0013" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 19H21" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};
export default Burger;
