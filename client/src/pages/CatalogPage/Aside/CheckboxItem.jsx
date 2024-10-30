import checkbox from '@svg/catalogPage/checkbox.svg';
import emptyCheckbox from '@svg/catalogPage/emptyCheckbox.svg';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const CheckboxItem = ({ checked, label, onChange }) => {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <li>
      <label onClick={onChange}>
        <img src={checked ? checkbox : emptyCheckbox} alt="" />
        <p>
          {getTranslation(label)} <span>(0)</span>
        </p>
      </label>
    </li>
  );
};

export default CheckboxItem;
