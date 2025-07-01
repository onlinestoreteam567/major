import ReturnButton from '../ReturnButton/ReturnButton';
import cl from './index.module.scss';
import List from './PromocodeList/PromocodeList.jsx';
import { Link } from 'react-router-dom';

const PromocodeManagement = () => {
  return (
    <div className={cl.promocodeManagement}>
      <div>
        <Link to={`/admin/promocodes/create`}>Створити промо</Link>
        <ReturnButton />;
      </div>
      <List />
    </div>
  );
};
export default PromocodeManagement;
