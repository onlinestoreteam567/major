import cl from './index.module.scss';

export default function TitleCardCatalog({ card }) {
  return (
    <div className={cl.wrapTitle}>
      <h3>{card.name}</h3>
    </div>
  );
}
