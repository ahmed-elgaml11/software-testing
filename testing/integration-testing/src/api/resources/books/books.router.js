const express = require('express');

const booksController = require('./books.controller');

const router = express.Router();

// define the routes
router
  .route('/')
    .get(booksController.getBooks)
    .post(booksController.createBook);

router
  .route('/:id')
    .get(booksController.getBook)
    .put(booksController.updateBook)
    .delete(booksController.deleteBook);

module.exports = router;
