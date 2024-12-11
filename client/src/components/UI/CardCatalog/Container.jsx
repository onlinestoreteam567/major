import CardCatalog from './CardCatalog';
import cl from './index.module.scss';
import cards from './list.json';

export default function Container() {
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
