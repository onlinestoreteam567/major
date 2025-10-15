import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import { setStatus, resetFilter } from '@redux/filter/filterSlice';
import { filterStatus } from '@redux/selectors';
import { getProductsByStatus, fetchProductsAll } from '@redux/products/service';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const statusItems = [
  { icon: '/svg/catalogPage/new.svg', label: 'is_new', alt: 'newIconAlt' },
  { icon: '/svg/catalogPage/fire.svg', label: 'is_best_seller', alt: 'fireIconAlt' },
  { icon: '/svg/catalogPage/discount.svg', label: 'is_discount', alt: 'discountIconAlt' },
];

const checkedImg = '/svg/catalogPage/check.svg';
const uncheckedImg = '/svg/catalogPage/uncheck.svg';

export default function FilterByStatus() {
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const newStatus = useSelector(filterStatus);

  const getStatus = (value) => {
    if (newStatus === value) {
      dispatch(resetFilter());
      dispatch(fetchProductsAll());
    } else {
      dispatch(getProductsByStatus(value));
      dispatch(setStatus(value));
    }
  };

  return (
    <ul className={cl.statusList}>
      {statusItems.map((item) => (
        <li key={item.label}>
          <div>
            <div>
              <img className={cl.icon} src={item.icon} alt={getTranslation(item.alt)} />
            </div>
            <Heading type="h4">{getTranslation(item.label)}</Heading>
          </div>
          <label>
            <input
              type="checkbox"
              name="status"
              value={item.label}
              checked={newStatus === item.label}
              onChange={(e) => getStatus(e.target.value)}
            />
            <span>
              <img
                src={newStatus === item.label ? checkedImg : uncheckedImg}
                alt={newStatus === item.label ? getTranslation('checkedAlt') : getTranslation('uncheckedAlt')}
              />
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
