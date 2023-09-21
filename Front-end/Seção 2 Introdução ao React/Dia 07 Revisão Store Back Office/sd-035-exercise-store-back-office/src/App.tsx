import { useState } from 'react';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import './styles/App.css';

function App() {
  const [switchComponent, setSwitchComponent] = useState(true);

  return (
    <div className="app">
      <header>
        <button onClick={ () => setSwitchComponent(true) }>Cadastrar</button>
        <button onClick={ () => setSwitchComponent(false) }>Ver produtos</button>
      </header>
      {
        switchComponent ? <RegisterProduct /> : <ListProducts products={ [] } />
      }
    </div>
  );
}

export default App;
