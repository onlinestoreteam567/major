import checkbox from '@svg/catalogPage/checkbox.svg';
import emptyCheckbox from '@svg/catalogPage/emptyCheckbox.svg';
import { useTranslation } from 'react-i18next';

const CheckboxItem = ({ checked, label, onChange }) => {
  const { t } = useTranslation();

  return (
    <li>
      <label onClick={onChange}>
        <img src={checked ? checkbox : emptyCheckbox} alt="" />
        <p>
          {t(label, { ns: 'catalogPage' })} <span>(0)</span>
        </p>
      </label>
    </li>
  );
};

export default CheckboxItem;
