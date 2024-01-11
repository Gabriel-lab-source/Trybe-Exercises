import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

export default function Favorites() {
  const { favorites, handleFavorite } = useContext(FilmsContext);
  console.log(favorites);
  return (
    <>
      <h1>Favorites</h1>
      <Header />
      {
        favorites.map((info) => (
          <div key={ info.id }>
            <h2>{ info.title }</h2>
            <img src={ info.image } alt={ info.title } />
            <button
              onClick={ () => handleFavorite(info) }
            >
              Desfavoritar
            </button>
          </div>
        ))
      }
    </>
  );
}
