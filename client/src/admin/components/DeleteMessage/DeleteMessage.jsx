import cl from './index.module.scss';

const DeleteMessage = ({ deletedItemName }) => {
  return (
    <div className={cl.deleteMessage}>
      <p>Товар “{deletedItemName}” видалено</p>
    </div>
  );
};
export default DeleteMessage;
