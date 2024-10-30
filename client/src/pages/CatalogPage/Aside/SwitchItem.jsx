import Switch from '@UI/Switch/Switch.jsx'; // Adjust the import path as needed
import { useTranslation } from 'react-i18next';

const SwitchItem = ({ icon, label }) => {
  const { t } = useTranslation();

  return (
    <li>
      <img src={icon} alt="" />
      <span>{t(label, { ns: 'catalogPage' })}</span>
      <Switch />
    </li>
  );
};

export default SwitchItem;
