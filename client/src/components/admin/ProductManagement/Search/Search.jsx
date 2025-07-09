import { filterProductsByName } from '@redux/products/listSlice';
import { useDispatch } from 'react-redux';
import cl from './index.module.scss';

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchTerm = event.target.value;

    dispatch(filterProductsByName(searchTerm));
  };

  return (
    <search className={cl.search}>
      <input placeholder="пошук" type="text" onChange={handleSearch} />
      <button>
        <img src="/svg/admin/search.svg" />
      </button>
    </search>
  );
};
export default Search;
