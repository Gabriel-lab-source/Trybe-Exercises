const books = require('./BookArrObj');

// Encontre o primeiro livro cujo nome possua 26 caracteres.

const findBook = () => books.find((book) => book.name.length === 26).name;

console.log(findBook());