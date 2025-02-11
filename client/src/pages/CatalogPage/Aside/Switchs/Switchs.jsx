import Switch from '@UI/Switch/Switch';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useState } from 'react';
import useRequest from './Request';

const switchItems = [
  { icon: '/svg/catalogPage/new.svg', label: 'is_new' },
  { icon: '/svg/catalogPage/fire.svg', label: 'is_best_seller' },
  { icon: '/svg/catalogPage/discount.svg', label: 'is_discount' },
];

const Switchs = ({ getFilter }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  const handleToggle = (value) => {
    getFilter(value);
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
        />
      ))}
    </>
  );
};

export default Switchs;
