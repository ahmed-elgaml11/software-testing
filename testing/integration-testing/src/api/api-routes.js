// 3rd party libraries
const express = require('express');
const Router = express.Router();

// own libraries
const booksRouter = require('./resources/books/books.router');
const authRouter = require('./resources/auth/auth.router');


// map the api routes
Router.use('/books', booksRouter);
Router.use('/auth', authRouter);


module.exports = Router;
