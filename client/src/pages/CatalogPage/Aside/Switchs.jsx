import cl from './index.module.scss';
import filter from '@svg/catalogPage/new.svg';
import fire from '@svg/catalogPage/fire.svg';
import discount from '@svg/catalogPage/discount.svg';
import dollar from '@svg/catalogPage/dollar.svg';
import SwitchItem from './SwitchItem';

const switchItems = [
  { icon: filter, label: 'new items' },
  { icon: fire, label: 'best sellers' },
  { icon: discount, label: 'discounts' },
  { icon: dollar, label: 'together cheaper' },
];

const Switchs = () => {
  return (
    <div>
      <ul className={cl.switchBox}>
        {switchItems.map((item, index) => (
          <SwitchItem key={index} icon={item.icon} label={item.label} />
        ))}
      </ul>
    </div>
  );
};

export default Switchs;