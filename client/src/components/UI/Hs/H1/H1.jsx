import cl from './index.module.scss';

const H1 = ({ children }) => {
  return <h1 className={cl.h1}>{children}</h1>;
};
export default H1;
