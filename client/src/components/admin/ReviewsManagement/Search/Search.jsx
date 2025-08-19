import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import { useState, useEffect } from 'react';
import { reviewsGetAll } from '@redux/reviews/service';
import { setSearch } from '@redux/admin/search/adminReviewsSearchSlice/adminReviewsSearchSlice';
import { reviewsSearchValue } from '@redux/admin/selectors';
import { filterReviewByName } from '@redux/reviews/reviewsSlice';

const Search = () => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const searchValue = useSelector(reviewsSearchValue);

  useEffect(() => {
    if (searchValue === '' && isSelected === false) {
      dispatch(reviewsGetAll());
    }
  }, [searchValue, isSelected, dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setIsSelected(false);
    dispatch(setSearch(value));
    console.log(value);
    dispatch(filterReviewByName(value));
  };

  return (
    <search className={cl.search}>
      <div>
        <input placeholder="пошук" type="text" onChange={handleChange} value={searchValue} />
        <button>
          <img src="/svg/admin/search.svg" alt="Search" />
        </button>
      </div>
    </search>
  );
};

export default Search;
