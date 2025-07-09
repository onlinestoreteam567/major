import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../../../../../validations/admin/productSchema';
import calculateDiscountedPrice from '../../ProductCreate/helpers/calculateDiscountedPrice';
import setFormValues from './setFormValues';

export const useEditProductForm = (response) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
    watch,
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: 'onSubmit',
  });

  const price = watch('price');
  const discount = watch('discount');
  useEffect(() => {
    calculateDiscountedPrice(price, discount, setValue);
  }, [price, discount, setValue]);

  useEffect(() => {
    response && setFormValues(setValue, response);
  }, [response, setValue]);

  return {
    register,
    handleSubmit,
    errors,
    control,
    getValues,
    setValue,
  };
};
