import cl from './index.module.scss';

const DeleteMessage = ({ children }) => {
  // if (!children) return null;

  return (
    <div className={cl.deleteMessage}>
      <p>{children}</p>
    </div>
  );
};
export default DeleteMessage;
