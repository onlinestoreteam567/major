import Switch from '@components/form-components/Checkbox/Switch/Switch';
import { FormGroup } from '@components/form-components';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const switchItems = [
  { icon: '/svg/catalogPage/new.svg', label: 'newItems' },
  { icon: '/svg/catalogPage/fire.svg', label: 'bestSellers' },
  { icon: '/svg/catalogPage/discount.svg', label: 'discounts' },
];

const Switchs = ({ register, watch }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <FormGroup name={'switch'}>
      <>
        {switchItems.map((item) => (
          <Switch
            key={item.label}
            labelText={getTranslation(item.label)}
            name={`switch.${item.label}`}
            register={register}
            watch={watch}
            img={item.icon}
          />
        ))}
      </>
    </FormGroup>
  );
};

export default Switchs;
