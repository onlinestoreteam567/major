import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

// Some change

// Array of products example
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Headphones" },
  { id: 4, name: "Desk Chair" },
  { id: 5, name: "Coffee Mug" },
  { id: 6, name: "Notebook" },
  { id: 7, name: "Gaming Mouse" },
  { id: 8, name: "Keyboard" },
  { id: 9, name: "Backpack" },
  { id: 10, name: "Water Bottle" },
];

function SearchInput({ setIsShowInput }) {
  const [inputValue, setInputValue] = useState("");

  const handleCloseInput = () => {
    setIsShowInput(false);
    console.log(123);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        if (inputValue !== "") {
          return product.name.toLowerCase().includes(inputValue.toLowerCase());
        }
      }),
    [inputValue]
  );

  return (
    <>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Я шукаю..."
        onChange={handleInput}
        onBlur={handleCloseInput}
        value={inputValue}
      />

      {inputValue && filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        inputValue && <p>No products found</p>
      )}
    </>
  );
}

SearchInput.propTypes = {
  setIsShowInput: PropTypes.func.isRequired,
};

export default SearchInput;
