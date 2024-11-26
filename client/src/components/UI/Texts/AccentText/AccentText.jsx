import cl from './index.module.scss';

const AccentText = ({ children }) => {
  return <p className={cl.accentText}>{children}</p>;
};
export default AccentText;
