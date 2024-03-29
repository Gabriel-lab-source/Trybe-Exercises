import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookInfoType } from './types';

function App() {
  const [ index, setIndex ] = useState(0);
  const [ wishList, setWishList ] = useState<BookInfoType[]>([]);
  const [ readingList, setReadingList ] = useState<BookInfoType[]>([]);
  const [ readBookList, setToReadBookList ] = useState<BookInfoType[]>([]);

  return (
    <div className="app">
      <div className="book-selector">
        <Book bookInfo={ data[index] } showDetails />
        <div className="selector-buttons">
          <button onClick={ () => setWishList([...wishList, data[index]]) }>Adicionar à lista de desejos</button>
          <button onClick={ () => setReadingList([...readingList, data[index]]) }>Adicionar à lista de leitura</button>
          <button onClick={ () => setToReadBookList([...readBookList, data[index]]) }>Adicionar à lista de lidos</button>
          <button onClick={ () => setIndex((index + 1) % data.length) }>Próximo livro</button>
        </div>
      </div>

      <div className="list-buttons">
        <button>Exibir lista de desejos</button>
        <button>Exibir lista de leitura</button>
        <button>Exibir lista de lidos</button>
      </div>
      <h1>Lista de ...</h1>
      <BookList books={ wishList } />
    </div>
  );
}

export default App;
