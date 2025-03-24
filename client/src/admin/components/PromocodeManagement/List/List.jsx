import Spinner from '@components/helpers/Spinner';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPromocodeList, responsePromocodeList } from '../../../redux/selectors';

const List = () => {
  const items = useSelector(responsePromocodeList);
  const isLoading = useSelector(loadPromocodeList);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
          {items !== null &&
            items.map((promocode) => (
              <li key={promocode.id}>
                <p>Назва: {promocode.code}</p>
                <p>Відсоток знижки: {promocode.discount_percent}</p>
                <p>Термін дії закінчиться: {promocode.expires_at}</p>
                <p>Чи активний {promocode.is_active ? 'Так' : 'Ні'}</p>
                <Link to={`/admin/products/${promocode.id}`}>Редагувати</Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};
export default List;
