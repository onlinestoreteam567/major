import cl from './index.module.scss';

export default function TitleCardCatalog({ card }) {
  return (
    <div className={cl.wrapTitle}>
      <h4>{card.name}</h4>
    </div>
  );
}
