// import { useState } from 'react';
// import TypeService from '@services/TypeService';
// import CategoryService from '@services/PurposeCategoryService';

// const Requests = () => {
//   const [typeId, setTypeId] = useState('');
//   const [typeName, setTypeName] = useState('');
//   const [categoryId, setCategoryId] = useState('');
//   const [categoryName, setCategoryName] = useState('');

//   // Type Service Methods
//   const handleOnGetTypes = () => {
//     TypeService.getTypes().then((res) => {
//       console.log('Fetched Types:', res);
//     });
//   };

//   const handleOnCreateType = () => {
//     TypeService.createType(typeName).then((res) => {
//       console.log('Created Type:', res);
//     });
//   };

//   const handleOnGetTypeById = () => {
//     TypeService.getTypeById(typeId).then((res) => {
//       console.log('Fetched Type by ID:', res);
//     });
//   };

//   const handleOnUpdateTypeById = () => {
//     TypeService.updateTypeById(typeId, { name: typeName }).then((res) => {
//       console.log('Updated Type:', res);
//     });
//   };

//   const handleOnPatchTypeById = () => {
//     TypeService.patchTypeById(typeId, { name: typeName }).then((res) => {
//       console.log('Patched Type:', res);
//     });
//   };

//   const handleOnDeleteTypeById = () => {
//     TypeService.deleteTypeById(typeId).then((res) => {
//       console.log('Deleted Type:', res);
//     });
//   };

//   // Category Service Methods
//   const handleOnGetCategory = () => {
//     CategoryService.getCategory().then((res) => {
//       console.log('Fetched Category:', res);
//     });
//   };

//   const handleOnCreateCategory = () => {
//     CategoryService.createCategory(categoryName).then((res) => {
//       console.log('Created Category:', res);
//     });
//   };

//   const handleOnGetCategoryById = () => {
//     CategoryService.getCategoryById(categoryId).then((res) => {
//       console.log('Fetched Category by ID:', res);
//     });
//   };

//   const handleOnUpdateCategoryById = () => {
//     CategoryService.updateCategoryById(categoryId, { name: categoryName }).then((res) => {
//       console.log('Updated Category:', res);
//     });
//   };

//   const handleOnPatchCategoryById = () => {
//     CategoryService.patchCategoryById(categoryId, { name: categoryName }).then((res) => {
//       console.log('Patched Category:', res);
//     });
//   };

//   const handleOnDeleteCategoryById = () => {
//     CategoryService.deleteCategoryById(categoryId).then((res) => {
//       console.log('Deleted Category:', res);
//     });
//   };

//   return (
//     <div>
//       <h1>Test Type & Category API Requests</h1>

//       {/* Inputs for testing TypeService */}
//       <div>
//         <input type="text" placeholder="Type ID" value={typeId} onChange={(e) => setTypeId(e.target.value)} />
//         <input type="text" placeholder="Type Name" value={typeName} onChange={(e) => setTypeName(e.target.value)} />
//       </div>

//       {/* Buttons for TypeService */}
//       <div>
//         <button onClick={handleOnGetTypes}>Fetch Types</button>
//         <button onClick={handleOnCreateType}>Create Type</button>
//         <button onClick={handleOnGetTypeById}>Get Type by ID</button>
//         <button onClick={handleOnUpdateTypeById}>Update Type by ID</button>
//         <button onClick={handleOnPatchTypeById}>Patch Type by ID</button>
//         <button onClick={handleOnDeleteTypeById}>Delete Type by ID</button>
//       </div>

//       <hr />

//       {/* Inputs for testing CategoryService */}
//       <div>
//         <input
//           type="text"
//           placeholder="Category ID"
//           value={categoryId}
//           onChange={(e) => setCategoryId(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Category Name"
//           value={categoryName}
//           onChange={(e) => setCategoryName(e.target.value)}
//         />
//       </div>

//       {/* Buttons for CategoryService */}
//       <div>
//         <button onClick={handleOnGetCategory}>Fetch Category</button>r
//         <button onClick={handleOnCreateCategory}>Create Category</button>
//         <button onClick={handleOnGetCategoryById}>Get Category by ID</button>
//         <button onClick={handleOnUpdateCategoryById}>Update Category by ID</button>
//         <button onClick={handleOnPatchCategoryById}>Patch Category by ID</button>
//         <button onClick={handleOnDeleteCategoryById}>Delete Category by ID</button>
//       </div>
//     </div>
//   );
// };

// export default Requests;
