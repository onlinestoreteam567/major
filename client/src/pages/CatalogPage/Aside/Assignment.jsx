import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import { FormGroup } from '@components/form-components';
import CheckBox from '@components/form-components/Checkbox/Checkbox';

const checkboxData = [
  { key: 'normal', label: 'normalHair' },
  { key: 'colored', label: 'coloredHair' },
  { key: 'thin', label: 'thinHair' },
  { key: 'damaged', label: 'damagedHair' },
  { key: 'growth', label: 'hairGrowth' },
  { key: 'cleansing', label: 'deepConditioning' },
];

const Assignment = ({ register, watch }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <FormGroup className={cl.assignmentWrapper} name={'assignment'}>
      <Heading type="h4">{getTranslation('assignmentTitle')}</Heading>
      <>
        {checkboxData.map((item) => (
          <CheckBox
            key={item.key}
            labelText={getTranslation(item.label, 'common')}
            name={`assignment.${item.key}`}
            register={register}
            watch={watch}
          />
        ))}
      </>
    </FormGroup>
  );
};

export default Assignment;
