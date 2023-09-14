import './App.css';
import Product from './components/Product';
import ProductsList from './components/ProductList';
import products from './data';

function App() {
  return (
    <ProductsList>
      { products.map((product) => <Product key={ product.id } productInfo={ product } />)}
    </ProductsList>
  );
}

export default App;
