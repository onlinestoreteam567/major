import { useEffect } from 'react';
import cl from './index.module.scss';
import ManagersList from './ManagersList/ManagersList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '@redux/admin/settings/service';
import { selectUsers } from '@redux/selectors';
import { Link } from 'react-router-dom';
import Button from '@components/UI/Button/Button';

const Settings = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const managers = users?.filter((employee) => employee.role === 2);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={cl.settings}>
      <div>
        <p>Менеджери ({managers?.length})</p>
        <Link to={`/admin/partners/create`}>
          <Button>Додати менеджера</Button>
        </Link>
      </div>

      <ManagersList managers={managers} />
    </div>
  );
};
export default Settings;
