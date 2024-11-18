import cl from './index.module.scss';
import SwitchItem from './SwitchItem';

const switchItems = [
  { icon: '/svg/catalogPage/filter.svg', label: 'newItems' },
  { icon: '/svg/catalogPage/fire.svg', label: 'bestSellers' },
  { icon: '/svg/catalogPage/discount.svg', label: 'discounts' },
  { icon: '/svg/catalogPage/dollar.svg', label: 'togetherCheaper' },
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
