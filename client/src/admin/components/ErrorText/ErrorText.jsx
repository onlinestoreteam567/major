import cl from './index.module.scss';

const ErrorText = ({ error }) => {
  return (
    <>
      {error &&
        Object.keys(error).map((key) => (
          <div key={key} className={cl.errorTextWrapper}>
            <strong>{key}:</strong>
            <ul>
              {Array.isArray(error[key]) ? (
                error[key].map((message, index) => <li key={index}>{message}</li>)
              ) : (
                <li>{error[key]}</li>
              )}
            </ul>
          </div>
        ))}
    </>
  );
};
export default ErrorText;
