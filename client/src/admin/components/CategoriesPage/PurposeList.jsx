import Spinner from '@components/helpers/Spinner';
import cl from './index.module.scss';
import { loadCategories, selectCategories } from '@redux/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PurposeList = () => {
  const items = useSelector(selectCategories);
  const isLoading = useSelector(loadCategories);
  console.log(items);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={cl.list}>
          {items.map((category) => (
            <li key={category.id}>
              <p>{category.name}</p>
              <Link to={`/admin/purpose-categories/${category.id}`}>Редагувати</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default PurposeList;
