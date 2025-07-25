import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import { useState, useMemo, useEffect } from 'react';
import { reviewsByProductId, reviewsGetAll } from '@redux/reviews/service';
import { selectFilteredProducts } from '@redux/selectors';
import { setSearch } from '@redux/admin/search/adminReviewsSearchSlice/adminReviewsSearchSlice';
import { reviewsSearchValue } from '@redux/admin/selectors';

const Search = () => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const allProducts = useSelector(selectFilteredProducts);
  const searchValue = useSelector(reviewsSearchValue);

  const filteredProducts = useMemo(() => {
    if (!searchValue) return [];
    const lowerCaseSearchTerm = searchValue.toLowerCase();
    return allProducts.filter(
      (product) =>
        product.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.product_name_en?.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.product_name_uk?.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.article?.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchValue, allProducts]);

  useEffect(() => {
    if (searchValue === '' && isSelected === false) {
      dispatch(reviewsGetAll());
    }
  }, [searchValue, isSelected, dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setIsSelected(false);
    dispatch(setSearch(value));
  };

  const onProductSelect = (id, name) => {
    dispatch(reviewsByProductId(id));
    setIsSelected(true);
    dispatch(setSearch(name));
  };

  return (
    <search className={cl.search}>
      <div>
        <input placeholder="пошук" type="text" onChange={handleChange} value={searchValue} />
        <button>
          <img src="/svg/admin/search.svg" alt="Search" />
        </button>
      </div>

      {!isSelected && searchValue && filteredProducts.length > 0 && (
        <ul className={cl.searchResults}>
          {filteredProducts.map((product) => (
            <li key={product.id} onClick={() => onProductSelect(product.id, product.name)}>
              {product.name}
            </li>
          ))}
        </ul>
      )}

      {searchValue && filteredProducts.length === 0 && (
        <p>За вашими критеріями пошуку нічого не знайдено. Спробуйте ще раз.</p>
      )}
    </search>
  );
};

export default Search;
