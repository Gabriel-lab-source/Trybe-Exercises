import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import './styles/App.css';
import { ProductType, ProductWithId } from './types';

function App() {
  const [switchComponent, setSwitchComponent] = useState(true);
  const [products, setProducts] = useState<ProductWithId[]>([]);

  const handleSubmit = (productInfo: ProductType) => {
    const id = uuidv4();
    setProducts([...products, { ...productInfo, id }]);
  };

  const handleDelete = (id: string | number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="app">
      <header>
        <button onClick={ () => setSwitchComponent(true) }>Cadastrar</button>
        <button onClick={ () => setSwitchComponent(false) }>Ver produtos</button>
      </header>
      {
        switchComponent ? <RegisterProduct
          handleSubmit={
          handleSubmit
}
        /> : <ListProducts products={ products } handleDelete={ handleDelete } />
      }
    </div>
  );
}

export default App;
