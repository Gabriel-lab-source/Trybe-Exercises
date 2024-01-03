const books = require('./BookArrObj')

// Faça uma função que retorne true caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.

const authorUnique = () => {
  return books.every((book) =>
  !books.some((bookSome) =>
    (bookSome.author.birthYear === book.author.birthYear)
    && (bookSome.author.name !== book.author.name)));
}