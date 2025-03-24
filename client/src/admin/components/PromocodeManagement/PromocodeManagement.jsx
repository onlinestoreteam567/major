import cl from './index.module.scss';
import List from './List/List.jsx';
import { Link } from 'react-router-dom';

const PromocodeManagement = () => {
  return (
    <div className={cl.promocodeManagement}>
      <div>
        <Link to={`/admin/promocodes/create`}>+</Link>
      </div>
      <List />
    </div>
  );
};
export default PromocodeManagement;
