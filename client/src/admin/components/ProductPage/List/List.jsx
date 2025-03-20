import Spinner from '@components/helpers/Spinner';
import cl from './index.module.scss';
import { loadProducts, selectProducts } from '@redux/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const List = () => {
  const items = useSelector(selectProducts);
  const isLoading = useSelector(loadProducts);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
          {items.map((card) => (
            <li key={card.id}>
              <p>{card.name}</p>
              <Link to={`/admin/products/${card.id}`}>Редагувати</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default List;
