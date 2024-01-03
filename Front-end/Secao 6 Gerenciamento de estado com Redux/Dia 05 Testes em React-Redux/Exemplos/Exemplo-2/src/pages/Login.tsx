import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from '../redux/actions/index';

function Login() {
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function handleDisabled() {
    if (userName) return false;
    return true;
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(event) => handleChange(event)}
          placeholder="Digite seu nome"
        />
        <Link to="/profile">
          <button
            type="submit"
            disabled={handleDisabled()}
            onClick={() => dispatch(actionCreator(userName))}
          >
            Entrar
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
