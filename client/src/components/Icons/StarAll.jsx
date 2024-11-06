import cl from './index.module.scss';

export default function StarAll() {
  return (
    <div className={cl.wrapStar}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.88398 13.9999L4.96732 9.31659L1.33398 6.16659L6.13398 5.74992L8.00065 1.33325L9.86732 5.74992L14.6673 6.16659L11.034 9.31659L12.1173 13.9999L8.00065 11.5166L3.88398 13.9999Z"
          fill="#F9AE1A"
        />
      </svg>
    </div>
  );
}
