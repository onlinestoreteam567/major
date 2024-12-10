import CardCatalog from './CardCatalog';
import cl from './index.module.scss';
import cards from './list.json';

// ****** Це тимчасовий компонент *****

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
