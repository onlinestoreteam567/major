import styles from "./index.module.scss";
import logoIcon from "../../assets/svg/headerLogo.svg";
import searchIcon from "../../assets/svg/search.svg";
import uaIcon from "../../assets/svg/ua.svg";
import bagIcon from "../../assets/svg/bag.svg";
const Header = () => {
  return (
    <header>
      <div className={styles.mainWrapper}>
        <section>
          <img src={logoIcon} alt="Site logo" className={styles.logoIcon} />
        </section>
        <nav className={styles.navigation}>
          <ul>
            <li>КАТАЛОГ</li>
            <li>ПРО НАС</li>
            <li>БЛОГ</li>
            <li>СПІВПРАЦЯ</li>
            <li>КОНТАКТИ</li>
          </ul>
        </nav>
        <section className={styles.rightIconsSection}>
          <img src={searchIcon} alt="Search bar icon" />
          <img src={uaIcon} alt="Change language icon" />
          <img src={bagIcon} alt="Bag icon" />
        </section>
      </div>
    </header>
  );
};

export default Header;
