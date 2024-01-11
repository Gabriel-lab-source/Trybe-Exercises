import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';

export default function Home() {
  const { apiData, handleFavorite } = useContext(FilmsContext);
  return (
    <div>
      <Header />
      <h1>Films</h1>
      {
        apiData.map((info) => (
          <div key={ info.id }>
            <h2>{ info.title }</h2>
            <img src={ info.image } alt={ info.title } />
            <button
              onClick={ () => handleFavorite(info) }
            >
              Favoritar
            </button>
          </div>
        ))
      }
    </div>
  );
}
