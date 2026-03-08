const books = [
     {title: "Leviathan Wakes", yearPublished: 2011, authorIds: ["0","1"], genreId: "1"},
     {title: "Columbus Day", yearPublished: 9999},
     {title: "The Three-Body Problem", yearPublished: 9999},
     ]

exports.all = books;

exports.add = (book) => {
  books.push(book);
}
exports.get = (idx) => {
  return books [idx];
}

exports.update = (book) => {
  books[book.id] = book;
}

exports.upsert = (book) => {
  if (book.authorIds && ! Array.isArray(book.authorIds)) {
    book.authorIds = [book.authorIds];
  }
  if (book.id) {
    exports.update(book);
  } else {
    exports.add(book);
  }
}

