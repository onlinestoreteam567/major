import Switch from '@components/form-components/Checkbox/Switch/Switch.jsx';
const SwitchItem = ({ icon, label }) => {
  return (
    <li>
      <img src={icon} alt="" />
      <Switch />
    </li>
  );
};

export default SwitchItem;
