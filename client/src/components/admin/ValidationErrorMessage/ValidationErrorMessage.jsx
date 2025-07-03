import cl from './index.module.scss';

const ValidationErrorMessage = ({ children }) => {
  return <p className={cl.validationErrorMessage}>{children}</p>;
};
export default ValidationErrorMessage;
