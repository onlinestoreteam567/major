import { useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cl from './index.module.scss';
import hryvniaSymbol from '../../../assets/svg/hryvnia.svg';
import products from './productsExample';
import crossIcon from '../../../assets/svg/crossIcon.svg';
import Overlay from '../Overlay/Overlay';
import { Link } from 'react-router-dom';

function SearchInput({ inputValue, setInputValue, setIsShowInput }) {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [isHiddenInputAnimation, setIsHiddenInputAnimation] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocus(true);
  };

  const inputRef = useRef();
  const handleClearInputValue = () => {
    setInputValue('');
    inputRef.current.focus();
  };

  const handleCloseInputAnimation = () => {
    setIsHiddenInputAnimation(true);
    clearTimeout();
    setTimeout(() => {
      setIsShowInput(false);
    }, 275);
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
    <>
      <Overlay handleClose={handleCloseInputAnimation} />

      <search className={isHiddenInputAnimation && cl.hiddenInput}>
        <div className={inputValue && cl.activeSearch}>
          <input
            className={`${cl.searchInput} ${inputValue && cl.activeSearchInput} ${isInputFocus && cl.inputFocus}`}
            type="text"
            placeholder="Я шукаю..."
            onChange={handleInput}
            value={inputValue}
            onFocus={handleInputFocus}
            ref={inputRef}
          />

          {inputValue && (
            <img src={crossIcon} alt="Cross icon" className={cl.crossIcon} onClick={handleClearInputValue} />
          )}

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
                <hr />
                <p>Товарів не знайдено</p>
                <Link to="catalog">Перейти до каталогу</Link>
              </section>
            )
          )}
        </div>
      </search>
    </>
  );
}

SearchInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default SearchInput;
