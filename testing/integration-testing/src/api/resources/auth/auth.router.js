const express = require('express');

const authController = require('./auth.controller');

const router = express.Router();

// define the routes
router
  .route('/register')
    .post(authController.register);

module.exports = router;
