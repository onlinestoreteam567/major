import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Container from '@pages/CatalogPage/Products/CardsContainer/CardsContainer';
import Switchs from './Aside/Switchs/Switchs';
import Category from './Aside/Category/Category';
import Products from './Products/Products';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { catalogFilterSchema } from '@validations/catalogFilterSchema';
import { useEffect, useState } from 'react';
import defaultValues from './defaultCatalogValues';
import PriceRange from './Aside/PriceRange/PriceRange';
import { useTranslation } from 'react-i18next';
import TypeService from '@services/TypeService';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '@features/products/productListSlice';

const CatalogPage = () => {
  const [types, setTypes] = useState();
  const dispatch = useDispatch();

  const [isAsideMobile, setIsAsideMobile] = useState(false);
  const [isHiddenAside, setisHiddenAside] = useState(false);
  const { i18n } = useTranslation();

  const { items } = useSelector((state) => state.productList);

  const fetchTypes = async () => {
    const data = await TypeService.getTypes();
    setTypes(data);
  };

  const { register, handleSubmit, watch, setValue } = useForm({
    resolver: yupResolver(catalogFilterSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => console.log('Submitted data:', data);

  useEffect(() => {
    fetchTypes();
    dispatch(fetchProductList());
  }, [i18n.language, dispatch]);

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
            <Category register={register} watch={watch} types={types} />
          </Aside>
        </div>

        <Products>
          <Container cards={items} />
        </Products>
      </section>
    </div>
  );
};

export default CatalogPage;
