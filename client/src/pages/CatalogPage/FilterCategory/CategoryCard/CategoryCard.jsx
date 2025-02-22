import cl from './index.module.scss';
import { getProductsByCategory } from '@redux/products/service';
import { setCategory } from '@redux/filter/filterSlice';
import { useDispatch } from 'react-redux';

const CategoryCard = ({ item }) => {
  const dispatch = useDispatch();
  const getCategory = (value) => {
    dispatch(setCategory(value));
    dispatch(getProductsByCategory(value));
  };

  return (
    <li className={cl.categoryCard} id={item.id} onClick={(e) => getCategory(e.currentTarget.id)}>
      <figure>
        <img src="/logo.png" alt={item.name} />
        <figcaption>{item.name}</figcaption>
      </figure>
    </li>
  );
};
export default CategoryCard;
