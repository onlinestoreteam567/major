import cl from './index.module.scss';

export default function Plus() {
  return (
    <div className={cl.wrapIcon}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="2" fill="white" />
        <path d="M7 12L17 12" stroke="#22211F" strokeLinecap="round" />
        <path d="M12 17V7" stroke="#22211F" strokeLinecap="round" />
      </svg>
    </div>
  );
}
