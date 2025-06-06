import Button from '@components/UI/Button/Button';
import cl from './index.module.scss';
import Overlay from '@components/UI/Overlay/Overlay';

const DeletePopUp = ({
  closeDeletePopUp,
  handleDelete,
  itemId,
  itemName,
  setDeletedItemName,
  confirmText = 'Ви впевнені, що хочете видалити цей елемент?',
  children,
}) => {
  return (
    <>
      <Overlay handleClose={closeDeletePopUp} />
      <div className={cl.deletePopUp}>
        <h2>{confirmText}</h2>
        {children && <div className={cl.customContent}>{children}</div>}

         <div className={cl.buttons}>
          <Button onClick={closeDeletePopUp} variant="secondary">
            Ні
          </Button>
          <Button
            onClick={() => {
              handleDelete(itemId);
              closeDeletePopUp();
              if (setDeletedItemName) setDeletedItemName(itemName);
            }}
          >
            Так
          </Button>
        </div>
      </div>
    </>
  );
};
export default DeletePopUp;
