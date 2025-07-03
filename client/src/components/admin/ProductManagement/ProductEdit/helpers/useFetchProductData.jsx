import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useIdFromUrl from '@hooks/useId';
import { getProductById } from '@redux/products/service';
import { loadProductId, selectProductId } from '@redux/selectors';
import { errorEditProduct, loadEditProduct, responseEditProduct } from '../../../../../redux/admin/selectors';

export const useFetchProductData = () => {
  const dispatch = useDispatch();
  const id = useIdFromUrl();

  const isLoadingGet = useSelector(loadProductId);
  const responseGet = useSelector(selectProductId);
  const isLoadingEdit = useSelector(loadEditProduct);
  const responseEdit = useSelector(responseEditProduct);
  const errorEdit = useSelector(errorEditProduct);
  useEffect(() => {
    if (id) dispatch(getProductById(id));
  }, [dispatch, id]);

  return { isLoadingGet, responseGet, id, isLoadingEdit, responseEdit, errorEdit };
};
