import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import { productSearchValue } from '@redux/admin/selectors';
import { filterProductsByName } from '@redux/products/listSlice';
import { setSearch } from '@redux/admin/search/adminProductSearchSlice/adminProductSearchSlice';

const Search = () => {
  const dispatch = useDispatch();
  const value = useSelector(productSearchValue);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    dispatch(setSearch(searchTerm));
    dispatch(filterProductsByName(searchTerm));
  };

  return (
    <search className={cl.search}>
      <input type="text" placeholder="пошук" value={value} onChange={handleChange} />
      <button>
        <img src="/svg/admin/search.svg" alt="search" />
      </button>
    </search>
  );
};

export default Search;
