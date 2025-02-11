import Switch from '@UI/Switch/Switch';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useState } from 'react';

const switchItems = [
  { icon: '/svg/catalogPage/new.svg', label: 'newItems' },
  { icon: '/svg/catalogPage/fire.svg', label: 'bestSellers' },
  { icon: '/svg/catalogPage/discount.svg', label: 'discounts' },
];

const Switchs = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const [selected, setSelected] = useState(null);

  const handleToggle = (value) => {
    setSelected(value);
  };

  return (
    <>
      {switchItems.map((item) => (
        <Switch
          key={item.label}
          labelText={getTranslation(item.label)}
          img={item.icon}
          value={item.label}
          onChange={handleToggle}
          name="switchGroup"
          checked={selected === item.label}
          selected={selected}
        />
      ))}
    </>
  );
};

export default Switchs;
