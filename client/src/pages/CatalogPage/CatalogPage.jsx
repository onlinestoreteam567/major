import cl from './index.module.scss';
import Aside from './Aside/Aside';
import Top from './Top/Top';
import Container from '@pages/CatalogPage/Products/CardsContainer/CardsContainer';
import TopLink from '@components/UI/TopLink/TopLink';
import Assignment from './Aside/Assignment';
import Switchs from './Aside/Switchs';
// import Range from './Aside/Range';
import Category from './Aside/Category';
import Products from './Products/Products';
import Catalog from '@pages/HomePage/Catalog/Catalog';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { catalogFilterSchema } from '@validations/catalogFilterSchema';

const CatalogPage = () => {
  const initialState = useSelector((state) => state.catalogPage.initialState);

  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(catalogFilterSchema),
    defaultValues: {
      newItems: false,
      bestSellers: false,
      discounts: false,
      normal: false,
      colored: false,
      thin: false,
      damaged: false,
      growth: false,
      cleansing: false,
      shampoo: false,
      conditioner: false,
      balm: false,
      serum: false,
      cream: false,
      oil: false,
      mask: false,
    },
  });

  const onSubmit = (data) => {
    console.log('Submitted data:', data);
  };

  return (
    <div className={cl.catalogWrapper}>
      <TopLink />
      <Top />

      <section className={cl.mainWrapper}>
        <div className={cl.wrapAside}>
          <Aside handleSubmit={handleSubmit(onSubmit)}>
            <Switchs register={register} watch={watch} />
            <Assignment register={register} watch={watch} />
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
