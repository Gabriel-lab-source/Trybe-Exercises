const books = require('./BookArrObj');

// Encontre o nome da primeira pessoa autora nascida no ano de 1947.

const findAuthor = (dateOfBirth) => books.find((book) => book['author'].birthYear === dateOfBirth).author.name;  

console.log(findAuthor(1947));