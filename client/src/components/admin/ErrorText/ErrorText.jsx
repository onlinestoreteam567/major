import cl from './index.module.scss';

const ErrorText = ({ error }) => {
  return (
    <>
      {error &&
        Object.keys(error).map((key) => (
          <div key={key} className={cl.errorTextWrapper}>
            <strong>{key}:</strong>
            <ul>
              {typeof error[key] === 'string' ? (
                <li>{error[key]}</li>
              ) : typeof error[key] === 'object' ? (
                Object.keys(error[key]).map((subKey) => (
                  <li key={subKey}>
                    <strong>{subKey}:</strong> {error[key][subKey]}
                  </li>
                ))
              ) : Array.isArray(error[key]) ? (
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
