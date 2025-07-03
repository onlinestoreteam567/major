import Button from '@components/UI/Button/Button';
import Overlay from '@components/UI/Overlay/Overlay';
import cl from './index.module.scss';

const DeletePopUp = ({ closeDeletePopUp, handleDelete, children }) => {
  return (
    <>
      <Overlay handleClose={() => closeDeletePopUp()} />
      <div className={cl.deletePopUp}>
        <h2>{children}</h2>

        <div className={cl.buttons}>
          <Button onClick={() => closeDeletePopUp()} variant="secondary">
            Ні
          </Button>
          <Button
            onClick={() => {
              handleDelete();
              closeDeletePopUp();
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
