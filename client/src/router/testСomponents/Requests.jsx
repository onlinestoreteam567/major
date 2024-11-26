import CategoryService from '@services/CategoryService';

const Requests = () => {
  const handleOnGetCategory = () => {
    CategoryService.getCategory().then((res) => console.log(res));
  };
  const handleOnCreateCategory = () => {
    CategoryService.createCategory('frontend test').then((res) => console.log(res));
  };

  const handleOnGetCategoryById = (id) => {
    CategoryService.getCategoryById(id).then((res) => console.log(res));
  };

  return (
    <div>
      <button onClick={handleOnGetCategory}>handleOnGetCategory</button>
      <button onClick={handleOnCreateCategory}>handleOnCreateCategory</button>
      <button onClick={() => handleOnGetCategoryById(1)}>handleOnGetCategoryById</button>
    </div>
  );
};

export default Requests;
