import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import List from './PromocodeList/PromocodeList.jsx';
import PromocodeSelect from './PromocodeSelect/PromocodeSelect';
import { useDispatch, useSelector } from 'react-redux';
import { responsePromocodeList } from '@redux/selectors';
import { useEffect } from 'react';
import { fetchPromocode } from '@redux/admin/promocode/service';

const PromocodeManagement = () => {
  const items = useSelector(responsePromocodeList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPromocode());
  }, [dispatch]);

  return (
    <div className={cl.promocodeManagement}>
      <div>
        <p>Промокоди ({items ? items.length : 0})</p>
        <Link to={`/admin/promocodes/create`}>Створити промо</Link>
        <PromocodeSelect />
      </div>

      <div>
        <p>Назва</p>
        <p>Активність</p>
        <p>Термін дії</p>
        <p>Початок</p>
        <p>Кінець</p>
        <p>Знижка</p>
      </div>
      <List />
    </div>
  );
};

export default PromocodeManagement;
