import { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import cl from './index.module.scss';
import Overlay from '@UI/Overlay/Overlay';
import ProductResults from './ProductResults';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { getSearch } from '@redux/products/service';

function SearchInput({ inputValue, setInputValue, setIsShowInput, isDesktop }) {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [isHiddenInputAnimation, setIsHiddenInputAnimation] = useState(false);
  const inputRef = useRef();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  // Debounced search function
  const handleSearch = useCallback(
    debounce((value) => {
      if (value.trim() === '') return;
      dispatch(getSearch(value));
    }, 500),
    [dispatch]
  );

  // Trigger search only if query is not empty
  useEffect(() => {
    if (query.trim() === '') {
      handleSearch.cancel(); // Cancel pending debounce calls
      return;
    }
    handleSearch(query);
  }, [query, handleSearch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleInputFocus = () => setIsInputFocus(true);

  const handleClearInputValue = () => {
    setQuery('');
    setInputValue('');
    handleSearch.cancel(); // Cancel debounce immediately when clearing input
    inputRef.current.focus();
  };

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
            onChange={handleChange}
            value={query}
            onFocus={handleInputFocus}
            ref={inputRef}
          />

          {query && <ButtonClose onClick={handleClearInputValue} />}

          <ProductResults />
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
