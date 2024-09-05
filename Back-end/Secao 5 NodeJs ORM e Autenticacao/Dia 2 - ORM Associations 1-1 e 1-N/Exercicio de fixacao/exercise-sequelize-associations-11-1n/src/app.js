const bodyParser = require('body-parser');
const express = require('express');
const account = require('./controllers/accounts.controller');
const comments = require('./controllers/comments.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id', account.getById);

app.get('/accounts-v2/:id', account.getByIdLazy);

app.get('/accounts/:id/comments', comments.getByIdAndComments);

app.post('/accounts', account.saveAccountAndProfile);

app.post('/accounts/:id/comment', comments.saveComment);

module.exports = app;
