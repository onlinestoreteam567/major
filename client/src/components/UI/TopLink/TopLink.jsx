import ArrowLink from '@components/Icons/ArrowLink';
import cl from './index.module.scss';
import { Link } from 'react-router-dom';

export default function TopLink({ card }) {
  return (
    <>
      <div className={cl.wrapMobile}>
        <div className={cl.wrapLinkBack}>
          <Link to="/" className={cl.link}>
            Головна
          </Link>
          <ArrowLink />
          <Link to="/catalog" className={cl.link}>
            Каталог
          </Link>
        </div>
      </div>
      <div className={cl.wrapDesk}>
        <div className={cl.wrapLinkBack}>
          <Link to="/" className={cl.link}>
            Головна
          </Link>
          <ArrowLink />
          <Link to="/catalog" className={cl.link}>
            Каталог
          </Link>
          <div className={cl.wrapLastLink}>
            <ArrowLink />
            <p className={cl.lastLink}>{card.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
