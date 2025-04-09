import Spinner from '@components/helpers/Spinner';
import { reviewsByProductId } from '@redux/reviews/service';
import { loadProducts, selectProducts } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const ProductSelect = () => {
  const items = useSelector(selectProducts);
  const isLoading = useSelector(loadProducts);
  const dispatch = useDispatch();

  const handleChange = (event) => event.target.value && dispatch(reviewsByProductId(event.target.value));

  return isLoading ? (
    <Spinner />
  ) : (
    <select onChange={handleChange}>
      <option value="">Знайти відгуки за id товару</option>
      {items.map((value, idx) => (
        <option key={idx} value={value.id}>
          {value.name} id: {value.id}
        </option>
      ))}
    </select>
  );
};

export default ProductSelect;
