const Books = require('../models/product');

exports.getAddBooksPage = (request, response, next)=>{
    response.render('add-books',  {pageTitle: 'Title For Books' });
};

exports.postAddBooksProcess = (request, response, next)=>{
        const book = new Books(request.body.bookTitle, request.body.bookSummary, request.body.bookPrice, request.body.bookId);
        book.add();
        response.redirect('/');
};

exports.getHomePage = (request, response, next)=>{
        Books.fetchAll((books)=>{
        response.render('home', {books: books});
    });
};

exports.getBook = (request, response, next) => {
    const bookId = request.params.bookId;
    Books.getBookById(bookId, book=>{
            response.render('product-details',{book: book});
    });
};