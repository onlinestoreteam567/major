import cl from './index.module.scss';
import filter from '@svg/catalogPage/new.svg';
import fire from '@svg/catalogPage/fire.svg';
import discount from '@svg/catalogPage/discount.svg';
import dollar from '@svg/catalogPage/dollar.svg';
import Switch from './Switch';
import AssignmentBox from './AssignmentBox';
import Range from './Range';

const Aside = () => {
  return (
    <aside className={cl.aside}>
      <ul className={cl.switchBox}>
        <li>
          <img src={filter} alt="" />
          <span className={cl.switchTitle}>Новинки</span>
          <Switch />
        </li>
        <li>
          <img src={fire} alt="" />
          <span className={cl.switchTitle}>Хіт продажу</span>
          <Switch />
        </li>
        <li>
          <img src={discount} alt="" />
          <span className={cl.switchTitle}>Знижки</span>
          <Switch />
        </li>
        <li>
          <img src={dollar} alt="" />
          <span className={cl.switchTitle}>Разом дешевше</span>
          <Switch />
        </li>
      </ul>

      <AssignmentBox />

      <Range />
      {/* <section>
        <input type="range" name="" id="" />
        <section>
          <input type="number" name="" id="" />
          <input type="number" name="" id="" />
          <button>ОК</button>
        </section>
      </section> */}

      <section>
        <h4>Категорія</h4>
        <ul>
          <li>Шампунь</li>
          <li>Кондиціонер</li>
          <li>Бальзам</li>
          <li>Сироватка</li>
          <li>Крем</li>
          <li>Олія</li>
          <li>Маска</li>
        </ul>
      </section>
    </aside>
  );
};
export default Aside;
