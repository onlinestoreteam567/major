import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import background from '../../../../public/images/404/404-background.webp';
import label from '../../../../public/images/404/404-label.webp';
import Header from '@components/Header/Header';

export default function NotFound() {
  return (
    <>
      <Header />

      <div className={cl.wrap}>
        <img src={background} alt="background" className={cl.backgroundImage} />
        <img src={label} alt="404 label" className={cl.overlayImage} />
        <div className={cl.content}>
          <p className={cl.text}>Сторінку не знайдено</p>
          <Link to="/" className={cl.button}>
            На головну сторінку
          </Link>
        </div>
      </div>
    </>
  );
}
