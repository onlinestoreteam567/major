import Dropdown from "../UI/Dropdown/Dropdown";
import SearchInput from "../UI/SearchInput/SearchInput";
const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "280px",
        display: "flex",
      }}
    >
      Header
      <Dropdown />
      <SearchInput />
    </div>
  );
};

export default Header;
