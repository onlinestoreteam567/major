import cl from './index.module.scss';

const Aside = ({ children }) => {
  return <aside className={cl.aside}>{children}</aside>;
};

export default Aside;
