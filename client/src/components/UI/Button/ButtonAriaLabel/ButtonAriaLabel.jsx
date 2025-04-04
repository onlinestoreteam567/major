import useTranslationNamespace from '@hooks/useTranslationNamespace';

const ButtonAriaLabel = ({ al, children, onClick, disabled }) => {
  const { getTranslation } = useTranslationNamespace('buttonAriaLable');

  return (
    <button onClick={onClick} type="button" aria-label={getTranslation(al)} disabled={disabled}>
      {children}
    </button>
  );
};
export default ButtonAriaLabel;
