import Switch from '@UI/Switch/Switch';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const switchItems = [
  { icon: '/svg/catalogPage/new.svg', label: 'is_new' },
  { icon: '/svg/catalogPage/fire.svg', label: 'is_best_seller' },
  { icon: '/svg/catalogPage/discount.svg', label: 'is_discount' },
];

const Switchs = ({ activeFilter, toggleFilter }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <>
      {switchItems.map((item) => (
        <Switch
          key={item.label}
          labelText={getTranslation(item.label)}
          img={item.icon}
          value={item.label}
          onChange={toggleFilter}
          selected={activeFilter === item.label} // Ensure only one is active
          name="switchGroup"
        />
      ))}
    </>
  );
};

export default Switchs;
