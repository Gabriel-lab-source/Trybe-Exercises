import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookInfoType } from './types';

const bookIndexStart = 10;
const bookIndexEnd = 15;

function App() {
  const [index, setIndex] = useState(bookIndexStart);

  // A função abaixo é uma outra opção de resolução. Ela é chamada no evento de click do botão 'próximo livro' e atualiza o estado ao somar o valor do índice.

  /*   const handleNextBtn = () => {
    if (index + 1 <= bookIndexEnd) {
      setIndex(index + 1);
    } else {
      setIndex(bookIndexStart);
    }
  }; */

  const [wishList, setWishList] = useState<BookInfoType[]>([]);

  const handleWishBtn = () => {
    setWishList([...wishList, data[index]]);
  };

  const [readingList, setReadList] = useState<BookInfoType[]>([]);

  function handleReadingBtn() {
    setReadList([...readingList, data[index]]);
  }

  const [readBooks, setReadBooks] = useState<BookInfoType[]>([]);

  const [bookList, setBookList] = useState(wishList);

  return (
    <div className="app">
      <div className="book-selector">
        <Book bookInfo={ data[index] } showDetails />
        <div className="selector-buttons">
          <button onClick={ handleWishBtn }>Adicionar à lista de desejos</button>
          <button onClick={ handleReadingBtn }>Adicionar à lista de leitura</button>
          <button
            onClick={ () => setReadBooks([...readBooks, data[index]]) }
          >
            Adicionar à lista de lidos

          </button>
          <button
            onClick={ () => setIndex((index + 1) % bookIndexEnd) }
          >
            Próximo livro

          </button>
        </div>
      </div>

      <div className="list-buttons">
        <button
          onClick={
          () => setBookList(wishList)
}
        >
          Exibir lista de desejos

        </button>
        <button
          onClick={
          () => setBookList(readingList)
}
        >
          Exibir lista de leitura

        </button>
        <button
          onClick={ () => setBookList(readBooks) }
        >
          Exibir lista de lidos

        </button>
      </div>
      <h1>Lista de ...</h1>
      <BookList books={ bookList } />
    </div>
  );
}

export default App;
