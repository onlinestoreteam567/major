import { useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cl from './index.module.scss';
import hryvniaSymbol from '../../../assets/svg/hryvnia.svg';
import products from './productsExample';

function SearchInput({ setIsShowInput, inputValue, setInputValue }) {
  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleCloseInput = () => {
    clearTimeout();
    setTimeout(() => {
      setIsShowInput(false);
    }, 500);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocus(true);
  };

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        if (inputValue !== '' && inputValue.charAt(0) !== ' ') {
          return product.name.toLowerCase().includes(inputValue.toLowerCase());
        }
      }),
    [inputValue]
  );

  return (
    <search onMouseLeave={handleCloseInput}>
      <div className={inputValue && cl.activeSearch}>
        <input
          className={`${cl.searchInput} ${inputValue && cl.activeSearchInput} ${isInputFocus && cl.inputFocus}`}
          type="text"
          placeholder="Я шукаю..."
          onChange={handleInput}
          value={inputValue}
          onFocus={handleInputFocus}
        />

        {inputValue && filteredProducts.length > 0 ? (
          <section className={cl.searchResultsSection}>
            <hr />
            <ul>
              {filteredProducts.slice(0, 3).map((product) => (
                <li key={product.id} className={cl.searchResultItem}>
                  <a href=" ">
                    <img src={product.urlImg} alt={product.name} />
                  </a>
                  <section className={cl.searchResultInfo}>
                    <a href="">
                      <p className={cl.productName}>{product.name}</p>
                    </a>
                    <br />
                    <p className={cl.productPrice}>
                      {product.price} <img src={hryvniaSymbol} alt="Hryvnia symbol" className={cl.hryvniaSymbol} />
                    </p>
                  </section>
                </li>
              ))}

              {filteredProducts.length >= 3 && (
                <a className={cl.showAll} href=" ">
                  Показати всі результати пошуку
                </a>
              )}
            </ul>
          </section>
        ) : (
          inputValue && (
            <section className={cl.searchNotFound}>
              <p>Товарів не знайдено</p>
            </section>
          )
        )}
      </div>
    </search>
  );
}

SearchInput.propTypes = {
  setIsShowInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default SearchInput;
