import Switch from '@UI/Switch/Switch.jsx';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const SwitchItem = ({ icon, label }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <li>
      <img src={icon} alt="" />
      <span>{getTranslation(label)}</span>
      <Switch />
    </li>
  );
};

export default SwitchItem;
