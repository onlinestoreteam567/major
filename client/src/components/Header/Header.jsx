import cl from "./index.module.scss";
import logoIcon from "../../assets/svg/header/headerLogo.svg";
import searchIcon from "../../assets/svg/header/search.svg";
import uaIcon from "../../assets/svg/header/ua.svg";
import bagIcon from "../../assets/svg/header/bag.svg";
const Header = () => {
  return (
    <header>
      <div className={cl.mainWrapper}>
        <section>
          <img src={logoIcon} alt="Site logo" className={cl.logoIcon} />
        </section>
        <nav className={cl.navigation}>
          <ul>
            <li>КАТАЛОГ</li>
            <li>ПРО НАС</li>
            <li>БЛОГ</li>
            <li>СПІВПРАЦЯ</li>
            <li>КОНТАКТИ</li>
          </ul>
        </nav>
        <section className={cl.rightIconsSection}>
          <img src={searchIcon} alt="Search bar icon" />
          <img src={uaIcon} alt="Change language icon" />
          <img src={bagIcon} alt="Bag icon" />
        </section>
      </div>
    </header>
  );
};

export default Header;
