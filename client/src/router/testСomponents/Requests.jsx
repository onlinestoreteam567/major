import ProductService from '@services/CategoryService';

const Requests = () => {
  const handleOnGetCategory = () => {
    ProductService.getCategory().then((res) => console.log(res));
  };
  const handleOnCreateCategory = () => {
    ProductService.createCategory('frontend test').then((res) => console.log(res));
  };
  return (
    <div>
      <button onClick={handleOnGetCategory}>handleOnGetCategory</button>
      <button onClick={handleOnCreateCategory}>handleOnCreateCategory</button>
    </div>
  );
};

export default Requests;
