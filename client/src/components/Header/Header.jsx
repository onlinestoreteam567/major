import cl from "./index.module.scss";
import logoIcon from "../../assets/svg/header/logo.svg";
import searchIcon from "../../assets/svg/header/search.svg";
import uaIcon from "../../assets/svg/header/ua.svg";
import bagIcon from "../../assets/svg/header/bag.svg";
import SearchInput from "../UI/SearchInput/SearchInput";
import { useState } from "react";

const Header = () => {
  const [isShowInput, setIsShowInput] = useState(false);

  const handleShowInput = () => {
    setIsShowInput(true);
  };

  return (
    <header>
      <div className={cl.mainWrapper}>
        <section>
          <img src={logoIcon} alt="Site logo" className={cl.logoIcon} />
        </section>
        <nav>
          <ul>
            <li>КАТАЛОГ</li>
            <li>ПРО НАС</li>
            <li>БЛОГ</li>
            <li>СПІВПРАЦЯ</li>
            <li>КОНТАКТИ</li>
          </ul>
        </nav>
        <section className={cl.rightSection}>
          {isShowInput ? (
            <SearchInput setIsShowInput={setIsShowInput} />
          ) : (
            <img
              src={searchIcon}
              alt="Search bar icon"
              onClick={handleShowInput}
            />
          )}
          <img src={uaIcon} alt="Change language icon" />
          <img src={bagIcon} alt="Bag icon" />
        </section>
      </div>
    </header>
  );
};

export default Header;
