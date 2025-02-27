import cl from './index.module.scss';
import { fetchProductsAll, getProductsByCategory } from '@redux/products/service';
import { resetFilter, setCategory } from '@redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory } from '@redux/selectors';

const CategoryCard = ({ item }) => {
  const dispatch = useDispatch();
  const newCategory = useSelector(filterCategory);

  const getCategory = (value) => {
    if (newCategory === value) {
      dispatch(resetFilter());
      dispatch(fetchProductsAll());
    } else {
      dispatch(setCategory(value));
      dispatch(getProductsByCategory(value));
    }
  };

  return (
    <li className={cl.categoryCard} id={item.id}>
      <label>
        <figure>
          <img src={item.image} alt={item.name} className={newCategory === item.id ? cl.active : ''} />
          <figcaption>{item.name}</figcaption>
        </figure>
        <input
          type="checkbox"
          name="category"
          checked={newCategory === item.id}
          onChange={() => getCategory(item.id)}
        />
      </label>
    </li>
  );
};
export default CategoryCard;
