import CardCatalog from './Card/Card';
import cl from './index.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '@redux/selectors';
import { resetFilter } from '@redux/filter/filterSlice';
import { fetchProductsAll } from '@redux/products/service';
import Button from '@components/UI/Button/Button';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

export default function CardsContainer() {
  const dispatch = useDispatch();
  const items = useSelector(selectProducts);

  const showArr = Array.isArray(items) && items.length !== 0;

  const handleClearFilters = () => {
    dispatch(fetchProductsAll());
    dispatch(resetFilter());
  };

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
        <div className={cl.emptyWrap}>
          <img src="/X.png" alt="X" />
          <Paragraph type="body2">Спробуйте змінити налаштування фільтрів</Paragraph>
          <Button onClick={handleClearFilters} variant="secondary">
            Продовжити пошук
          </Button>
        </div>
      )}
    </>
  );
}
