import hryvniaSymbol from '@assets/svg/hryvnia.svg';
import cl from './index.module.scss';

const ProductResults = ({ products }) => (
  <section className={cl.searchResultsSection}>
    <hr />
    <ul>
      {products.map((product) => (
        <li key={product.id} className={cl.searchResultItem}>
          <a href=" ">
            <img src={product.urlImg} alt={product.name} />
          </a>
          <section className={cl.searchResultInfo}>
            <a href="">
              <p className={cl.productName}>{product.name}</p>
            </a>
            <p className={cl.productPrice}>
              {product.price} <img src={hryvniaSymbol} alt="Hryvnia symbol" className={cl.hryvniaSymbol} />
            </p>
          </section>
        </li>
      ))}
    </ul>
    {products.length >= 3 && (
      <a className={cl.showAll} href=" ">
        Показати всі результати пошуку
      </a>
    )}
  </section>
);

export default ProductResults;
