import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Container from '@pages/CatalogPage/Products/CardsContainer/CardsContainer';
import TopLink from '@components/UI/TopLink/TopLink';
import Assignment from './Aside/Assignment/Assignment';
import Switchs from './Aside/Switchs/Switchs';
import Range from './Aside/PriceRange/PriceRange';
import Category from './Aside/Category/Category';
import Products from './Products/Products';
import Catalog from '@pages/HomePage/Catalog/Catalog';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { catalogFilterSchema } from '@validations/catalogFilterSchema';
import CategoryService from '../../services/CategoryService';
import { useEffect, useState } from 'react';
import defaultValues from './defaultCatalogValues';

const CatalogPage = () => {
  const [categories, setCategories] = useState();

  const fetchCategories = async () => {
    const data = await CategoryService.getCategories();
    setCategories(data);
  };

  const initialState = useSelector((state) => state.catalogPage.initialState);

  const { register, handleSubmit, watch, setValue } = useForm({
    resolver: yupResolver(catalogFilterSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    console.log('Submitted data:', data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={cl.catalogWrapper}>
      <TopLink />
      <Top />

      <section className={cl.mainWrapper}>
        <div className={cl.wrapAside}>
          <Aside handleSubmit={handleSubmit(onSubmit)}>
            <Switchs register={register} watch={watch} />
            <Assignment register={register} watch={watch} categories={categories} />
            <Range setValue={setValue} register={'priceRange'} name="priceRange" />
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
