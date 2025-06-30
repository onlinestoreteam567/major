import { useState, useRef, useEffect } from 'react';
import cl from './index.module.scss';
import Overlay from '@UI/Overlay/Overlay';
import ProductResults from './ProductResults';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import debouce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { getSearch } from '@redux/products/service';
import { clearSearchResults } from '@redux/products/searchSlice';

function SearchInput({ setIsShowInput, isDesktop }) {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [isHiddenInputAnimation, setIsHiddenInputAnimation] = useState(false);
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputFocus = () => setIsInputFocus(true);
  const handleCloseInput = () => handleCloseWithDelay(setIsHiddenInputAnimation, setIsShowInput);
  const handleClearInputValue = () => {
    setSearchTerm('');
    dispatch(clearSearchResults()); // Clear search results when input is cleared
    inputRef.current.focus();
  };

  const { getTranslation } = useTranslationNamespace('header');

  useEffect(() => {
    const debouncedSearch = debouce(() => {
      if (searchTerm.trim().length >= 3) {
        dispatch(getSearch(searchTerm.trim()));
      } else {
        dispatch(clearSearchResults());
      }
    }, 1000);

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, dispatch]);

  return (
    <>
      {isDesktop && <Overlay handleClose={handleCloseInput} />}

      <search className={`${cl.search} ${isHiddenInputAnimation ? cl.hiddenInput : ''}`}>
        <div className={searchTerm && cl.activeSearch}>
          <input
            className={`${cl.searchInput} ${searchTerm && cl.activeSearchInput} ${isInputFocus && cl.inputFocus}`}
            type="text"
            placeholder={getTranslation('searchInputPlaceholder')}
            onChange={handleChange}
            onFocus={handleInputFocus}
            ref={inputRef}
            value={searchTerm}
          />

          {searchTerm && <ButtonClose onClick={handleClearInputValue} ariaLabel="ariaLabelSearchInput" />}

          {searchTerm && <ProductResults handleCloseInput={handleCloseInput} />}
        </div>
      </search>
    </>
  );
}

export default SearchInput;
