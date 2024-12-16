import cl from './index.module.scss';

const Aside = ({ children }) => {
  return (
    <aside className={cl.aside}>
      <form action="">{children}</form>
    </aside>
  );
};

export default Aside;
