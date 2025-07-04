import cl from './index.module.scss';
import List from './PromocodeList/PromocodeList.jsx';
import { Link } from 'react-router-dom';

const PromocodeManagement = () => {
  return (
    <div className={cl.promocodeManagement}>
      <div>
        <Link className={cl.linkCreatePromo} to={`/admin/promocodes/create`}>
          Створити промо
        </Link>
      </div>
      <List />
    </div>
  );
};
export default PromocodeManagement;
