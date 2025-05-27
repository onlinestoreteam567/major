import Button from '@components/UI/Button/Button';
import cl from './index.module.scss';
import Overlay from '@components/UI/Overlay/Overlay';

const DeletePopUp = ({ closeDeletePopUp }) => {
  return (
    <>
      <Overlay handleClose={closeDeletePopUp} />
      <div className={cl.deletePopUp}>
        <h2>Ви впевнені, що хочете видалити цей товар ?</h2>
        <div>
          <Button onClick={closeDeletePopUp} variant="secondary">
            Ні
          </Button>
          <Button onClick={closeDeletePopUp}>Так</Button>
        </div>
      </div>
    </>
  );
};
export default DeletePopUp;
