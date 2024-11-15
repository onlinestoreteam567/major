import useTranslationNamespace from '@hooks/useTranslationNamespace';

const CheckboxItem = ({ checked, label, onChange }) => {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <li>
      <label onClick={onChange}>
        <img src={checked ? '/svg/catalogPage/checkbox.svg' : '/svg/catalogPage/emptyCheckbox.svg'} alt="" />
        <p>
          {getTranslation(label)} <span>(0)</span>
        </p>
      </label>
    </li>
  );
};

export default CheckboxItem;
