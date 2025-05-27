import cl from './index.module.scss';

const Search = () => {
  return (
    <search className={cl.search}>
      <input placeholder="пошук" type="text" />
      <button>
        <img src="/svg/admin/search.svg" />
      </button>
    </search>
  );
};
export default Search;
