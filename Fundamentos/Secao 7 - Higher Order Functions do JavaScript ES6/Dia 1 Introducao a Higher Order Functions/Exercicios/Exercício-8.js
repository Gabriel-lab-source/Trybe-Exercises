const books = require('./BookArrObj');

// Faça uma função que retorne true se algum livro foi lançado na década de 80, e false, caso contrário.

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
};

console.log(someBookWasReleaseOnThe80s());