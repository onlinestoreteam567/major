import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import EmptyPage from '@components/helpers/EmptyPage';
import Spinner from '@components/helpers/Spinner';
import { filterCategory, loadCategories, selectCategories } from '@redux/selectors';
import { getProductsByCategory } from '@redux/products/service';
import { setCategory } from '@redux/filter/filterSlice';

export default function FilterByCategory() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadCategories);
  const items = useSelector(selectCategories);

  const category = useSelector(filterCategory);
  console.log('CATEGORY', category);

  const getCategory = (value) => {
    dispatch(setCategory(value));
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
              <li key={item.id} id={item.id} onClick={(e) => getCategory(e.currentTarget.id)}>
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
