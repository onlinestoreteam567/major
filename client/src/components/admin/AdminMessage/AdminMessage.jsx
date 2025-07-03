import cl from './index.module.scss';

const AdminMessage = ({ children }) => {
  return (
    <div className={cl.adminMessage}>
      <p>{children}</p>
    </div>
  );
};
export default AdminMessage;
