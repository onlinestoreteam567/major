import { useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cl from './index.module.scss';
import products from './productsExample';
import crossIcon from '@assets/svg/crossIcon.svg';
import Overlay from '@UI/Overlay/Overlay';
import ProductResults from './ProductResults';
import NotFound from './NotFound';

function SearchInput({ inputValue, setInputValue, setIsShowInput, isDesktop }) {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [isHiddenInputAnimation, setIsHiddenInputAnimation] = useState(false);
  const inputRef = useRef();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocus(true);
  };

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
      {!isDesktop && <Overlay handleClose={handleCloseInputAnimation} />}

      <search className={isHiddenInputAnimation ? cl.hiddenInput : ''}>
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
            <ProductResults products={filteredProducts.slice(0, 3)} />
          ) : (
            inputValue && <NotFound />
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
