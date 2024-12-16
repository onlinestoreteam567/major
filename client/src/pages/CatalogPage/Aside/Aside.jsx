import cl from './index.module.scss';

const Aside = ({ children, handleSubmit }) => {
  return (
    <aside className={cl.aside}>
      <form action="" onSubmit={handleSubmit}>
        {children}
      </form>
    </aside>
  );
};

export default Aside;
