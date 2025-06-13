import cl from './index.module.scss';

const UncheckedCheckbox = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cl.uncheckedCheckbox}
    >
      <rect x="1" y="1" width="22" height="22" rx="3" stroke="#A2A2A2" strokeWidth="2" />
    </svg>
  );
};
export default UncheckedCheckbox;
