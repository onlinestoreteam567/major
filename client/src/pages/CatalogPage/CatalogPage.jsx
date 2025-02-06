import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Container from '@pages/CatalogPage/Products/CardsContainer/CardsContainer';
import Switchs from './Aside/Switchs/Switchs';
import Products from './Products/Products';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { catalogFilterSchema } from '@validations/catalogFilterSchema';
import { useState } from 'react';
import defaultValues from './defaultCatalogValues';
import PriceRange from './Aside/PriceRange/PriceRange';
import Types from './Aside/Category/Category';
import { useDispatch } from 'react-redux';
import { fetchProductList, fetchProductListWithParams } from '@services/ProductListService';
import { setFetchType } from '@features/products/productListSlice/productListSlice';

const CatalogPage = () => {
  const [isAsideMobile, setIsAsideMobile] = useState(false);
  const [isHiddenAside, setisHiddenAside] = useState(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, setValue, getValues } = useForm({
    resolver: yupResolver(catalogFilterSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => console.log('Submitted data:', data);

  if (getValues().category) {
    const filteredCategories = Object.entries(getValues().category)
      .filter(([key, value]) => value)
      .map(([key]) => key);

    if (filteredCategories.length > 0) {
      const fetchProductsWithParams = (id) => {
        dispatch(setFetchType('withParams'));
        dispatch(fetchProductListWithParams(id));
      };
      fetchProductsWithParams(filteredCategories[0].match(/\d+/)?.[0]);
    } else {
      dispatch(setFetchType('default'));
      dispatch(fetchProductList());

      // dispatch(restoreItemsFromSaved());
    }
  }
  console.log('render');
  return (
    <div className={cl.catalogWrapper}>
      <Top setIsAsideMobile={setIsAsideMobile} setisHiddenAside={setisHiddenAside} />

      <section className={cl.mainWrapper}>
        <div className={`${cl.wrapAside} ${isAsideMobile ? cl.asideMobile : ''}`}>
          <Aside
            handleSubmit={handleSubmit(onSubmit)}
            setIsAsideMobile={setIsAsideMobile}
            isHiddenAside={isHiddenAside}
            setisHiddenAside={setisHiddenAside}
          >
            <Switchs register={register} watch={watch} />

            <PriceRange setValue={setValue} register={'priceRange'} name="priceRange" />
            <Types register={register} watch={watch} />
          </Aside>
        </div>

        <Products>
          <Container />
        </Products>
      </section>
    </div>
  );
};

export default CatalogPage;
