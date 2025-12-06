import DeletePopUp from '@components/admin/DeletePopUp/DeletePopUp';
import { clearTokens } from '@redux/admin/auth/authSlice';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

const LogOut = () => {
  const dispatch = useDispatch();
  const [isShowLogOutPopUp, setIsShowLogOutPopUp] = useState(false);
  const toggleDeletePopUp = () => setIsShowLogOutPopUp(!isShowLogOutPopUp);

  return (
    <>
      <button onClick={toggleDeletePopUp}>
        <img src="/images/admin/navigation/Exit icons.png" alt="Exit icon" />
        <span>Вихід</span>
      </button>

      {isShowLogOutPopUp &&
        ReactDOM.createPortal(
          <DeletePopUp closeDeletePopUp={toggleDeletePopUp} handleDelete={() => dispatch(clearTokens())}>
            Ви впевнені, що хочете вийти з акаунта?
          </DeletePopUp>,
          document.getElementById('protectedRoute')
        )}
    </>
  );
};

export default LogOut;
