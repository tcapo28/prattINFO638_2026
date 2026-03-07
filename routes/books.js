const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');

router.get('/', function(req, res, next) {
  const books = Book.all
  res.render('books/index', { title: 'BookedIn || books', books: books });
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body));
  Book.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the book has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/books')
});

router.get('/form', async (req, res, next) => {
  res.render('books/form', { title: 'BookedIn || Books', authors: Author.all });
});
router.get('/edit', async (req, res, next) => {
  let bookIndex = req.query.id;
  let book = Book.get(bookIndex);
  res.render('books/form', { title: 'BookedIn || Books', book: book, bookIndex: bookIndex, authors: Author.all });
});

router.get('/show/:id', async (req, res, next) => {
  let bookIdx = req.params.id;
  let book = Book.get(bookIdx);
  let author = Author.get(book.authorId);
  let authors = book.authorIds.map(Author.get)
  res.render('books/show', {title: 'BookedIn || Book', book: book, bookIdx: bookIdx, author: author})
});


module.exports = router;

