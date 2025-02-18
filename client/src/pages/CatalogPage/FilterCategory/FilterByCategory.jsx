import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import EmptyPage from '@components/helpers/EmptyPage';
import Spinner from '@components/helpers/Spinner';
import { loadCategories, selectCategories } from '@redux/selectors';
import { getProductsByCategory } from '@redux/products/service';

export default function FilterByCategory() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadCategories);
  const items = useSelector(selectCategories);

  const getCategory = (value) => {
    // console.dir(value);
    dispatch(getProductsByCategory(value));
  };

  const showArr = Array.isArray(items) && items.length !== 0;
  return (
    <div className={cl.wrap}>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={cl.wrap}>
          {showArr ? (
            items.map((item) => (
              <li key={item.id} value={item.id} onClick={(e) => getCategory(e.currentTarget.value)}>
                <figure className={cl.catalogCardFigure}>
                  <img src="/logo.png" alt={item.name} />
                  <figcaption>{item.name}</figcaption>
                </figure>
              </li>
            ))
          ) : (
            <EmptyPage message="Не знайдено" />
          )}
        </ul>
      )}
    </div>
  );
}
