import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FilmsContext, { FilmType } from './context/FilmsContext';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {
  const [apiData, setApiData] = useState([]);
  const [favorites, setFavorites] = useState<FilmType[]>([]);

  useEffect(() => {
    async function fetchGhibli() {
      const fetchApi = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
      const response = await fetchApi.json();
      setApiData(response);
    }
    fetchGhibli();
  }, []);

  const handleFavorite = (favorite: FilmType) => {
    const findFav = favorites.find((item) => item === favorite);
    if (findFav) {
      const filterFav = favorites.filter((item) => item !== favorite);
      setFavorites(filterFav);
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, favorite]);
    }
  };

  return (
    <FilmsContext.Provider value={ { apiData, favorites, handleFavorite } }>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/favorites" Component={ Favorites } />
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;
