const express = require('express');

const { booksController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/books', booksController.getAll);

app.get('/books/:id', booksController.getById);

app.post('/books', booksController.createBook);

app.put('/books/:id', booksController.updateBook);

app.delete('/books/:id', booksController.deleteBook);

module.exports = app;