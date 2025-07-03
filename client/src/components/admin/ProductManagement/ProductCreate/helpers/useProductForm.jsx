import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '@validations/admin/productSchema';
import calculateDiscountedPrice from './calculateDiscountedPrice';

export const useProductForm = (response) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: 'onSubmit',
    shouldUnregister: false,
    defaultValues: {
      purpose_category: [],
    },
  });

  const price = watch('price');
  const discount = watch('discount');
  const [resetImagesTrigger, setResetImagesTrigger] = useState(0);

  useEffect(() => {
    calculateDiscountedPrice(price, discount, setValue);
  }, [price, discount, setValue]);

  useEffect(() => {
    if (response) {
      reset();
      setResetImagesTrigger((prev) => prev + 1);
    }
  }, [response, reset, setValue]);

  return {
    register,
    handleSubmit,
    errors,
    control,
    resetImagesTrigger,
    getValues,
  };
};
