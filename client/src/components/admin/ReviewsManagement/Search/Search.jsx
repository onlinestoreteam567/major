import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import { useState, useMemo, useEffect } from 'react';
import { reviewsByProductId, reviewsGetAll } from '@redux/reviews/service';
import { selectFilteredProducts } from '@redux/selectors';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSelected, setIsSelected] = useState('');
  const dispatch = useDispatch();
  const allProducts = useSelector(selectFilteredProducts);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return [];
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return allProducts.filter(
      (product) =>
        product.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.product_name_en?.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.product_name_uk?.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, allProducts]);

  useEffect(() => {
    if (searchTerm === '' && isSelected === false) dispatch(reviewsGetAll());
  }, [searchTerm, isSelected, dispatch]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSelected(false);
  };

  const onProductSelect = (id, name) => {
    dispatch(reviewsByProductId(id));
    setIsSelected(true);
    setSearchTerm(name);
  };

  return (
    <search className={cl.search}>
      <div>
        <input placeholder="пошук" type="text" onChange={handleChange} value={searchTerm} />
        <button>
          <img src="/svg/admin/search.svg" alt="Search" />
        </button>
      </div>

      {!isSelected && searchTerm && filteredProducts.length > 0 && (
        <ul className={cl.searchResults}>
          {filteredProducts.map((product) => (
            <li key={product.id} onClick={() => onProductSelect(product.id, product.name)}>
              {product.name}
            </li>
          ))}
        </ul>
      )}

      {searchTerm && filteredProducts.length === 0 && (
        <p>За вашими критеріями пошуку нічого не знайдено. Спробуйте ще раз.</p>
      )}
    </search>
  );
};

export default Search;
