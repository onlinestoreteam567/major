import { useState, useRef, useEffect } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import debouce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { getSearch } from '@redux/products/service';
import { clearSearchResults } from '@redux/products/searchSlice';
import SearchResults from './SearchResults/SearchResults';

function SearchInput({ isHiddenInputAnimation, handleCloseInput }) {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputFocus = () => setIsInputFocus(true);

  const handleClearInputValue = () => {
    setSearchTerm('');
    dispatch(clearSearchResults());
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

          {searchTerm && <SearchResults handleCloseInput={handleCloseInput} />}
        </div>
      </search>
    </>
  );
}

export default SearchInput;
