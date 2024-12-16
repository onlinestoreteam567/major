import Switch from '@components/UI/Switch/Switch.jsx';
const SwitchItem = ({ icon, label }) => {
  return (
    <li>
      <img src={icon} alt="" />
      <Switch />
    </li>
  );
};

export default SwitchItem;
