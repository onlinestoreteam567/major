import CardCatalog from './Card/Card';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';

export default function CardsContainer() {
  const { items, status, error } = useSelector((state) => state.productList);

  if (status === 'loading') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження усіх товарів...</div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  }

  return (
    <ul className={cl.container}>
      {items.map((card) => (
        <li key={card.id}>
          <CardCatalog card={card} />
        </li>
      ))}
    </ul>
  );
}
