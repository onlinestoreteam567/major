import cl from './index.module.scss';

const Aside = ({ children, handleSubmit }) => {
  return (
    <aside className={cl.aside}>
      <form onSubmit={handleSubmit}>
        {children}
        <button type="submit">Submit</button>
      </form>
    </aside>
  );
};

export default Aside;
