import cl from './index.module.scss';

const SuccessMessage = ({ children }) => {
  return <p className={cl.successMessage}>{children}</p>;
};

export default SuccessMessage;
