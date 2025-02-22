import EmptyPage from '@components/helpers/EmptyPage';
import CardCatalog from './Card/Card';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';
import { selectProducts } from '@redux/selectors';

export default function CardsContainer() {
  const items = useSelector(selectProducts);

  const showArr = Array.isArray(items) && items.length !== 0;

  return (
    <>
      {showArr ? (
        <ul className={cl.container}>
          {items.map((card) => (
            <li key={card.id}>
              <CardCatalog card={card} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyPage message="Не передбачувана помилка" />
      )}
    </>
  );
}
