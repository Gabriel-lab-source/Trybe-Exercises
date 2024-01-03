import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export type ReduxState = {
  userName: string;
};

function Login() {
  const state = useSelector((state: ReduxState) => state);

  return (
    <div>
      {state.userName ? (
        <h1>Boas vindas, {state.userName}</h1>
      ) : (
        <h1>Você precisa realizar o login</h1>
      )}
      <Link to="/">
        <h3>Voltar</h3>
      </Link>
    </div>
  );
}

export default Login;
