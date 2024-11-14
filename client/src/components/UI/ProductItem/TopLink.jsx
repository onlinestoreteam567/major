import ArrowLink from '@components/Icons/ArrowLink';
import ArrowLeft from '@components/Icons/ArrowLeft';
import cl from './index.module.scss';
import card from './card.json';

export default function TopLink() {
  return (
    <>
      <div className={cl.wrapMobile}>
        <div className={cl.wrapLinkBack}>
          <ArrowLeft />
          <p>Головна</p>
          <ArrowLink />
          <p>Каталог</p>
        </div>
      </div>
      <div className={cl.wrapDesk}>
        <div className={cl.wrapLinkBack}>
          <p>Головна</p>
          <ArrowLink />
          <p>Каталог</p>
          <div className={cl.wrapLastLink}>
            <ArrowLink />
            <p className={cl.lastLink}>{card.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
