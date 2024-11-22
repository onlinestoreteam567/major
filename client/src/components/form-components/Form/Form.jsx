import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export function Form({ defaultValues, children, onSubmit, schema }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child, index) => {
            const uniqueKey = `${name || 'group'}-${index}`;
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
    </form>
  );
}
