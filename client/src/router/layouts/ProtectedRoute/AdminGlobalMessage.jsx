import { useDispatch, useSelector } from 'react-redux';
import { clearAdminMessage } from '@redux/admin/adminMessageSlice';
import { useEffect } from 'react';
import AdminMessage from '@components/admin/AdminMessage/AdminMessage';

const AdminGlobalMessage = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.adminMessage.message);
  const onClear = useSelector((state) => state.adminMessage.onClear);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        if (onClear) onClear();
        dispatch(clearAdminMessage());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return message ? <AdminMessage>{message}</AdminMessage> : null;
};

export default AdminGlobalMessage;
