import cl from './index.module.scss';

const CheckedRadio = () => {
  return (
    <svg
      className={cl.checkedRadio}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 0 20.2435 0 16ZM15.0869 22.848L24.2987 11.3323L22.6347 10.0011L14.7797 19.8165L9.216 15.1808L7.85067 16.8192L15.0869 22.848Z"
        fill="#4C9A4E"
      />
    </svg>
  );
};
export default CheckedRadio;
