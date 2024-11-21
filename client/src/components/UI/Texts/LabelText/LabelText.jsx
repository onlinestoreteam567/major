import cl from './index.module.scss';

const LabelText = ({ children }) => {
  return <p className={cl.labelText}>{children}</p>;
};
export default LabelText;
