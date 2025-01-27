import CardCatalog from './Card/Card';
import cl from './index.module.scss';

export default function CardsContainer({ cards }) {
  return (
    <ul className={cl.container}>
      {cards.map((card) => (
        <li key={card.id}>
          <CardCatalog card={card} />
        </li>
      ))}
    </ul>
  );
}
