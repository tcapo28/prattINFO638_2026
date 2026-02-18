const express = require('express');
const handlebars = require('express-handlebars').create();

const indexRouter = require('./routes/index')
const authorsRouter = require('./routes/authors');
const booksRouter = require('./routes/books');

const app = express();
const port = 3000;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.use('/', indexRouter);
app.use('/authors', authorsRouter);
app.use('/books', booksRouter);

app.use((_req, res) => {
    res.status(404);
    res.send("<h1>404 sad</h1>");
});

app.use((err, _req, res, _next) => {
    console.log(err.message);
    res.status(500);
    res.send("500 - Oh no");
})

app.listen(port, () => console.log(`Express started on http://localhost:${port}; ` +
'press Ctrl-C to terminate.'));

