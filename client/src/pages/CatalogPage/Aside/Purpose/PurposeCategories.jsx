// import { loadCategories, selectCategories } from '../../../../redax/selectors';
// // import { fetchProductListPurposeCategory } from '../redax/products/service';
// import PurposeCategoryCard from '@components/UI/CatalogCard/CatalogCard';

// import { useSelector } from 'react-redux';

// const PurposeCategories = () => {
//   // const { items, status, error } = useSelector((state) => state.purposeCategory);
//   // const dispatch = useDispatch();
//   // const isLoading = useSelector(loadCategories);
//   const items = useSelector(selectCategories);
//   console.log(items);

//   // if (status === 'loading') {
//   //   return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження категорій за призначенням...</div>;
//   // }

//   // if (status === 'failed') {
//   //   return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
//   // }

//   // const getByPurposeCategory = (id) => {
//   //   // dispatch(fetchProductListPurposeCategory(id));
//   //   dispatch(fetchProductListPurposeCategory(id));
//   // };

//   return (
//     <>

//       <form>
//         <button type="button">Усі товари</button>
//         {items.map((item) => (
//           <PurposeCategoryCard
//             // getByPurposeCategory={getByPurposeCategory}
//             card={item}
//             key={item.id}
//             name="purposeCategoryGroup"
//           />
//         ))}
//       </form>
//     </>
//   );
// };
// export default PurposeCategories;
