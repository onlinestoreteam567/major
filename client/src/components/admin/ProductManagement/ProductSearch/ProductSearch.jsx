import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import { productSearchValue } from '@redux/selectors';
import { filterProductsByName } from '@redux/products/listSlice';
import { setSearch } from '@redux/admin/search/adminProductSearchSlice';

const ProductSearch = () => {
  const dispatch = useDispatch();
  const value = useSelector(productSearchValue);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    dispatch(setSearch(searchTerm));
    dispatch(filterProductsByName(searchTerm));
  };

  return (
    <search className={cl.productSearch}>
      <input type="text" placeholder="пошук" value={value} onChange={handleChange} />
      <button>
        <img src="/svg/admin/search.svg" alt="search" />
      </button>
    </search>
  );
};

export default ProductSearch;
