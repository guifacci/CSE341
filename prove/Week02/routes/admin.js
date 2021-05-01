const express = require('express');
const bodyParser = require('body-parser');

//const router = express.Router();
const router = express();
const booksArray = [{bookTitle: 'Dom Casmurro', bookSummary: 'Machado de Asssis'}];

router.use(express.urlencoded({extended: false}));

//Home page
router.get('/', (request, response, next)=>{
    const bookTitle = booksArray.bookTitle;

    response.render('home', {book: bookTitle, booksArray: booksArray});
});
//Add books page
router.get('/books', (request, response, next)=>{
    const bookTitle = booksArray.bookTitle;

    response.render('add-books', {book: bookTitle});
});
//Handle form submition
router.post('/add-books', (request, response, next)=>{
    const newBook = {
            bookTitle: request.body.bookTitle,
            bookSummary: request.body.bookSummary
        };
            booksArray.push(newBook);
    response.redirect('/');
});

module.exports = router;