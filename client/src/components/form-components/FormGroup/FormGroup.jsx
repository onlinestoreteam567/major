import React from 'react';

export function FormGroup({ name, children, register, errors, className = '', ...rest }) {
  if (!name) {
    console.error('Error: Name not provided for FormGroup.');
    return <div style={{ color: 'red' }}>Name is required for this FormGroup</div>;
  }
  return (
    <div className={`form-group ${className}`} {...rest}>
      {Array.isArray(children)
        ? children.map((child, index) => {
            const uniqueKey = `${name || 'Form-group__number'}-${index}`;
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: uniqueKey,
                    errors,
                  },
                })
              : child;
          })
        : children}
    </div>
  );
}
