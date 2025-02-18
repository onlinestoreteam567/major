// import cl from '../index.module.scss';
// import useTranslationNamespace from '@hooks/useTranslationNamespace';
// import Heading from '@UI/Texts/Heading/Heading';
// import CheckBox from '@UI/Checkbox/Checkbox';
// import { FormGroup } from '@components/form-components';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchProductListTypes } from '../redux/products/service';
// import { loadTypes, selectTypes } from '../../../../redux/selectors';
// import EmptyPage from '@components/helpers/EmptyPage';
// import Spinner from '@components/helpers/Spinner';
// import { getProductsByTypes } from '../../../../redux/products/service';
// // import Loading from '@components/helpers/Loading';

// const Types = () => {
//   const { getTranslation } = useTranslationNamespace('catalogPage');
//   // const { types, status, error } = useSelector((state) => state.types);
//   const dispatch = useDispatch();

//   const isLoading = useSelector(loadTypes);
//   const items = useSelector(selectTypes);
//   console.log(items);

//   // if (status === 'loading') {
//   //   return <div style={{ color: 'black', fontSize: '24px' }}>Завантаження категорій...</div>;
//   // }

//   // if (status === 'failed') {
//   //   return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
//   // }

//   // const getTypes = (id) => {
//   //   dispatch(fetchProductListTypes(id));
//   // };

//   const getTypes = (id) => {
//     console.log(id);
//     dispatch(getProductsByTypes(id));
//   };

//   const showArr = Array.isArray(items) && items.length !== 0;

//   return (
//     <>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <FormGroup className={cl.checkboxesWrapper} name={'category'}>
//           <Heading type="h4">{getTranslation('category')}</Heading>
//           {showArr ? (
//             <>
//               {items.map((item) => (
//                 <CheckBox key={item.name} item={item} name="typesGroup" getTypes={getTypes} />
//               ))}
//             </>
//           ) : (
//             <EmptyPage message="Не знайдено" />
//           )}
//         </FormGroup>
//       )}
//     </>
//   );
// };

// export default Types;
