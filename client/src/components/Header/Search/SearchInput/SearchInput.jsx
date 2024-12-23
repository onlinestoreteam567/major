import { useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cl from './index.module.scss';
import products from './productsExample';
import Overlay from '@UI/Overlay/Overlay';
import ProductResults from './ProductResults';
import NotFound from './NotFound';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';

function SearchInput({ inputValue, setInputValue, setIsShowInput, isDesktop }) {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [isHiddenInputAnimation, setIsHiddenInputAnimation] = useState(false);
  const inputRef = useRef();

  const handleInput = (e) => setInputValue(e.target.value);
  const handleInputFocus = () => setIsInputFocus(true);

  const handleClearInputValue = () => {
    setInputValue('');
    inputRef.current.focus();
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

  const { getTranslation } = useTranslationNamespace('header');
  return (
    <>
      {isDesktop && <Overlay handleClose={() => handleCloseWithDelay(setIsHiddenInputAnimation, setIsShowInput)} />}

      <search className={isHiddenInputAnimation ? cl.hiddenInput : ''}>
        <div className={inputValue && cl.activeSearch}>
          <input
            className={`${cl.searchInput} ${inputValue && cl.activeSearchInput} ${isInputFocus && cl.inputFocus}`}
            type="text"
            placeholder={getTranslation('searchInputPlaceholder')}
            onChange={handleInput}
            value={inputValue}
            onFocus={handleInputFocus}
            ref={inputRef}
          />

          {inputValue && <ButtonClose onClick={handleClearInputValue} />}

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
