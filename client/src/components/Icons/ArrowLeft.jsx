import cl from './index.module.scss';

export default function ArrowLeft() {
  return (
    <div className={cl.wrapArrowLeft}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.5703 22.0703L7.50031 16.0003L13.5703 9.93031"
          stroke="#22211F"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.5 16L7.67 16"
          stroke="#22211F"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
