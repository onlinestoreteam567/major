import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import List from './PromocodeList/PromocodeList.jsx';
import PromocodeSelect from './PromocodeSelect/PromocodeSelect';

const PromocodeManagement = () => {
  return (
    <div className={cl.promocodeManagement}>
      <div>
        <p>Промокоди (30)</p>
        <Link to={`/admin/promocodes/create`}>Створити промо</Link>
        <PromocodeSelect />
      </div>

      <List />
    </div>
  );
};
export default PromocodeManagement;
