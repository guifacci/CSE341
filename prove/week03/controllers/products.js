const Books = require('../models/product');

const booksArray = Books.fetchAll();
const summary = Books.bookSummary;
const title = Books.bookTitle;

exports.getAddBooksPage = (request, response, next)=>{
    response.render('add-books',  {pageTitle: 'Title For Books' });
};

exports.postAddBooksProcess = (request, response, next)=>{
        
        const book = new Books(request.body.bookTitle, request.body.bookSummary);
        book.add();
        response.redirect('/');
};

exports.getHomePage = (request, response, next)=>{
        Books.fetchAll((books)=>{
        response.render('home', {books: books});
    });
};