import cl from './index.module.scss';
import { fetchProductsAll, getProductsByCategory } from '@redux/products/service';
import { resetFilter, setCategory } from '@redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory } from '@redux/selectors';
import { useImageError } from '@hooks/useImageError';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const CategoryCard = ({ item }) => {
  const dispatch = useDispatch();
  const newCategory = useSelector(filterCategory);
  const { getTranslation } = useTranslationNamespace('common');

  const [imageSrc, handleError] = useImageError(item.image);

  const getCategory = (value) => {
    if (newCategory === value) {
      dispatch(resetFilter());
      dispatch(fetchProductsAll());
    } else {
      dispatch(setCategory(value));
      dispatch(getProductsByCategory(value));
    }
  };

  const imageAlt = `${getTranslation('image')}: ${item.name}`;
  return (
    <div className={cl.categoryCard} id={item.id}>
      <label>
        <figure>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={newCategory === item.id ? cl.active : ''}
            onError={handleError}
          />
          <figcaption>{item.name}</figcaption>
        </figure>
        <input
          type="checkbox"
          name="category"
          checked={newCategory === item.id}
          onChange={() => getCategory(item.id)}
        />
      </label>
    </div>
  );
};
export default CategoryCard;
