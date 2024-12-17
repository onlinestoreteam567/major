import Switch from '@components/form-components/Checkbox/Switch/Switch';
import { FormGroup } from '@components/form-components';

const switchItems = [
  { icon: '/svg/catalogPage/filter.svg', label: 'newItems' },
  { icon: '/svg/catalogPage/fire.svg', label: 'bestSellers' },
  { icon: '/svg/catalogPage/discount.svg', label: 'discounts' },
];

const Switchs = ({ register, handleSubmit, getValues }) => {
  return (
    <FormGroup name={'switch'}>
      <>
        {switchItems.map((item) => (
          <Switch
            key={item.label}
            labelText={item.label}
            name={item.label}
            register={register}
            onChange={() => handleSubmit()}
            checked={getValues([item.label])}
          />
        ))}
      </>
    </FormGroup>
  );
};

export default Switchs;
