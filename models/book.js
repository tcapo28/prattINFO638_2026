const books = [
     {title: "Leviathan Wakes", yearPublished: 9999},
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

exports.upsert = (book) => {
  if (book.id) {
    exports.update(book);
  } else {
    exports.add(book);
  }
}
exports.update = (book) => {
  books[book.id] = book;
}