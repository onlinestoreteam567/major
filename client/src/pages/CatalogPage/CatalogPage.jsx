import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Container from '@pages/CatalogPage/Products/CardsContainer/CardsContainer';
import Switchs from './Aside/Switchs/Switchs';
import Category from './Aside/Category/Category';
import Products from './Products/Products';
import Catalog from '@pages/HomePage/Catalog/Catalog';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { catalogFilterSchema } from '@validations/catalogFilterSchema';
// import CategoryService from '../../services/CategoryService';
import { useState } from 'react';
import defaultValues from './defaultCatalogValues';
import PriceRange from './Aside/PriceRange/PriceRange';

const CatalogPage = () => {
  // const [categories, setCategories] = useState();
  const [isAsideMobile, setIsAsideMobile] = useState(false);
  const [isHiddenAside, setisHiddenAside] = useState(false);

  // const fetchCategories = async () => {
  // const data = await CategoryService.getCategories();
  // setCategories(data);
  // };

  const initialState = useSelector((state) => state.catalogPage.initialState);

  const { register, handleSubmit, watch, setValue } = useForm({
    resolver: yupResolver(catalogFilterSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => console.log('Submitted data:', data);

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

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

            {/* It will not be here in future */}
            {/* <Assignment register={register} watch={watch} categories={categories} /> */}

            <PriceRange setValue={setValue} register={'priceRange'} name="priceRange" />
            <Category register={register} watch={watch} />
          </Aside>
        </div>

        {initialState ? (
          <div className={cl.initialContent}>
            <Catalog />
          </div>
        ) : (
          <Products>
            <Container />
          </Products>
        )}
      </section>
    </div>
  );
};

export default CatalogPage;
