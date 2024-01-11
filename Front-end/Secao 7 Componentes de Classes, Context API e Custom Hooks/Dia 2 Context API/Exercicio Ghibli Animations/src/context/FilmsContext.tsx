import { createContext } from 'react';

export type FilmType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type ContextType = {
  apiData: FilmType[];
  favorites: FilmType[];
  handleFavorite: (favorite: FilmType) => void;
};

const FilmsContext = createContext({} as ContextType);

export default FilmsContext;
