const books = require('./BookArrObj');

/* const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    !nameBook ? nameBook = book.name : nameBook;
    if (book.name.length < nameBook.length) nameBook = book.name;
  });
  return nameBook;
}; */

const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
};