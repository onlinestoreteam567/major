import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import { setStatus } from '@redux/filter/filterSlice';
import { filterStatus } from '@redux/selectors';
import { getProductsByStatus } from '@redux/products/service';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const statusItems = [
  { icon: '/svg/catalogPage/new.svg', label: 'is_new' },
  { icon: '/svg/catalogPage/fire.svg', label: 'is_best_seller' },
  { icon: '/svg/catalogPage/discount.svg', label: 'is_discount' },
];

const checkedImg = '/svg/catalogPage/check.svg';
const uncheckedImg = '/svg/catalogPage/uncheck.svg';

export default function FilterByStatus() {
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const newStatus = useSelector(filterStatus);

  const getStatus = (value) => {
    dispatch(getProductsByStatus(value));
    dispatch(setStatus(value));
  };

  return (
    <ul className={cl.statusList}>
      {statusItems.map((item) => (
        <li key={item.label}>
          <div>
            <div>
              <img src={item.icon} />
            </div>
            <Heading type="h4">{getTranslation(item.label)}</Heading>
          </div>
          <label>
            <input
              type="radio"
              name="status"
              value={item.label}
              checked={newStatus === item.label}
              onChange={(e) => getStatus(e.target.value)}
            />
            <span>
              <img
                src={newStatus === item.label ? checkedImg : uncheckedImg}
                alt={newStatus === item.label ? 'Checked' : 'Unchecked'}
              />
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
