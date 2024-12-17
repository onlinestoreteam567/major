import Switch from '@components/form-components/Checkbox/Switch/Switch';
import { FormGroup } from '@components/form-components';

const switchItems = [
  { icon: '/svg/catalogPage/filter.svg', label: 'newItems' },
  { icon: '/svg/catalogPage/fire.svg', label: 'bestSellers' },
  { icon: '/svg/catalogPage/discount.svg', label: 'discounts' },
];

const Switchs = ({ register, watch }) => {
  return (
    <FormGroup name={'switch'}>
      <>
        {switchItems.map((item) => (
          <Switch
            key={item.label}
            labelText={item.label}
            name={`switch.${item.label}`}
            register={register}
            watch={watch}
          />
        ))}
      </>
    </FormGroup>
  );
};

export default Switchs;
