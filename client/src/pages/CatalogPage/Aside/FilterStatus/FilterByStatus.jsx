import cl from './index.module.scss';
import { useDispatch } from 'react-redux';
import Heading from '@components/UI/Texts/Heading/Heading';
import { getProductsByStatus } from '@redux/products/service';

const switchItems = [
  { icon: '/svg/catalogPage/new.svg', label: 'is_new' },
  { icon: '/svg/catalogPage/fire.svg', label: 'is_best_seller' },
  { icon: '/svg/catalogPage/discount.svg', label: 'is_discount' },
];

export default function FilterByStatus() {
  const dispatch = useDispatch();

  const getStatus = (value) => {
    // console.log(value);
    dispatch(getProductsByStatus(value));
  };

  return (
    <div>
      <ul>
        {switchItems.map((item) => (
          <li key={item.label}>
            <img src={item.icon} />
            <Heading type="h4">{item.label}</Heading>
            <label>
              <input type="radio" name="status" value={item.label} onChange={(e) => getStatus(e.target.value)} />
              <span className={cl.slider}></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
