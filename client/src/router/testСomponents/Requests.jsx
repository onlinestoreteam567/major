import ProductService from '@services/productService';

const Requests = () => {
  const handleOnGetCategory = () => {
    ProductService.getCategory();
  };
  return (
    <div>
      <button onClick={handleOnGetCategory}>handleOnGetCategory</button>
    </div>
  );
};

export default Requests;
