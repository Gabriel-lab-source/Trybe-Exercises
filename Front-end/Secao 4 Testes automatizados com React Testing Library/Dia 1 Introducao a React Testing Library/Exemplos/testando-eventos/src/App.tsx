import { useState } from 'react';
import ValidEmail from './components/ValidEmail';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [saveEmail, setSaveEmail] = useState('');

  const handleSendEmail = () => {
    setSaveEmail(email);
    setEmail('');
  };

  return (
    <div className="App">
      <div className="form-container">
        <label htmlFor="id-email">
          Email:
          <input
            id="id-email"
            type="email"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
          />
        </label>
        <input
          id="btn-send"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ handleSendEmail }
        />
        <input
          id="btn-back"
          type="button"
          value="Voltar"
          onClick={ () => setSaveEmail('') }
        />
      </div>
      <ValidEmail email={ saveEmail } />
    </div>
  );
}

export default App;
