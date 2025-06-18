import Button from '@components/UI/Button/Button';
import cl from './index.module.scss';
import Overlay from '@components/UI/Overlay/Overlay';

const DeletePopUp = ({ closeDeletePopUp, handleDelete, setDeletedItemName, children }) => {
  return (
    <>
      <Overlay handleClose={closeDeletePopUp} />
      <div className={cl.deletePopUp}>
        <h2>{children}</h2>

        <div className={cl.buttons}>
          <Button onClick={closeDeletePopUp} variant="secondary">
            Ні
          </Button>
          <Button
            onClick={() => {
              handleDelete();
              closeDeletePopUp();
              setDeletedItemName();
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
