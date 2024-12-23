import cl from './index.module.scss';

const Aside = ({ children, handleSubmit }) => {
  return (
    <aside className={cl.aside}>
      <form onSubmit={handleSubmit}>
        {children}
        <button type="submit">Вивести дані в консоль (заглушка)</button>
      </form>
    </aside>
  );
};

export default Aside;
