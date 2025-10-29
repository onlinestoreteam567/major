import { loadSearch, selectSearch } from '@redux/selectors';
import cl from './index.module.scss';
import Spinner from '@UI/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import SearchNotFound from './SearchNotFound/SearchNotFound';
import { Link } from 'react-router-dom';
import { resetFilter } from '@redux/filter/filterSlice';
import { setProducts } from '@redux/products/listSlice';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useEffect, useRef } from 'react';
import SearchResultItem from './SearchResultItem/SearchResultItem';

const SearchResults = ({ handleCloseInput }) => {
  const isLoading = useSelector(loadSearch);
  const products = useSelector(selectSearch);
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('search');
  const showAllLinkRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && products && products.length > 3 && showAllLinkRef.current) {
        showAllLinkRef.current.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [products]);

  if (products === null) return;
  const showOnlyFirstThree = products.slice(0, 3);

  const addSearchResultsToCatalog = () => {
    dispatch(resetFilter());
    dispatch(setProducts(products));
    handleCloseInput();
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={cl.searchResults}>
      <hr />
      {products.length === 0 ? (
        <SearchNotFound handleCloseInput={handleCloseInput} />
      ) : (
        <ul>
          {showOnlyFirstThree.map((product) => (
            <SearchResultItem key={product.id} product={product} handleCloseInput={handleCloseInput} />
          ))}
        </ul>
      )}
      {products.length <= 3 && products.length > 0 && (
        <Link
          className={cl.showAll}
          to="/catalog"
          aria-label={getTranslation('goToCatalog')}
          onClick={() => addSearchResultsToCatalog()}
        >
          {getTranslation('searchResultsComplete')}
          <br /> <br />
          {getTranslation('goToCatalog')}
        </Link>
      )}
      {products.length > 3 && (
        <Link
          ref={showAllLinkRef}
          className={cl.showAll}
          to="/catalog"
          aria-label={getTranslation('ariaLabelShowAll')}
          onClick={() => addSearchResultsToCatalog()}
        >
          {getTranslation('showAll')}
        </Link>
      )}
    </div>
  );
};

export default SearchResults;
