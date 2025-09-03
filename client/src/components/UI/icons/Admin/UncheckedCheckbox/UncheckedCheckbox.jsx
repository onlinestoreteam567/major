import cl from './index.module.scss';

const UncheckedCheckbox = () => {
  return (
    <svg
      className={cl.uncheckedCheckbox}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="30" height="30" rx="3" stroke="#A2A2A2" strokeWidth="2" />
    </svg>
  );
};
export default UncheckedCheckbox;
