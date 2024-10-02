import { useMemo } from "react";
import PropTypes from "prop-types";
import cl from "./index.module.scss";
import hryvniaSymbol from "../../../assets/svg/hryvnia.svg";

// Array of products example
const products = [
  {
    id: 1,
    name: "Флюїд-шовк для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/1.png",
    price: "299",
  },

  {
    id: 2,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 3,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 4,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 5,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
  {
    id: 6,
    name: "Крем-сироватка для тонкого волосся",
    urlImg: "/src/assets/png/searchInput/2.png",
    price: "299",
  },
];

function SearchInput({ setIsShowInput, inputValue, setInputValue }) {
  const handleCloseInput = () => {
    clearTimeout();
    setTimeout(() => {
      setIsShowInput(false);
    }, 500);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        if (inputValue !== "" && inputValue.charAt(0) !== " ") {
          return product.name.toLowerCase().includes(inputValue.toLowerCase());
        }
      }),
    [inputValue]
  );

  return (
    <search
      className={inputValue && cl.activeSearch}
      onMouseLeave={handleCloseInput}
    >
      <input
        className={`${cl.searchInput} ${inputValue && cl.activeSearchInput}`}
        type="text"
        placeholder="Я шукаю..."
        onChange={handleInput}
        value={inputValue}
      />

      {inputValue && filteredProducts.length > 0 ? (
        <section className={cl.searchResultsSection}>
          <hr />
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id} className={cl.searchResultItem}>
                <img src={product.urlImg} alt={product.name} />
                <section className={cl.searchResultInfo}>
                  <p>{product.name}</p>
                  <br />
                  <p className={cl.searchResultPrice}>
                    {product.price}{" "}
                    <img
                      src={hryvniaSymbol}
                      alt="Hryvnia symbol"
                      className={cl.hryvniaSymbol}
                    />
                  </p>
                </section>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        inputValue && (
          <section className={cl.searchNotFound}>
            <p>Товарів не знайдено</p>
          </section>
        )
      )}
    </search>
  );
}

SearchInput.propTypes = {
  setIsShowInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default SearchInput;
