import Spinner from '@UI/Spinner/Spinner';
import { loadProductId, loadProducts, selectProductId, selectProducts } from '@redux/selectors';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import CustomSelect from '@components/admin/CustomSelect/CustomSelect';
import { getProductById } from '@redux/products/service';

const BannerProductSelect = ({ control, errors, watch }) => {
  let productId;
  const dispatch = useDispatch();
  const items = useSelector(selectProducts);
  const isLoading = useSelector(loadProducts);
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const isLoadingGetProduct = useSelector(loadProductId);
  const responseGetProduct = useSelector(selectProductId);
  const name = 'product_id';

  if (watch) productId = watch(name);

  useEffect(() => {
    if (productId) dispatch(getProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (responseGetProduct && responseGetProduct.name) setInputValue(responseGetProduct.name);
  }, [responseGetProduct]);

  useEffect(() => {
    setFilteredProducts(items);
  }, [items]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    const searchTerm = e.target.value.toLowerCase().trim();

    if (!searchTerm) {
      setFilteredProducts(items);
      setIsShowSelect(false);
      return;
    }

    const newFilteredProducts = items.filter((product) => {
      const lowerCaseSearchTerm = searchTerm;

      const nameMatch = product.name?.toLowerCase().includes(lowerCaseSearchTerm);
      const articleMatch = product.article?.toLowerCase().includes(lowerCaseSearchTerm);

      setIsShowSelect(true);
      return nameMatch || articleMatch;
    });

    setFilteredProducts(newFilteredProducts);
  };

  const customFunction = (productName) => {
    setInputValue(productName);
    setIsShowSelect(false);
  };

  return isLoading || isLoadingGetProduct ? (
    <Spinner />
  ) : (
    <div className={cl.bannerProductSearch}>
      <h2>Товар:</h2>

      <search className={errors && errors[name] && cl.error}>
        <input type="text" placeholder="пошук" onChange={handleChange} value={inputValue} />
        <button>
          <img src="/svg/admin/search.svg" alt="search" />
        </button>
      </search>

      {isShowSelect && (
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange, onBlur, ...field } }) => (
            <div className={cl.customSelectWrapper}>
              <select
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                id={name}
                {...field}
              >
                <option value="">Обрати</option>
                {filteredProducts.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>

              <CustomSelect
                onChange={onChange}
                value={value}
                items={filteredProducts}
                onBlur={onBlur}
                name={name}
                errors={errors}
                customFunction={customFunction}
              />
            </div>
          )}
        />
      )}
    </div>
  );
};

export default BannerProductSelect;
