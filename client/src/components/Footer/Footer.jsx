import cl from './index.module.scss';
import logoIcon from '../../assets/svg/footer/footerLogo.svg';
import telegramIcon from '../../assets/svg/footer/telegram.svg';
import instagramIcon from '../../assets/svg/footer/instagram.svg';
import gmailIcon from '../../assets/svg/footer/gmail.svg';
import calendarIcon from './../../assets/svg/footer/calendar.svg';
import phoneCallIcon from './../../assets/svg/footer/phoneCall.svg';
const Footer = () => {
  return (
    <footer>
      <section className={cl.topSection}>
        <section className={cl.logoAndSocialsSection}>
          <img src={logoIcon} alt="Site logo" />
          <section>
            <p>Ми у соціальних мережах:</p>
            <ul>
              <li>
                <a href="">
                  <img src={telegramIcon} alt="Our telegram" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={instagramIcon} alt="Our instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={gmailIcon} alt="Our gmail" />
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section className={cl.firstNavigationSection}>
          <ul className={cl.ulNavigation}>
            <li className={cl.textToRight}>
              <a href="">Головна</a>
            </li>
            <li className={cl.textToRight}>
              <a href="">Каталог</a>
            </li>
            <li className={cl.textToRight}>
              <a href="">Про нас</a>
            </li>
            <li className={cl.textToRight}>
              <a href="">Блог</a>
            </li>
          </ul>
        </section>
        <section>
          <ul className={cl.ulNavigation}>
            <li>
              <a href="">Співпраця</a>
            </li>
            <li>
              <a href="">Обмін та повернення</a>
            </li>
            <li>
              <a href="">Оплата та доставка</a>
            </li>
          </ul>
        </section>
        <section>
          <section>
            <p className={cl.titleFooterWithCalendarIcon}>
              <img src={calendarIcon} alt="Calendar icon" /> <span>Режим роботи</span>
            </p>
            <ul className={cl.ulFooter}>
              <li>Пн - Пт: 8:00 - 20:00</li>
              <li>Сб - Нд: 10:00 - 15:00</li>
            </ul>
          </section>
          <section>
            <ul className={cl.ulFooter}>
              <li className={cl.phoneCallLi}>
                <img className={cl.phoneCallIcon} src={phoneCallIcon} alt="Phone call icon" />
                <span>+38 (096) 327 77 34</span>
              </li>
              <li>+38 (050) 123 84 99</li>
            </ul>
          </section>
        </section>
      </section>
      <section className={cl.bottomSection}>
        <hr />
        <p>© Major.com.ua, 2024-2025,Інтернет-магазин. Всі права захищені.</p>
      </section>
    </footer>
  );
};

export default Footer;
