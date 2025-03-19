import Spinner from '@components/helpers/Spinner';
import cl from './index.module.scss';
import { loadTypes, selectTypes } from '@redux/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TypeList = () => {
  const items = useSelector(selectTypes);
  const isLoading = useSelector(loadTypes);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
          {items.map((type) => (
            <li key={type.id}>
              <p>{type.name}</p>
              <Link to={`/admin/type/${type.id}`}>Редагувати</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default TypeList;
