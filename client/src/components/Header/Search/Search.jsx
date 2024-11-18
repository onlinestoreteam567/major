import cl from './index.module.scss';
import SearchInput from './SearchInput/SearchInput';

const Search = ({ setIsShowInput, inputValue, setInputValue, isDesktop }) => {
  const handleCloseSearch = () => setIsShowInput(false);

  return (
    <section className={cl.searchWrapper}>
      <section className={cl.topSection}>
        <p>Logo</p>
        <div>
          <img src="/svg/crossIcon.svg" alt="" onClick={handleCloseSearch} />
        </div>
      </section>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} isDesktop={isDesktop} />
    </section>
  );
};
export default Search;
