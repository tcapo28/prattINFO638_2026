const express = require('express');
const router = express.Router();



router.get('/', function(req, res, next) {

  res.render('books/index', { title: 'BookedIn || books', books: books });
});

module.exports = router;

