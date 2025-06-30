import cl from './index.module.scss';

export default function TitleCardCatalog({ card }) {
  return (
    <div className={`${cl.wrapTitle} ${!card.available ? cl.disabled : ''}`}>
      <h3>{card.name}</h3>
    </div>
  );
}
