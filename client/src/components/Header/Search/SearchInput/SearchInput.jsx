import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cl from './index.module.scss';
import Overlay from '@UI/Overlay/Overlay';
import ProductResults from './ProductResults';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import debouce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { getSearch } from '@redux/products/service';

function SearchInput({ setIsShowInput, isDesktop }) {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [isHiddenInputAnimation, setIsHiddenInputAnimation] = useState(false);
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const debouncedSearch = debouce(() => {
      if (searchTerm.trim() !== '') {
        dispatch(getSearch(searchTerm.trim()));
      }
    }, 1000);

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, dispatch]);

  const handleInputFocus = () => setIsInputFocus(true);

  const handleClearInputValue = () => {
    setSearchTerm('');
    inputRef.current.focus();
  };

  const { getTranslation } = useTranslationNamespace('header');

  return (
    <>
      {isDesktop && <Overlay handleClose={() => handleCloseWithDelay(setIsHiddenInputAnimation, setIsShowInput)} />}

      <search className={isHiddenInputAnimation ? cl.hiddenInput : ''}>
        <div className={searchTerm && cl.activeSearch}>
          <input
            className={`${cl.searchInput} ${searchTerm && cl.activeSearchInput} ${isInputFocus && cl.inputFocus}`}
            type="text"
            placeholder={getTranslation('searchInputPlaceholder')}
            onChange={handleChange}
            onFocus={handleInputFocus}
            ref={inputRef}
          />

          {searchTerm && <ButtonClose onClick={handleClearInputValue} />}

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
