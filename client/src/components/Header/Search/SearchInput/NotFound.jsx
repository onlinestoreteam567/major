import cl from './index.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className={cl.searchNotFound}>
      <p>Товарів не знайдено</p>
      <Link to="catalog">Перейти до каталогу</Link>
    </section>
  );
};
export default NotFound;
